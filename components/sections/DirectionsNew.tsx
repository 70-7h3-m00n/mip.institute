import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/DirectionsNew.module.sass'
import navigationList from 'constants/navigationStudyFields'
import Link from 'next/link'
import { useState } from 'react'
import IconNavigation from '../icons/IconNavigation'
import ProgramsOnMain from './ProgramsOnMain'
import { TypeLibPrograms } from '@/types/index'

type Props = {
  programs: TypeLibPrograms | null
  bachelors: any[]
  practicalTrainings: any[]
}

const DirectionsNew = ({ programs, bachelors, practicalTrainings }: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState<{ icon: string } | null>(null)
  const handleMouseEnter = (icon: { icon: string }) => {
    setHoveredIcon(icon)
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null)
  }

  // Проверяем, что programs не null, иначе используем пустой массив
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
        return `${amountOfCourses} курсов`
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
  const handleMouseDown = (event, href) => {
    if (event.button === 1) {
      event.preventDefault()
      window.open(href, '_blank')
    }
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h2 className={stls.title}>Направления обучения</h2>
        </div>
        <div className={stls.contentBlock}>
          <div className={stls.navBlocksContainer}>
            {navigationList.map(({ label, href, icon, programType }) => (
              <Link
                href={href}
                passHref
                key={label}
                onMouseDown={event => handleMouseDown(event, href)}
                rel='noreferrer'>
                <div
                  className={stls.linkInner}
                  onMouseEnter={() => handleMouseEnter({ icon })}
                  onMouseLeave={handleMouseLeave}>
                  <div className={stls.content}>
                    <h3 className={stls.navTitle}>{label}</h3>
                    <div className={stls.countPrograms}>
                      <span>{renderCounter(programType)}</span>
                    </div>
                  </div>
                  <div className={stls.icon}>
                    <IconNavigation hover={hoveredIcon?.icon === icon}>{icon}</IconNavigation>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <ProgramsOnMain allPrograms={allPrograms} />
      </Wrapper>
    </section>
  )
}

export default DirectionsNew
