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
import WhatSayStudents from '../sections/Home/WhatSayStudents/WhatSayStudents'
import EducationalPrograms from '@/components/sections/Home/EducationalPrograms/EducationalPrograms'
import MIPTeachersAsAuthors from '../sections/Home/MIPTeachersAsAuthors/MIPTeachersAsAuthors'
import LeadingTeachersMIP from '../sections/Home/LeadingTeachersMIP/LeadingTeachersMIP'
import EducationLevels from '@/components/sections/Home/EducationLevels/EducationLevels'

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), { ssr: false })

const HomeClient = async ({ props }) => {
  const all = await fetchAllProgramsData()

  return (
    <div className={stls.container}>
      <TitleWithCarousel heroCarousel={props.heroCarousel} />
      <EducationalPrograms />
      <PsyTest fallbackComponent={HelpWithChoice} isRounded />
      <AdventuresCards showButton />
      <StudyProcess studyProcess={homeStudyProcessData} showButton />
      <SupportHelpInResults />
      <WhatSayStudents />
      <EducationLevels
        bachelors={all.bachelor}
        practicalTrainings={all.practicalTrainings}
        programs={all.programs}
      />
      <LeadingTeachersMIP />
      <MIPTeachersAsAuthors />
      <HomeFAQ />
    </div>
  )
}

export default HomeClient
