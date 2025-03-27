// components/EducationLevels.tsx
'use client'

import Wrapper from '@/ui/Wrapper'
import stls from './EducationLevels.module.sass'
import Link from 'next/link'
import educationLevelsList from 'constants/educationLevels'
import { TypeLibPrograms } from '@/types/index'

type Props = {
  programs: TypeLibPrograms | null
  bachelors: any[]
  practicalTrainings: any[]
}

const EducationLevels = ({ programs, bachelors, practicalTrainings }: Props) => {
  const safePrograms = programs ?? []

  const amountOfCourses = safePrograms.filter(el => el && el.type === 'Course').length
  const amountOfProfessions = safePrograms.filter(el => el && el.type === 'Profession').length
  const amountOfShortTerm = safePrograms.filter(el => el && el.type === 'ShortTerm').length

  const allPrograms = safePrograms.concat(bachelors, practicalTrainings)

  const renderCounter = (type: string) => {
    switch (type) {
      case 'bachelor':
        return `${bachelors.length} программы`
      case 'course':
        return `${amountOfCourses} курса`
      case 'profession':
        return `${amountOfProfessions} программы`
      case 'shortTerm':
        return `${amountOfShortTerm} курсов`
      case 'programs':
        return `${allPrograms.length + 1} программа`
      default:
        return `${practicalTrainings.length + 1} ступени`
    }
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Уровни образования</h2>
        <div className={stls.navBlocksContainer}>
          {educationLevelsList.map(({ id, label, description, href, programType, background }) => (
            <div
              key={id}
              className={stls.item}
              style={{ backgroundImage: `url(${background})` }}
            >
              <Link href={href} passHref rel='noreferrer'>
                <div className={stls.content}>
                  <span className={stls.label}>{label}</span>
                  <p className={stls.description}>{description}</p>
                  <div className={stls.countPrograms}>
                    <span>{renderCounter(programType)}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default EducationLevels
