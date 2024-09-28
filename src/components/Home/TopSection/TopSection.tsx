import { Trans } from '@lingui/macro'
import { SectionContainer } from 'components/Home/SectionContainer'
import { SectionHeading } from 'components/Home/SectionHeading'
import { XLButton } from 'components/buttons/XLButton'
import { HOMEPAGE } from 'constants/fathomEvents'
import { PV_V1 } from 'constants/pv'
import { useProjectsQuery } from 'generated/graphql'
import { useTrendingProjects } from 'hooks/useTrendingProjects'
import { client } from 'lib/apollo/client'
import { trackFathomGoal } from 'lib/fathom'
import { ProjectTagName } from 'models/project-tags'
import Image from 'next/image'
import Link from 'next/link'

import { getSubgraphIdForProject } from 'utils/graph'

const HEADER_TAGS: ProjectTagName[] = [
  'dao',
  'nfts',
  'fundraising',
  'art',
  'business',
]

const DEFAULT_TRENDING_PROJECTS_LIMIT = 10

// These projects will render if there isn't enough trending projects.
const BACKUP_PROJECTS = [
  getSubgraphIdForProject(PV_V1, 199), // moondao
  getSubgraphIdForProject(PV_V1, 36), // constituiondao
  getSubgraphIdForProject(PV_V1, 323), // assange
  // add more as needed
]

export function TopSection() {
  const { data: trendingProjects, isLoading } = useTrendingProjects(
    DEFAULT_TRENDING_PROJECTS_LIMIT,
  )

  const { data } = useProjectsQuery({
    client,
    variables: {
      where: {
        id_in: BACKUP_PROJECTS,
      },
    },
  })
  const backupProjects = data?.projects

  const remainderProjectCount =
    DEFAULT_TRENDING_PROJECTS_LIMIT - (trendingProjects?.length ?? 0)

  const renderBackup =
    trendingProjects && backupProjects && remainderProjectCount
      ? backupProjects
          .slice(0, remainderProjectCount)
          .filter(
            p =>
              !trendingProjects
                .map(proj => proj.projectId)
                .includes(p.projectId),
          )
      : []

  const renderProjects = trendingProjects
    ? [...trendingProjects, ...renderBackup]
    : undefined

  const rotatedStyle = {
    display: 'inline-block',
    transform: 'rotate(180deg)',
  }
  const helixFontStyle = {
    fontFamily: 'Helix, sans-serif',
  }

  return (
    <SectionContainer className="relative pt-6 pb-24 md:px-0 md:pt-10">
      <div
        className="absolute inset-0 z-0 flex items-start justify-center"
        style={{ top: '10%' }}
      >
        <div className="relative">
          <Image
            src="/assets/images/home/categories-dedu/top-section.svg"
            alt="Background frame"
            width={500}
            height={366}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div className="relative z-10">
        <SectionHeading
          className="mb-8"
          headingClassName="text-5xl md:text-7xl"
          topPadding="pt-40"
          heading={
            <>
              <div className="whitespace-nowrap">
                <Trans>TURNING EDUCATION</Trans>
              </div>
              <div>
                <Trans>
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>O</span>
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>
                    И
                  </span>{' '}
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>I</span>
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>T</span>
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>
                    S
                  </span>{' '}
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>H</span>
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>E</span>
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>A</span>
                  <span style={{ ...rotatedStyle, ...helixFontStyle }}>D</span>
                </Trans>
              </div>
            </>
          }
          subheading={
            <Trans>
              <span style={{ ...helixFontStyle, fontSize: '1.5rem' }}>
                dEdu is a{' '}
                {/* // somehow tailwind is overwritten by something so apply inline style */}
                <span style={{ color: '#8B5CF6' }}>
                  decentralized online school
                </span>{' '}
                with live courses taught by anybody who gets crowdfunded to
                teach
              </span>
            </Trans>
          }
        />
        <div className="mb-16 flex w-full flex-col-reverse justify-center gap-4 md:w-auto md:flex-row">
          <Link href="/projects" className="w-full md:w-auto">
            <XLButton
              size="large"
              type="default"
              className="hover:bg-gray-100 w-full border-black bg-white px-8 text-black md:w-auto"
              onClick={() => {
                trackFathomGoal(HOMEPAGE.EXPLORE_PROJECTS_CTA)
              }}
            >
              <Trans>Explore course</Trans>
            </XLButton>
          </Link>
          <Link href="/create" className="w-full md:w-auto">
            <XLButton
              size="large"
              type="primary"
              className="hover:bg-gray-900 w-full border-black bg-white px-8 text-black md:w-auto"
              onClick={() => {
                trackFathomGoal(HOMEPAGE.CREATE_A_PROJECT_CTA_NEW)
              }}
            >
              <Trans>Teach a course</Trans>
            </XLButton>
          </Link>
        </div>

        <div className="relative z-10 mt-48 flex flex-col items-center">
          <Image
            src="/assets/images/home/categories-dedu/top-section-logo-orange.svg"
            alt="Orange Logo"
            width={50}
            height={50}
          />
          <h2 className="mt-8 text-center text-4xl font-bold text-black">
            <Trans>
              Access token-gated courses
              <br />
              staged by{' '}
              <span className="text-[#FFA500]">teachers you crowdfund</span>
            </Trans>
          </h2>
        </div>
        <div className="relative mt-8 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white via-transparent to-white" />
          <Image
            src="/assets/images/home/categories-dedu/greekSchool.svg"
            alt="Greek School Background"
            layout="responsive"
            width={1200}
            height={500}
            className="h-auto w-full object-cover"
          />
        </div>
        {/* // somehow text-gray-500 not working  */}
        <div className="mt-4 text-center text-xl font-semibold text-[#828282] ">
          <Trans>Course proposals now open for crowdfunding: </Trans>
        </div>

        {/* {!isLoading && renderProjects ? (
          <ProjectCarousel
            items={renderProjects?.map(p => (
              <HomepageProjectCard project={p} key={p.id} />
            ))}
          />
        ) : (
          <ProjectCarousel
            items={Array(8)
              .fill(0)
              ?.map((_, idx) => (
                <HomepageProjectCardSkeleton key={`loading-${idx}`} />
              ))}
          />
        )} */}
      </div>
    </SectionContainer>
  )
}
