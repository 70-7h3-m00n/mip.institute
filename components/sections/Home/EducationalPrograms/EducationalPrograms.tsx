'use client'
import Wrapper from '@/ui/Wrapper'
import stls from './EducationalPrograms.module.sass'
import { useProgramsSafe } from '@/hooks/general/useSafeContext'
import EducationalProgramsCard from '@/components/sections/Home/EducationalPrograms/EducationalProgramsCard/EducationalProgramsCard'
import { routes } from '@/config/index'
import Link from 'next/link'
import { useState } from 'react'
import FilterTag from '@/components/filters/FilterTag'
import { ProgramFilter } from '@/types/page/home/homeGeneralTypes'
import { useMediaQuery } from '@/context/MediaQueryContext'

const filters = [
  { label: 'Популярные программы', key: ProgramFilter.Popular },
  { label: 'Профессиональная переподготовка', key: ProgramFilter.Professions },
  { label: 'Повышение квалификации', key: ProgramFilter.Courses },
  { label: 'Курсы', key: ProgramFilter.Shorts },
  { label: 'Бакалавриат', key: ProgramFilter.Bachelor },
  { label: 'Практика', key: ProgramFilter.PracticalTrainings }
]

const EducationalPrograms = () => {
  const {
    state: { programs, bachelor, practicalTrainings, courses, professions }
  } = useProgramsSafe()
  const { isMobileAndTabletLayout } = useMediaQuery()

  const [activeFilter, setActiveFilter] = useState<ProgramFilter>(ProgramFilter.Professions)

  const getFilteredPrograms = () => {
    const allPrograms = [...programs, ...bachelor, ...practicalTrainings]

    switch (activeFilter) {
      case ProgramFilter.Popular:
        return allPrograms.filter(p => 'isPopular' in p && p.isPopular === true)
      case ProgramFilter.Professions:
        return professions
      case ProgramFilter.Courses:
        return courses
      case ProgramFilter.Bachelor:
        return bachelor
      case ProgramFilter.Shorts:
        return programs.filter(p => p.type === 'ShortTerm')
      case ProgramFilter.PracticalTrainings:
        return practicalTrainings
      default:
        return allPrograms
    }
  }

  const filteredPrograms = getFilteredPrograms()
  const slicedNumber = isMobileAndTabletLayout ? 3 : 6
  const displayedPrograms = filteredPrograms.slice(0, slicedNumber)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2>Программы обучения</h2>

        <div className={stls.filterContainer}>
          {filters.map(filter => (
            <FilterTag
              key={filter.key}
              isActive={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}>
              {filter.label}
            </FilterTag>
          ))}
        </div>

        <ul className={stls.blocks}>
          {displayedPrograms.map(item => (
            <EducationalProgramsCard key={item.slug} card={item} />
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
