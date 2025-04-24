'use client'
import stls from './NewAboutClient.module.sass'
import ProgramForRequest from '@/components/sections/Incomers/ProgramForRequest/ProgramForRequest'
import JoinCommunity from '@/components/sections/lectorium/Stub/JoinCommunity/JoinCommunity'
import LeadingTeachersMIP from '@/components/sections/Home/LeadingTeachersMIP/LeadingTeachersMIP'
import EducationLevels from '@/components/sections/Home/EducationLevels/EducationLevels'
import StudyProcess from '@/components/sections/Incomers/StudyProcess/StudyProcess'
import Office from '@/components/contacts/Office/Office'
import MeetInstitute from '@/components/sections/Incomers/MeetInstitute/MeetInstitute'
import VacanciesVideo from '@/components/sections/Vacancies/VacanciesVideo/VacanciesVideo'
import { THomev2PageData } from '@/types/index'
import { ProgramsDataQueryResult } from '@/types/page/home/homeGeneralTypes'
import MissionBlock from './MissionBlock/MissionBlock'
import LicenseBlock from './LicenseBlock/LicenseBlock'

export const meetInstituteData = [
  {
    id: 1,
    text: [
      {
        type: 'paragraph',
        children: [{ text: '8 000+', type: 'text' }]
      },
      {
        type: 'paragraph',
        children: [{ text: 'студентов уже обучили', type: 'text' }]
      }
    ]
  },
  {
    id: 2,
    text: [
      {
        type: 'paragraph',
        children: [{ text: '70+', type: 'text' }]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'преподавателей-практиков с учёными степенями кандидатов и докторов наук, прошедших строгий отбор',
            type: 'text'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    text: [
      {
        type: 'paragraph',
        children: [
          { text: '230 000 ', type: 'text' },
          { text: '/n', code: true },
          { text: 'мин.', type: 'text' }
        ]
      },
      {
        type: 'paragraph',
        children: [
          { text: 'лекций студийного ', type: 'text' },
          { text: '/n', code: true },
          { text: 'качества', type: 'text' }
        ]
      }
    ]
  },
  {
    id: 4,
    text: [
      {
        type: 'paragraph',
        children: [{ text: '3000 студентов', type: 'text' }]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'одно из наиболее востребованных направлений – «Психолог-консультант»',
            type: 'text'
          }
        ]
      }
    ]
  }
]

interface NewAboutClientServerProps {
  data: THomev2PageData
  all: ProgramsDataQueryResult
}

export default function NewAboutClient({ data, all }: NewAboutClientServerProps) {
  return (
    <div className={stls.container}>
      <MissionBlock />
      <MeetInstitute data={meetInstituteData} />
      <Office />
      <VacanciesVideo props={{ text: 'Познакомим с институтом за 2 минуты', icon: '' }} />
      <StudyProcess />
      <EducationLevels
        bachelorsLength={all.bachelor?.length || 0}
        practicalTrainingsLength={all.practicalTrainings?.length || 0}
        programs={all.programs || []}
      />
      <LeadingTeachersMIP />
      <LicenseBlock />
      <ProgramForRequest />
      <div className={stls.wrapper}>
        <JoinCommunity />
      </div>
    </div>
  )
}
