'use client'

import Logo from '@/ui/Logo'
import stls from './SectionNavbar.module.sass'

const sections = [
  { id: 'diploma', label: 'Диплом' },
  { id: 'curriculum', label: 'Учебный план' },
  { id: 'teachers', label: 'Преподаватели' },
  { id: 'skills', label: 'Навыки' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'pricing', label: 'Стоимость' },
  { id: 'faq', label: 'Вопросы' }
]

const SectionNavbar = () => {
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    const offset = 120
    if (target) {
      const topPosition = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: topPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className={stls.container}>
      <nav className={stls.navbar}>
        <Logo atHeader />
        <ul className={stls.links}>
          {sections.map(section => (
            <li key={section.id} onClick={() => scrollToSection(section.id)}>
              {section.label}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default SectionNavbar
