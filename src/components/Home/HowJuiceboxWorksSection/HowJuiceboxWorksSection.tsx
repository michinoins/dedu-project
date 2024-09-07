import {
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { Trans, t } from '@lingui/macro'
import ExternalLink from 'components/ExternalLink'
import { SectionContainer } from 'components/Home/SectionContainer'
import { SectionHeading } from 'components/Home/SectionHeading'
import { XLButton } from 'components/buttons/XLButton'
import Image from 'next/legacy/image'
import Link from 'next/link'
import sassyBlueberry from '/public/assets/images/sassy-blueberry.webp'

const StepItem = ({
  header,
  children,
  icon,
  showDottedLine,
}: React.PropsWithChildren<{
  header: string
  icon: JSX.Element
  showDottedLine?: boolean
}>) => (
  <div className="flex gap-3">
    <div className="mb-2 w-14 flex-shrink-0">
      <div>
        <span className="box-content flex h-10 w-10 items-center justify-center rounded-full border-8 border-split-50 bg-split-100 text-split-700 dark:border-split-950 dark:bg-split-900 dark:text-split-500">
          {icon}
        </span>
      </div>
      {showDottedLine && (
        <div className="dotted-line mx-auto h-full w-0.5 text-split-200 dark:text-split-800" />
      )}
    </div>
    <div className="mt-3">
      <h3 className="m-0 text-2xl text-grey-900 dark:text-slate-100">
        {header}
      </h3>
      <p className="mb-0 mt-1 text-base text-grey-700 dark:text-slate-200">
        {children}
      </p>
    </div>
  </div>
)

export function HowJuiceboxWorksSection() {
  return (
    <SectionContainer>
      <SectionHeading
        heading={t`How dEdu works`}
        subheading={
          <Trans>
            It's fast, powerful and easy to use. Launch your project and get
            funded in minutes.
          </Trans>
        }
      />
      <div className="my-0 mx-auto max-w-5xl">
        <div className="justify-between pb-16 lg:flex lg:items-center">
          <div className="flex max-w-xl flex-col gap-y-12">
            <StepItem
              header={t`For teachers`}
              icon={<WrenchScrewdriverIcon className="h-6 w-6" />}
              showDottedLine
            >
              <Trans>
                If you want to teach about something, simply create a
                crowdfunding campaign on the School’s platform. You only need 1
                dEdu token to be a content creator. Once funded, the School
                provides you with everything you need, from webinar software to
                content creation tools.
              </Trans>
            </StepItem>
            <StepItem
              header={t`For students`}
              icon={<CurrencyDollarIcon className="h-6 w-6" />}
            >
              <Trans>
                If you’d like to see a course taught, back its campaign from
                your connected wallet using any major crypto. The course price
                is set by the teacher and everybody who wants to attend
                contributes in equal amounts. You’ll receive a non-transferable
                access token to the course‘s token-gated URL.
              </Trans>
            </StepItem>
          </div>
          <div className="mx-auto mt-20 w-full max-w-xs text-center lg:mx-24 lg:mt-0">
            <Image
              src={sassyBlueberry}
              alt="Sassy Juicebox Blueberry crossing arms"
              loading="lazy"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col flex-wrap justify-center gap-3 md:flex-row">
          <ExternalLink href="https://docs.juicebox.money/">
            <XLButton type="default" size="large">
              <Trans>Read the docs</Trans>
            </XLButton>
          </ExternalLink>

          <Link href="/create">
            <XLButton type="primary" className="w-full md:w-auto" size="large">
              <Trans>Create a project</Trans>
            </XLButton>
          </Link>
        </div>
      </div>
    </SectionContainer>
  )
}
