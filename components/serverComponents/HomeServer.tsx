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
import { THomev2PageData } from '@/types/index'

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), { ssr: false })

interface THomeServerProps {
  data: THomev2PageData
}

const HomeServer: React.FC<THomeServerProps> = async ({ data }) => {
  const all = await fetchAllProgramsData()
  console.log(all)
  return (
    <div className={stls.container}>
      <TitleWithCarousel heroCarousel={data.heroCarousel} />
      <EducationalPrograms
        programs={all.programs}
        bachelors={all.bachelor}
        practicalTrainings={all.practicalTrainings}
        courses={all.courses}
        professions={all.professions}
      />
      <PsyTest fallbackComponent={HelpWithChoice} isRounded />
      <AdventuresCards showButton />
      <StudyProcess studyProcess={homeStudyProcessData} showButton />
      <SupportHelpInResults />
      <WhatSayStudents />
      <EducationLevels
        bachelorsLength={all.bachelor?.length || 0}
        practicalTrainingsLength={all.practicalTrainings?.length || 0}
        programs={all.programs || []}
      />
      <LeadingTeachersMIP />
      <MIPTeachersAsAuthors />
      <HomeFAQ />
    </div>
  )
}

export default HomeServer
