'use client'
import stls from './NewAboutClient.module.sass'
import ProgramForRequest from '@/components/sections/Incomers/ProgramForRequest/ProgramForRequest'
import LeadingTeachersMIP from '@/components/sections/Home/LeadingTeachersMIP/LeadingTeachersMIP'
import EducationLevels from '@/components/sections/Home/EducationLevels/EducationLevels'
import StudyProcess from '@/components/sections/Incomers/StudyProcess/StudyProcess'
import Office from '@/components/contacts/Office/Office'
import MeetInstitute from '@/components/sections/Incomers/MeetInstitute/MeetInstitute'
import VacanciesVideo from '@/components/sections/Vacancies/VacanciesVideo/VacanciesVideo'
import { ProgramsDataQueryResult } from '@/types/page/home/homeGeneralTypes'
import MissionBlock from './MissionBlock/MissionBlock'
import LicenseBlock from './LicenseBlock/LicenseBlock'
import MissionBlockCards from '@/components/newAbout/MissionBlock/MissionBlockCards/MissionBlockCards'
import AboutJoinCommunity from '@/components/newAbout/AboutJoinCommunity/AboutJoinCommunity'
import LifeAtInstitute from './LifeAtInstitute/LifeAtInstitute'
import { meetInstituteData, vacanciesVideoProps } from './consts'
import AboutInstituteBlock from './AboutInstituteBlock/AboutInstituteBlock'

interface NewAboutClientServerProps {
  all: ProgramsDataQueryResult
}

export default function NewAboutClient({ all }: NewAboutClientServerProps) {
  return (
    <>
      <AboutInstituteBlock />
      <div className={stls.container}>
        <MissionBlock />
        <MissionBlockCards />
        <MeetInstitute data={meetInstituteData} withAdvantages />
        <Office />
        <VacanciesVideo props={vacanciesVideoProps} />
        <StudyProcess />
        <EducationLevels
          bachelorsLength={all.bachelor?.length || 0}
          practicalTrainingsLength={all.practicalTrainings?.length || 0}
          programs={all.programs || []}
        />
        <LeadingTeachersMIP />
        <LicenseBlock />
        <LifeAtInstitute />
        <ProgramForRequest />
        <AboutJoinCommunity />
      </div>
    </>
  )
}
