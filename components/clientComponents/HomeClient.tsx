import stls from '@/styles/pages/PageHome.module.sass'
import HelpWithChoice from '@/components/sections/Home/HelpWithChoice/HelpWithChoice'
import AdventuresCards from '../sections/Incomers/AdventuresCards/AdventuresCards'
import SupportHelpInResults from '../sections/Home/SupportHelpInResults/SupportHelpInResults'
import dynamic from 'next/dynamic'
import StudyProcess from '@/components/sections/Incomers/StudyProcess/StudyProcess'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'
import { homeStudyProcessData } from '@/components/sections/Incomers/StudyProcess/constants'
import TitleWithCarousel from '../sections/Home/TitleWithCarousel/TitleWithCarousel'
import HomeFAQ from '@/components/sections/Home/HomeFAQ/HomeFAQ'

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), { ssr: false })

const HomeClient = async ({props}) => {
  const all = await fetchAllProgramsData()

  return (
    <div className={stls.container}>
      <TitleWithCarousel heroCarousel={props.heroCarousel}/>
      <AdventuresCards showButton />
      <PsyTest fallbackComponent={HelpWithChoice} isRounded />
      <StudyProcess studyProcess={homeStudyProcessData} showButton />
      <SupportHelpInResults />
      <HomeFAQ />
    </div>
  )
}

export default HomeClient
