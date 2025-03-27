import React from 'react'
import getStaticPropsHome from '@/lib/getStaticPropsv2/getStaticPropsHome'
import stls from '@/styles/pages/PageHome.module.sass'
import HelpWithChoice from '@/components/sections/Home/HelpWithChoice/HelpWithChoice'
import AdventuresCards from '@/components/sections/Incomers/AdventuresCards/AdventuresCards'
import SupportHelpInResults from '@/components/sections/Home/SupportHelpInResults/SupportHelpInResults'
import dynamic from 'next/dynamic'
import StudyProcess from '@/components/sections/Incomers/StudyProcess/StudyProcess'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'
import { homeStudyProcessData } from '@/components/sections/Incomers/StudyProcess/constants'
import TitleWithCarousel from '@/components/sections/Home/TitleWithCarousel/TitleWithCarousel'
import HomeFAQ from '@/components/sections/Home/HomeFAQ/HomeFAQ'
import WhatSayStudents from '@/components/sections/Home/WhatSayStudents/WhatSayStudents'
import EducationalPrograms from '@/components/sections/Home/EducationalPrograms/EducationalPrograms'
import MIPTeachersAsAuthors from '@/components/sections/Home/MIPTeachersAsAuthors/MIPTeachersAsAuthors'
import LeadingTeachersMIP from '@/components/sections/Home/LeadingTeachersMIP/LeadingTeachersMIP'
import EducationLevels from '@/components/sections/Home/EducationLevels/EducationLevels'
import OurPartners from '@/components/partners/OurPartners/OurPartners'
import JournalMIP from '@/components/sections/Home/JournalMIP/JournalMIP'

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), { ssr: false })
const ProgramForRequest = dynamic(
  () => import('@/components/sections/Incomers/ProgramForRequest/ProgramForRequest'),
  { ssr: false }
)

export const revalidate = 3600

export default async function HomePage() {
  const dataHome = await getStaticPropsHome()
  const all = await fetchAllProgramsData()

  return (
    <div className={stls.container}>
      <TitleWithCarousel heroCarousel={dataHome.heroCarousel} />
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
      <ProgramForRequest />
      <SupportHelpInResults />
      <WhatSayStudents data={dataHome.reviews} />
      <EducationLevels
        bachelorsLength={all.bachelor?.length || 0}
        practicalTrainingsLength={all.practicalTrainings?.length || 0}
        programs={all.programs || []}
      />
      <LeadingTeachersMIP />
      <MIPTeachersAsAuthors imgs={dataHome.publications.slide.files} />
      <JournalMIP data={dataHome.blogs} />
      <OurPartners onePartner={dataHome.partners} />
      <ProgramForRequest />
      <HomeFAQ />
    </div>
  )
}
