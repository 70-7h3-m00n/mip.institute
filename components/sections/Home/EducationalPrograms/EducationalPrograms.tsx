import Wrapper from '@/ui/Wrapper'
import stls from './EducationalPrograms.module.sass'
import { routes } from '@/config/index'
import Link from 'next/link'
import {
  BachelorType,
  PracticalTrainingType,
  ProgramFilter,
  ProgramGeneralType
} from '@/types/page/home/homeGeneralTypes'
import EducationalProgramsClient from './EducationalProgramsClient'

interface Props {
  programs: ProgramGeneralType[]
  bachelors: BachelorType[]
  practicalTrainings: PracticalTrainingType[]
  courses: ProgramGeneralType[]
  professions: ProgramGeneralType[]
  initialFilter?: ProgramFilter
}

const filters = [
  { label: 'Популярные программы', key: ProgramFilter.Popular },
  { label: 'Профессиональная переподготовка', key: ProgramFilter.Professions },
  { label: 'Повышение квалификации', key: ProgramFilter.Courses },
  { label: 'Курсы', key: ProgramFilter.Shorts },
  { label: 'Бакалавриат', key: ProgramFilter.Bachelor },
  { label: 'Практика', key: ProgramFilter.PracticalTrainings }
]

export default function EducationalPrograms({
  programs,
  courses,
  bachelors,
  practicalTrainings,
  professions,
  initialFilter = ProgramFilter.Professions
}: Props) {
  const allPrograms = [...programs, ...bachelors, ...practicalTrainings]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2>Программы обучения</h2>
        <EducationalProgramsClient
          filters={filters}
          allPrograms={allPrograms}
          courses={courses}
          professions={professions}
          bachelors={bachelors}
          practicalTrainings={practicalTrainings}
          initialFilter={initialFilter}
        />
        <div className={stls.buttonContainer}>
          <Link href={routes.front.programs} className={stls.link} passHref>
            Посмотреть все программы
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}
