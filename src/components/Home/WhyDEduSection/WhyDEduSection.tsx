import { Trans } from '@lingui/macro'
import { SectionContainer } from 'components/Home/SectionContainer'
import Image from 'next/image'

export function WhyDeduSection() {
  return (
    <SectionContainer>
      <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image
              src="/assets/images/home/categories-dedu/top-section-logo-green.svg"
              alt="dEdu Logo"
              width={50}
              height={50}
            />
          </div>
          <h2 className="mb-2 text-4xl font-bold">
            Why <span className="text-green-500">dEdu</span>?
          </h2>
          <p className="text-gray-600 text-xl">
            <Trans>
              We need education that lets us imagine plausible futures instead
              of perpetuating the status quo
            </Trans>
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src="/assets/images/home/categories-dedu/why-dedu.svg"
            alt="Why dEdu illustration"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="pr-8 md:w-1/2">
          <h3 className="mb-4 text-3xl font-bold">
            <Trans>The enormity of conformity</Trans>
          </h3>
          <p className="text-gray-600 mb-4 text-lg">
            <Trans>
              Today's education system is all about signaling a one-time degree
              but does no longer equip you to thrive in the modern economy.
            </Trans>
          </p>
          <p className="text-gray-600 mb-4 text-lg">
            <Trans>
              On top of that, students have no control over an increasingly
              politized curriculum, high tuition fees help perpetuate elites,
              and to conform you're expected to go to college only between your
              late teens and your early twenties.
            </Trans>
          </p>
          <p className="text-gray-600 text-lg">
            <Trans>
              For an industry that spends an estimated 5T (trillion!) dollars
              per year globally, education arguably has the worst RoI, mostly
              cranking out unimaginative worker bees ready to toil in lifelong
              servitude to an employer.
            </Trans>
          </p>
        </div>
        <div className="via-green-500 hidden w-px bg-gradient-to-b from-transparent to-transparent md:block"></div>
        <div className="pl-8 md:w-1/2">
          <h3 className="mb-4 text-3xl font-bold">
            <Trans>Matching educational demand and supply</Trans>
          </h3>
          <p className="text-gray-600 mb-4 text-lg">
            <Trans>
              The dEdu School is replacing the one-time investment in an
              increasingly devaluating degree with on-demand learning if and
              when you want to invest in extra skills.
            </Trans>
          </p>
          <p className="text-gray-600 mb-4 text-lg">
            <Trans>
              By letting its users crowdfund the courses they want to be taught,
              dEdu creates an open outcry market where educational demand and
              supply match, decentralizing and decensoring the curriculum.
            </Trans>
          </p>
          <p className="text-gray-600 text-lg">
            <Trans>
              Your proof-of-learning NFT after successful completion of a course
              at the School signals the real learning of relevant skills for
              today's Web3 economy.
            </Trans>
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
