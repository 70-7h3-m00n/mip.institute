'use client'

import { useState } from 'react'
import stls from './SkillsCard.module.sass'

const skills = [
  'Навык проведения индивидуального и группового консультирования',
  'Навык проведения тренингов',
  'Умение профессионально использовать современные практические инструменты консультации',
  'Знание основ психотерапии',
  'Коммуникабельность и гибкость в общении',
  'Открытость и эмпатичность, использование современных подходов к клиенту во время консультирования',
  'Знание основ психотерапии'
]

const SkillsCard = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleSkills = showAll ? skills : skills.slice(0, 4)

  return (
    <div className={stls.skills}>
      <div className={stls.skillsHeader}>
        <span className={stls.circle}>3</span>
        <span className={stls.title}>
          Ключевые <br />
          профессиональные навыки:
        </span>
      </div>

      <ul className={stls.list}>
        {visibleSkills.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {skills.length > 6 && (
        <button className={stls.readMore} onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Скрыть' : 'Читать полный список'}
        </button>
      )}
    </div>
  )
}

export default SkillsCard
