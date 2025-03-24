'use client'
import Wrapper from '@/ui/Wrapper'
import stls from './EducationalPrograms.module.sass'
import { useProgramsSafe } from '@/hooks/general/useSafeContext'
import EducationalProgramsCard from '@/components/sections/Home/EducationalPrograms/EducationalProgramsCard/EducationalProgramsCard'
import { routes } from '@/config/index'
import Link from 'next/link'

export enum TAGS {
  Updated = 'Обновлено',
  Popular = 'Популярное'
}

const data = [
  {
    title: 'Психологическое консультирование',
    category: 'Профессиональная переподготовка',
    studyHours: 1500,
    studyMounthsDuration: 12,
    tag: TAGS.Updated
  },
  {
    title: 'Психоанализ и психоаналитическая психотерапия',
    category: 'Профессиональная переподготовка',
    studyHours: 1500,
    studyMounthsDuration: 12,
    tag: TAGS.Popular
  },
  {
    title: 'Клиническая психология',
    category: 'Профессиональная переподготовка',
    studyHours: 1500,
    studyMounthsDuration: 12,
    tag: TAGS.Popular
  },
  {
    title: 'Когнитивно-поведенческий психотерапевт',
    category: 'Профессиональная переподготовка',
    studyHours: 1500,
    studyMounthsDuration: 12,
    tag: TAGS.Popular
  },
  {
    title: 'Психолог-диетолог. Нутрициолог',
    category: 'Профессиональная переподготовка',
    studyHours: 1500,
    studyMounthsDuration: 12,
    tag: TAGS.Popular
  },
  {
    title: 'Психосоматика и телесная психотерапия',
    category: 'Профессиональная переподготовка',
    studyHours: 1500,
    studyMounthsDuration: 12
  }
]

const EducationalPrograms = () => {
  const {
    state: { programs }
  } = useProgramsSafe()
  console.log({ programs })

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2>Программы обучения</h2>

        <ul className={stls.blocks}>
          {data.map((item, index) => (
            <EducationalProgramsCard key={index} card={item} />
          ))}
        </ul>

        <div className={stls.buttonContainer}>
          <Link href={routes.front.programs} className={stls.link} passHref>
            Посмотреть все программы
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}

export default EducationalPrograms
