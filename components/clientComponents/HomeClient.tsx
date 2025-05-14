import stls from '@/styles/pages/PageHome.module.sass'
import HelpWithChoice from '@/components/sections/Home/HelpWithChoice/HelpWithChoice'
import SupportHelpInResults from '@/components/sections/Home/SupportHelpInResults/SupportHelpInResults'
import dynamic from 'next/dynamic'
import StudyProcess from '@/components/sections/Incomers/StudyProcess/StudyProcess'
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
import { THomev2PageData } from '@/types/page/homev2/HomePagev2Props'
import { ProgramsDataQueryResult } from '@/types/page/home/homeGeneralTypes'
import HomeForm from '@/components/sections/Home/HomeForm/HomeForm'
import AdventuresCardsHome from '../sections/Home/AdventureCardsHome/AdventureCardsHome'

const PsyTest = dynamic(() => import('@/components/sections/Home/PsyTest/PsyTest'), { ssr: false })
const ProgramForRequest = dynamic(
  () => import('@/components/sections/Incomers/ProgramForRequest/ProgramForRequest'),
  { ssr: false }
)

interface THomeServerProps {
  data: THomev2PageData
  all: ProgramsDataQueryResult
}

export default async function HomePage({ data, all }: THomeServerProps) {
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
      <AdventuresCardsHome showButton />
      <StudyProcess studyProcess={homeStudyProcessData} showButton />
      <ProgramForRequest />
      <SupportHelpInResults />
      <WhatSayStudents data={data.reviews} />
      <EducationLevels
        bachelorsLength={all.bachelor?.length || 0}
        practicalTrainingsLength={all.practicalTrainings?.length || 0}
        programs={all.programs || []}
      />
      <LeadingTeachersMIP />
      <HomeForm />
      <MIPTeachersAsAuthors imgs={data.publications.slide.files} />
      <JournalMIP data={data.blogs} />
      <OurPartners onePartner={data.partners} />
      <ProgramForRequest />
      <HomeFAQ />
    </div>
  )
}
