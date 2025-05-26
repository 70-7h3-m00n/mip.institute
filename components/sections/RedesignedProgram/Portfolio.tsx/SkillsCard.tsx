'use client'

import { useState } from 'react'
import stls from './SkillsCard.module.sass'

const skills = [
  'Знание общей, возрастной, семейной, детской, социальной, организационной, клинической психологии',
  'Актуальные подходы \nв психодиагностике, анализе эмоционального состояния \nи поведения, решении конкретных проблем и соматических нарушений',
  'Умение профессионально использовать современные практические инструменты консультации',
  'Проведение индивидуальных \nи групповых психологических консультаций в любом удобном формате – очном или заочном',
  'Групповые тренинги для улучшения эмоционального фона и познания себя',
  'Соблюдение этических стандартов в процессе консультирования',
  'Во время обучения проходила супервизии и интервизии',
  'Тактична, доброжелательна, готова нести ответственность за свои действия'
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
