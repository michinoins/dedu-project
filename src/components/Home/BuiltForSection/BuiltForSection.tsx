import { t, Trans } from '@lingui/macro'
import { BuiltForCard } from 'components/Home/BuiltForSection/BuiltForCard'
import { SectionContainer } from 'components/Home/SectionContainer'
import { SectionHeading } from 'components/Home/SectionHeading'
import { useRef } from 'react'

export function BuiltForSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <SectionContainer>
      <SectionHeading
        heading={<Trans>UNCENSORED TEACHING</Trans>}
        subheading={
          <Trans>
            Anybody with dEdu tokens can stage a campaign to teach at the school, about any subject. 
            You decide what’s on the curriculum by crowdfunding the courses you want to see taught. 
            Nobody sets the curriculum: The School is governed by the dEdu community and each dEdu token holder can propose an onchain vote to veto a course.
          </Trans>
        }
        className="whitespace-nowrap overflow-hidden text-ellipsis"
      />
      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
        ref={containerRef}
      >
        <BuiltForCard
          card="daos"
          heading={t`MEET YOUR FELLOW STUDENTS ONLINE AND OFFLINE`}
          subheading={
            <Trans>
              When a teacher gets funded, they commit to teach their course on the School‘s online platform via live webinar, where you‘ll get to meet and interact with your fellow students.
              In addition, the School will help organise offline meetings in various locations.
              As we grow, we plan to build a first physical school for residential education.
              [blue-prints of the school]
            </Trans>
          }
        />
        <BuiltForCard
          card="crowdfunding"
          heading={t`CRYPTO CREDENTIALS`}
          subheading={
            <Trans>
              You'll get the teachers you deserve whose courses will gain the recognition they merit.
              When you‘ve completed all modules of a given course, you’ll receive a soul-bound NFT as proof-of-learing.
              Teachers too can build their onchain reputation by way of students’ token-authenticated reviews.
            </Trans>
          }
        />
      </div>
    </SectionContainer>
  )
}
