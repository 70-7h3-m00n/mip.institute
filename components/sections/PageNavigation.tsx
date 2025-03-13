import { useRef, useState, useEffect, MutableRefObject } from 'react'
import stls from '@/styles/components/sections/PageNavigation.module.sass'
import Wrapper from '@/ui/Wrapper'

type Section = {
  id: string
  label: string
  ref: MutableRefObject<HTMLDivElement | null>
  condition: boolean
}

type PageNavigationProps = {
  sections: Section[]
}
const PageNavigation = ({ sections }: PageNavigationProps) => {
  const [activeSection, setActiveSection] = useState('')
  const navigationRef = useRef(null)
  const pointRef = useRef<HTMLDivElement | null>(null)
  const [stickyNav, setStickyNav] = useState(false)

  const handleScrollToSection = ref => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScroll = () => {
    const pointTop = pointRef.current?.getBoundingClientRect().top

    if (pointTop !== undefined && pointTop < -70) {
      setStickyNav(true)
    } else {
      setStickyNav(false)
    }

    let foundActiveSection = false
    for (const section of sections) {
      const sectionTop = section.ref?.current?.getBoundingClientRect().top
      if (sectionTop !== undefined && sectionTop <= 53) {
        setActiveSection(section.id)
        foundActiveSection = true
      }
    }
    if (!foundActiveSection && !stickyNav) {
      setActiveSection('')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stickyNav])

  const renderNavItem = section =>
    section.condition !== false && (
      <li key={section.id}>
        <p
          className={activeSection === section.id ? stls.active : ''}
          onClick={() => handleScrollToSection(section.ref)}>
          {section.label}
        </p>
      </li>
    )

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.point} ref={pointRef}></div>
        <div
          className={`${stls.navigation} ${stickyNav ? stls.whiteLetters : ''}`}
          ref={navigationRef}>
          <ul>{sections?.map(section => renderNavItem(section))}</ul>
        </div>
        <div
          className={`${stls.navigation} ${stickyNav ? stls.sticky : stls.hidden}`}
          ref={navigationRef}>
          <ul>{sections?.map(section => renderNavItem(section))}</ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default PageNavigation
