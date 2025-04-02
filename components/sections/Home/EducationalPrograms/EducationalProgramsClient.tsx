'use client'
import stls from './EducationalPrograms.module.sass'
import EducationalProgramsCard from '@/components/sections/Home/EducationalPrograms/EducationalProgramsCard/EducationalProgramsCard'
import { useState } from 'react'
import FilterTag from '@/components/filters/FilterTag'
import {
  BachelorType,
  EducationalProgram,
  PracticalTrainingType,
  ProgramFilter,
  ProgramGeneralType,
  Tag
} from '@/types/page/home/homeGeneralTypes'
import { useMediaQuery } from '@/context/MediaQueryContext'

interface Props {
  filters: { label: string; key: ProgramFilter }[]
  allPrograms: EducationalProgram[]
  courses: ProgramGeneralType[]
  professions: ProgramGeneralType[]
  bachelors: BachelorType[]
  practicalTrainings: PracticalTrainingType[]
  initialFilter: ProgramFilter
}

const isProgramGeneral = (program: EducationalProgram): program is ProgramGeneralType => {
  return program.__typename === 'Program'
}

export default function EducationalProgramsClient({
  filters,
  allPrograms,
  courses,
  professions,
  bachelors,
  practicalTrainings,
  initialFilter
}: Props) {
  const { isMobileAndTabletLayout } = useMediaQuery()
  const [activeFilter, setActiveFilter] = useState<ProgramFilter>(initialFilter)

  const getFilteredPrograms = () => {
    switch (activeFilter) {
      case ProgramFilter.Popular:
        return allPrograms.filter(p => p.isPopular === true)
      case ProgramFilter.Professions:
        return professions
      case ProgramFilter.Courses:
        return courses
      case ProgramFilter.Bachelor:
        return bachelors
      case ProgramFilter.Shorts:
        return allPrograms.filter(p => 'type' in p && p.type === 'ShortTerm')
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
    <>
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
        {displayedPrograms.map((item, idx) => (
          <EducationalProgramsCard idx={idx} key={item.slug} card={item} />
        ))}
      </ul>
    </>
  )
}
