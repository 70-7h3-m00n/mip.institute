import stls from '@/styles/pages/PageHome.module.sass'
import HelpWithChoice from '@/components/sections/Home/HelpWithChoice/HelpWithChoice'
import AdventuresCards from '../sections/Incomers/AdventuresCards/AdventuresCards'
import SupportHelpInResults from '../sections/Home/SupportHelpInResults/SupportHelpInResults'
import dynamic from 'next/dynamic'
import StudyProcess from '@/components/sections/Incomers/StudyProcess/StudyProcess'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'
import Title from '../sections/Home/Title/Title'
import { homeStudyProcessData } from '@/components/sections/Incomers/StudyProcess/constants'

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), { ssr: false })

const HomeClient = async () => {
  const all = await fetchAllProgramsData()
  // console.log(all);

  return (
    <div className={stls.container}>
      <Title all={all} />
      <AdventuresCards showButton />
      <PsyTest fallbackComponent={HelpWithChoice} isRounded />
      <StudyProcess studyProcess={homeStudyProcessData} showButton />
      <SupportHelpInResults />
    </div>
  )
}

export default HomeClient
