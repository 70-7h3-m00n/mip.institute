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
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={stls.container}>
      <nav className={stls.navbar}>
        <Logo atHeader />
        <ul className={stls.links}>
          {sections.map(section => (
            <li key={section.id} onClick={() => handleScroll(section.id)}>
              {section.label}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default SectionNavbar
