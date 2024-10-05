import axios from 'axios'
import fs from 'fs'

const FormData = require('form-data')

export type PinataPinResponse = {
  Hash: string
  PinSize: number
  Timestamp: string
}

const PINATA_API_KEY = process.env.INFURA_IPFS_API_KEY
const PINATA_API_SECRET = process.env.INFURA_IPFS_API_SECRET

const AUTH_HEADER = `Bearer ${PINATA_API_SECRET}`

const DEV_ORIGIN = 'http://localhost:3000'
const MAINNET_ORIGIN = 'https://api.pinata.cloud'

const origin =
  process.env.NODE_ENV === 'development' ? DEV_ORIGIN : MAINNET_ORIGIN

export const pinataApi = axios.create({
  baseURL: 'https://api.pinata.cloud',
  headers: {
    Authorization: AUTH_HEADER,
    origin,
  },
})

/**
 * Pin a file to IPFS using Pinata API
 */
export async function pinFile(
  file: fs.ReadStream | string,
): Promise<PinataPinResponse> {
  const formData = new FormData()
  const uniqueFilename = `data-${Date.now()}.json`

  formData.append('file', file, {
    filename: uniqueFilename,
    contentType: 'application/json',
  })

  const res = await pinataApi.post<PinataPinResponse>(
    '/pinning/pinFileToIPFS',
    formData,
    {
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )

  return res.data
}
