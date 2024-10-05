import { Disclosure, Transition } from '@headlessui/react'
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import { Trans } from '@lingui/macro'
import QAs from 'components/Home/FaqList/QAs'
import { SectionContainer } from 'components/Home/SectionContainer'
import { SectionHeading } from 'components/Home/SectionHeading'
import { Fragment, useState } from 'react'

export function FaqSection() {
  const qa = QAs()
  const [openId, setOpenId] = useState<string | null>()

  const toggleDisclosure = (id: string) => () => {
    setOpenId(openId === id ? null : id)
  }

  const renderFaqGroup = (type: 'user' | 'creator') => {
    const filteredQa = qa.filter(item => item.type === type)
    return (
      <div className="mb-8">
        <h3 className="mb-4 text-3xl font-semibold" style={{ color: '#b667f1' }}>
          <Trans>{type === 'user' ? 'For users' : 'For course creators'}</Trans>
        </h3>
        {filteredQa.map(({ id, q, a }, index) => (
          <Disclosure as="div" key={id}>
            {() => {
              const isOpen = openId === id
              return (
                <div className={index !== 0 ? 'border-gray-200 border-t' : ''}>
                  <Disclosure.Button
                    className="w-full py-6 text-left"
                    onClick={toggleDisclosure(id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{q}</span>
                      <FaqButton open={isOpen} />
                    </div>
                  </Disclosure.Button>

                  <Transition
                    show={isOpen}
                    as={Fragment}
                    enter="transition-all ease-in-out duration-300"
                    enterFrom="max-h-0 overflow-hidden opacity-0"
                    enterTo="max-h-[1000px] overflow-hidden opacity-100"
                    leave="transition-all ease-in-out duration-300"
                    leaveFrom="max-h-[1000px] overflow-hidden opacity-100"
                    leaveTo="max-h-0 overflow-hidden opacity-0"
                  >
                    <Disclosure.Panel className="pb-6 pr-12">
                      {a}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )
            }}
          </Disclosure>
        ))}
      </div>
    )
  }

  return (
    <SectionContainer>
      <SectionHeading heading={<Trans><span style={{ color: '#b667f1' }}>FAQs</span></Trans>} />
      <div className="mx-auto w-full max-w-3xl">
        {renderFaqGroup('user')}
        {renderFaqGroup('creator')}
      </div>
    </SectionContainer>
  )
}

const FaqButton = ({ open }: { open: boolean }) => {
  return (
    <div className="relative h-6 w-6">
      <ArrowDownRightIcon
        className={`h-6 w-6 transition-transform duration-200 ${
          open ? 'rotate-[90deg]' : ''
        }`}
        style={{ color: open ? '#b667f1' : 'currentColor' }}
      />
    </div>
  )
}

