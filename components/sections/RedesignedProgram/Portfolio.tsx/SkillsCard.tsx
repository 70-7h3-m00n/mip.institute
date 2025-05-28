'use client'

import { useState } from 'react'
import stls from './SkillsCard.module.sass'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const skills = [
  'Знание общей, возрастной, семейной, детской, социальной, организационной, клинической психологии',
  'Актуальные подходы \nв психодиагностике, анализе эмоционального состояния \nи поведения, решении конкретных проблем и соматических нарушений',
  'Проведение индивидуальных \nи групповых психологических консультаций в любом удобном формате – очном или заочном',
  'Групповые тренинги для улучшения эмоционального фона и познания себя',
  'Составление рекомендаций, помогающих справляться с тревогой и страхами самостоятельно',
  'Соблюдение этических стандартов в процессе консультирования',
  'Во время обучения проходила супервизии и интервизии',
  'Тактична, доброжелательна, готова нести ответственность за свои действия'
]

const SkillsCard = () => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const [showAll, setShowAll] = useState(false)

  const limit = isMobile ? 6 : 8
  const shouldShowButton = skills.length > limit
  const visibleSkills = showAll ? skills : skills.slice(0, limit)

  return (
    <div className={stls.skills}>
      <div className={stls.skillsHeader}>
        <span className={stls.circle}>3</span>
        <span className={stls.title}>Профессиональные навыки</span>
      </div>

      <ul className={stls.list}>
        {visibleSkills.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {shouldShowButton && (
        <button className={stls.readMore} onClick={() => setShowAll(prev => !prev)}>
          {showAll ? 'Скрыть' : 'Читать полный список'}
        </button>
      )}
    </div>
  )
}

export default SkillsCard
