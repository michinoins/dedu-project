import { Trans } from '@lingui/macro'
import { XLButton } from 'components/buttons/XLButton'
import { SectionContainer } from 'components/Home/SectionContainer'
import { SectionHeading } from 'components/Home/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'

export function HowDEduWorksSection() {
  return (
    <SectionContainer className="relative pt-6 pb-24 md:px-0 md:pt-10">
      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/home/categories-dedu/top-section-logo-orange.svg"
          alt="dEdu Logo"
          width={50}
          height={50}
        />
        <SectionHeading
          className="mb-8"
          heading={<Trans>How dEdu works</Trans>}
          subheading={<Trans>A whole new way of transferring knowledge</Trans>}
        />
        <div className="mt-8 flex flex-col gap-8 md:flex-row">
          <Card
            title={<Trans>For teachers</Trans>}
            content={
              <Trans>
                If you want to teach about something, simply create a
                crowdfunding campaign on the School's platform. You only need 1
                dEdu token to propose a course. Once funded, the School provides
                you with everything you need, from webinar software to content
                creation tools.
              </Trans>
            }
            imageSrc="/assets/images/home/categories-dedu/how-dedu-works-1.svg"
            ctaText="CTA"
            ctaLink="/create"
            imagePosition="bottom"
          />
          <Card
            title={<Trans>For students</Trans>}
            content={
              <Trans>
                If you'd like to see a course taught, back its campaign from
                your connected wallet using any major crypto. The course price
                is set by the teacher and everybody who wants to attend
                contributes in equal amounts. You'll receive a non-transferable
                access token to the course's token-gated URL.
              </Trans>
            }
            imageSrc="/assets/images/home/categories-dedu/how-dedu-works-2.svg"
            ctaText="CTA"
            ctaLink="/projects"
            imagePosition="top"
          />
        </div>
      </div>
    </SectionContainer>
  )
}

function Card({
  title,
  content,
  imageSrc,
  ctaText,
  ctaLink,
  imagePosition,
}: {
  title: React.ReactNode
  content: React.ReactNode
  imageSrc: string
  ctaText: string
  ctaLink: string
  imagePosition: 'top' | 'bottom'
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md max-w-md flex flex-col">
      {imagePosition === 'top' && (
        <>
          <Image src={imageSrc} alt={`Illustration for ${title}`} width={300} height={200} className="mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        </>
      )}
      {imagePosition === 'bottom' && <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>}
      <p className="mb-6 text-gray-600">{content}</p>
      <Link href={ctaLink} className={imagePosition === 'bottom' ? 'mb-4' : 'mt-auto'}>
        <XLButton size="large" className="w-full bg-white hover:bg-gray-100 text-black border border-black">
          {ctaText}
        </XLButton>
      </Link>
      {imagePosition === 'bottom' && (
        <Image src={imageSrc} alt={`Illustration for ${title}`} width={300} height={200} className="mt-4" />
      )}
    </div>
  )
}
