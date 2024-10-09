import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/DirectionsNew.module.sass'
import navigationList from 'constants/navigationStudyFields'
import Link from 'next/link'
import { useState } from 'react'
import IconNavigation from '../icons/IconNavigation'
import ProgramsOnMain from './ProgramsOnMain'

type Props = {
  programs: any[]
  bachelors: any[]
  practicalTrainings: any[]
}

const DirectionsNew = ({ programs, bachelors, practicalTrainings }: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const handleMouseEnter = icon => {
    setHoveredIcon(icon)
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null)
  }

  const amountOfCourses = programs.filter(el => el.type === 'Course').length
  const amountOfProfessions = programs.filter(
    el => el.type === 'Profession'
  ).length

  const allPrograms = programs.concat(bachelors, practicalTrainings)
  const renderCounter = (type: string) => {
    switch (type) {
      case 'bachelor':
        return `${bachelors.length} программы`
      case 'course':
        return `${amountOfCourses} курсов`
      case 'profession':
        return `${amountOfProfessions} программы`
      case 'lifeCourses':
        return `1 курс`
      case 'programs':
        return `${allPrograms.length} программ`
      default:
        return `${practicalTrainings.length} ступени`
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
                    <IconNavigation hover={hoveredIcon?.icon === icon}>
                      {icon}
                    </IconNavigation>
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
