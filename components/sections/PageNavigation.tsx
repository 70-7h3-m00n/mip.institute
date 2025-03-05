import { useRef, useState, useEffect } from 'react'
import stls from '@/styles/components/sections/PageNavigation.module.sass'
import Wrapper from '@/ui/Wrapper'

const PageNavigation = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('')
  const navigationRef = useRef(null)
  const pointRef = useRef(null)
  const [stickyNav, setStickyNav] = useState(false)

  const handleScrollToSection = ref => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScroll = () => {
    // @ts-ignore
    const pointTop = pointRef.current?.getBoundingClientRect().top

    if (pointTop < -70) {
      setStickyNav(true)
    } else {
      setStickyNav(false)
    }

    let foundActiveSection = false
    for (const section of sections) {
      if (section.ref?.current?.getBoundingClientRect().top <= 53) {
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
          className={`${stls.navigation} ${
            stickyNav ? stls.sticky : stls.hidden
          }`}
          ref={navigationRef}>
          <ul>{sections?.map(section => renderNavItem(section))}</ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default PageNavigation
