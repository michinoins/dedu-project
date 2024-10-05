import { t } from '@lingui/macro'
import { FEATURE_FLAGS } from 'constants/featureFlags'
import { TxHistoryContext } from 'contexts/Transaction/TxHistoryContext'
import { Contract, providers } from 'ethers'
import { simulateTransaction } from 'lib/tenderly'
import { TransactionOptions } from 'models/transaction'
import { CV2V3 } from 'packages/v2v3/models/cv'
import { useCallback, useContext } from 'react'
import { featureFlagEnabled } from 'utils/featureFlags'
import { emitErrorNotification } from 'utils/notifications'
import { Hash } from 'viem'
import { useWallet } from './Wallet'

type TxOpts = Omit<TransactionOptions, 'value'>

function logTx({
  functionName,
  contract,
  args,
  options,
}: {
  functionName: string
  contract: Contract
  args: unknown[]
  options: TransactionOptions | undefined
}) {
  const reportArgs = Object.values(contract.interface.functions)
    .find(f => f.name === functionName)
    ?.inputs.reduce(
      (acc, input, i) => ({
        ...acc,
        [input.name]: args[i],
      }),
      {
        value: options?.value,
      },
    )

  const log = [
    `functionName=${functionName}`,
    `contractAddress=${contract.address}`,
  ].join('\n')

  console.info(
    `🧃 Transactor::submitting transaction => \n${log}\nargs=`,
    reportArgs,
  )
}

function prepareTransaction({
  functionName,
  contract,
  args,
  options,
}: {
  functionName: string
  contract: Contract
  args: unknown[]
  options: TransactionOptions | undefined
}): Promise<providers.TransactionResponse> {
  if (typeof contract[functionName] !== 'function') {
    console.error(`Function ${functionName} is not defined on the contract`)
    throw new Error(`Function ${functionName} is not defined on the contract`)
  }

  if (!Array.isArray(args)) {
    console.error('args is not an array:', args)
    throw new Error('Invalid arguments: args must be an array')
  }

  // const validateObject = (obj, path = '') => {
  //   for (let key in obj) {
  //     if (obj[key] === undefined) {
  //       console.error(`Undefined value at ${path}${key}`)
  //     } else if (typeof obj[key] === 'object') {
  //       validateObject(obj[key], `${path}${key}.`)
  //     }
  //   }
  // }

  // validateObject(args[1], 'tiered721DelegateData.')
  // validateObject(args[2], 'projectData.')

  try {
    const tx =
      options?.value !== undefined
        ? contract[functionName](...args, { value: options.value })
        : contract[functionName](...args)

    return tx
  } catch (error) {
    console.error('Error preparing transaction:', error)
    throw error
  }
}

export type Transactor = (
  contract: Contract,
  functionName: string,
  args: unknown[],
  options?: TransactionOptions,
) => Promise<boolean>

export type TransactorInstance<T = undefined> = (
  args: T,
  txOpts?: TxOpts,
) => ReturnType<Transactor>

export function useTransactor(): Transactor | undefined {
  const { addTransaction } = useContext(TxHistoryContext)

  const { chain, signer, userAddress } = useWallet()
  const { chainUnsupported, isConnected, changeNetworks, connect } = useWallet()

  return useCallback(
    async (
      contract: Contract,
      functionName: string,
      args: unknown[],
      options?: TransactionOptions,
    ) => {
      if (chainUnsupported) {
        await changeNetworks()
        options?.onDone?.()
        return false
      }
      if (!isConnected) {
        await connect()
        options?.onDone?.()
        return false
      }
      if (!signer || !chain) {
        options?.onDone?.()
        return false
      }

      logTx({ functionName, contract, args, options })

      if (
        process.env.NODE_ENV === 'development' ||
        featureFlagEnabled(FEATURE_FLAGS.SIMULATE_TXS)
      ) {
        try {
          await simulateTransaction({
            contract,
            functionName,
            args,
            userAddress,
            options,
          })
        } catch (e) {
          console.warn('Simulation failed', e)
        }
      }

      try {
        // console.log('Transactor called with:', {
        //   contract,
        //   functionName,
        //   args,
        //   options,
        // })

        const tx = prepareTransaction({ functionName, contract, args, options })
        const result: providers.TransactionResponse = await tx

        // transaction was submitted, but not confirmed/mined yet.
        options?.onDone?.()
        // add transaction to the history UI
        const txTitle = options?.title ?? functionName
        addTransaction?.(
          txTitle,
          {
            hash: result.hash as Hash,
            timestamp: result.timestamp,
          },
          {
            onConfirmed: options?.onConfirmed,
            onCancelled: options?.onCancelled,
          },
        )

        return true
      } catch (e) {
        const message = (e as Error).message

        console.error('Transactor::error', message)

        let description: string
        try {
          let json = message.split('(error=')[1]
          json = json.split(', method=')[0]
          description = JSON.parse(json).message || message
          options?.onError?.(new DOMException(description))
        } catch (_) {
          description = message
          options?.onError?.(new DOMException(description))
          emitErrorNotification(t`Transaction failed`, { description })
        }

        options?.onDone?.()

        return false
      }
    },
    [
      chainUnsupported,
      isConnected,
      signer,
      chain,
      changeNetworks,
      connect,
      addTransaction,
      userAddress,
    ],
  )
}

export function handleTransactionException({
  txOpts,
  missingParam,
  functionName,
  cv,
}: {
  txOpts?: TxOpts
  missingParam?: string
  functionName: string
  cv: '1' | CV2V3 | undefined
}) {
  txOpts?.onError?.(
    new DOMException(
      `Missing ${missingParam ?? 'unknown'} parameter in ${functionName}${
        cv ? ` v${cv}` : ''
      }`,
    ),
  )
  txOpts?.onDone?.()
  return Promise.resolve(false)
}
