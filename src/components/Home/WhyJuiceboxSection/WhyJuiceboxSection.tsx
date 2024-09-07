import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { Trans, t } from '@lingui/macro'
import { SectionContainer } from 'components/Home/SectionContainer'
import { SectionHeading } from 'components/Home/SectionHeading'
import { WhyJuiceboxCard } from 'components/Home/WhyJuiceboxSection/WhyJuiceboxCard'

export function WhyJuiceboxSection() {
  return (
    <SectionContainer>
      <SectionHeading
        heading={t`Why dEdu?`}
        subheading={
          <Trans>
            THE ENORMITY OF CONFORMITY
          </Trans>
        }
      />

      <div
        className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8"
        style={{ perspective: 1000 }}
      >
        <WhyJuiceboxCard
          className="bg-melon-400 dark:bg-melon-500"
          iconWrapperClassName="bg-melon-200 dark:bg-melon-800"
          icon={
            <UserGroupIcon className="h-8 w-8 text-melon-700 dark:text-melon-400" />
          }
          heading={t`THE ENORMITY OF CONFORMITY`}
          content={
            <Trans>
              Today‘s education system is all about signaling a one-time degree but does no longer equip you to thrive in the modern economy. 
              On top of that, students have no control over an increasingly politized curriculum, high tuition fees help perpetuate elites, and to conform you’re expected to go to college only between your late teens and your early twenties.
              For an industry that spends an estimated 5T (trillion!) dollars per year globally, education arguably has the worst RoI, mostly cranking out unimaginative worker bees ready to toil in lifelong servitude to an employer.
            </Trans>
          }
        />
        <WhyJuiceboxCard
          className="bg-peel-400"
          iconWrapperClassName="bg-peel-100 dark:bg-peel-800"
          icon={
            <BoltIcon className="h-8 w-8 text-peel-500 dark:text-peel-400" />
          }
          heading={t`MATCHING EDUCATIONAL DEMAND AND SUPPLY`}
          content={
            <Trans>
              The dEdu School is replacing the one-time investment in an increasingly devaluating degree with on-demand learning if and when you want to invest in extra skills.
              By letting its users crowdfund the courses they want to be taught, dEdu creates an open outcry market where educational demand and supply match, decentralizing and decensoring the curriculum.
              Your proof-of-learning NFT after successful completion of a course at the School signals the real learning of relevant skills for today’s Web3 economy.
            </Trans>
          }
        />
      </div>
    </SectionContainer>
  )
}
