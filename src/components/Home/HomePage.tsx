import { Footer } from 'components/Footer/Footer'
import { FaqSection } from 'components/Home/FaqSection'

import { JuicyPicksSection } from 'components/Home/JuicyPicksSection/JuicyPicksSection'
import { SuccessStoriesSection } from 'components/Home/SuccessStoriesSection/SuccessStoriesSection'
import { TopSection } from 'components/Home/TopSection/TopSection'
import { WhyDeduSection } from 'components/Home/WhyDEduSection/WhyDEduSection'
import { readNetwork } from 'constants/networks'
import { NetworkName } from 'models/networkName'
import { DecentralizedEducationSection } from './DecentralizedEducation/DecentralizedEducationSection'
import { HowDEduWorksSection } from './HowDEduWorksSection/HowDEduWorksSection'
export function HomePage() {
  return (
    <>
      <div className="[&>*:nth-child(even)]:bg-smoke-50 dark:[&>*:nth-child(even)]:bg-slate-700">
        <TopSection />

        <DecentralizedEducationSection />

        {readNetwork.name === NetworkName.mainnet && <SuccessStoriesSection />}

        <HowDEduWorksSection />

        <WhyDeduSection />

        <JuicyPicksSection />

        <FaqSection />
      </div>
      <Footer />
    </>
  )
}
