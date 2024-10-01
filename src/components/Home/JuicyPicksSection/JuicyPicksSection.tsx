import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Trans } from '@lingui/macro'
import { ExploreCategories } from 'components/Home/JuicyPicksSection/components/ExploreCategories'
import { useFetchJuicyPicks } from 'components/Home/JuicyPicksSection/hooks/useJuicyPicks'
import { SectionContainer } from 'components/Home/SectionContainer'
import { XLButton } from 'components/buttons/XLButton'
import { useMedia } from 'contexts/Theme/useMedia'
import { Project } from 'generated/graphql'
import Link from 'next/link'
import { JUICY_PICKS_PROJECT_IDS } from './constants'

export function JuicyPicksSection() {
  const juicyPicksQuery = useFetchJuicyPicks()

  const isCarouselBreakpoint = useMedia('(max-width: 1079px)')

  // ensure list sorted by JUICY_PICKS_PROJECT_IDS array order
  const projects = JUICY_PICKS_PROJECT_IDS.map(projectId => {
    return juicyPicksQuery.data?.projects.find(
      project => project.projectId === projectId,
    ) as Project | undefined
  }).filter((p): p is Project => !!p)

  if (!projects) {
    return null
  }

  return (
    <SectionContainer className="flex flex-col gap-24 md:px-0">
      <div className="flex flex-col gap-16">
        <ExploreCategories />
      </div>
    </SectionContainer>
  )
}
