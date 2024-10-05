import { Trans } from '@lingui/macro'
import { SectionContainer } from 'components/Home/SectionContainer'
import Image from 'next/image'

export function WhyDeduSection() {
  return (
    <SectionContainer className="bg-gray-100">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="relative mb-8 md:mb-0 md:w-1/2">
          <div className="bg-gray-100 absolute inset-0 blur-md"></div>
          <div className="relative">
            <Image
              src="/assets/images/home/categories-dedu/why-dedu.png"
              alt="Why dEdu illustration"
              width={700}
              height={700}
              objectFit="contain"
              className="relative z-10 rounded-lg"
            />
            <div className="to-gray-100 pointer-events-none absolute inset-0 z-20 rounded-lg bg-gradient-to-b from-transparent via-transparent" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <div className="mb-4">
            <Image
              src="/assets/images/home/categories-dedu/top-section-logo-green.svg"
              alt="dEdu Logo"
              width={60}
              height={60}
            />
          </div>
          <h2 className="mb-6 text-6xl font-bold">
            Why d<span style={{ color: '#7Eff00' }}>Edu</span>?
          </h2>
          <p
            className="font-serif relative mb-4 pl-4 text-xl italic"
            style={{ color: '#374151' }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                fontSize: '2.25rem',
                color: '#9ca3af',
              }}
            >
              "
            </span>
            <Trans>
              We need education that lets us imagine plausible futures instead
              of perpetuating the status quo
            </Trans>
            <span
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                fontSize: '2.25rem',
                color: '#9ca3af',
              }}
            >
              "
            </span>
          </p>
          <p className="mt-2 text-right text-xl" style={{ color: '#6b7280' }}>
            <Trans>- Han, Founder</Trans>
          </p>
        </div>
      </div>

      <div className="px-4 pt-8 sm:px-6 sm:pt-12 md:px-8 md:pt-16 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="pr-8 md:w-1/2">
            <h3 className="mb-4 text-2xl font-bold">
              <Trans>The enormity of conformity</Trans>
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              <Trans>
                Today's education system is all about signaling a one-time
                degree but does no longer equip you to thrive in the modern
                economy.
              </Trans>
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              <Trans>
                On top of that, students have no control over an increasingly
                politized curriculum, high tuition fees help perpetuate elites,
                and to conform you're expected to go to college only between
                your late teens and your early twenties.
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
            <h3 className="mb-4 text-2xl font-bold">
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
                By letting its users crowdfund the courses they want to be
                taught, dEdu creates an open outcry market where educational
                demand and supply match, decentralizing and decensoring the
                curriculum.
              </Trans>
            </p>
            <p className="text-gray-600 text-lg">
              <Trans>
                Your proof-of-learning NFT after successful completion of a
                course at the School signals the real learning of relevant
                skills for today's Web3 economy.
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
