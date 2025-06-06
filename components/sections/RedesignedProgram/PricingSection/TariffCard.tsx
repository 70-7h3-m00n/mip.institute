'use client'

import { useState } from 'react'
import stls from './TariffCard.module.sass'
import { tariffs } from './tariffData'
import { bonusesData } from './bonusesData'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import PopupTrigger from '@/ui/PopupTrigger'

type Props = {
  type: 'lite' | 'standard'
}

const TariffCard = ({ type }: Props) => {
  const { name, hours, price, yearly, features } = tariffs[type]
  const [showBonuses, setShowBonuses] = useState(false)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <div className={stls.card}>
      <div>
        <div className={stls.containerTitle}>
          <p className={stls.name}>{name}</p>
          <p className={stls.hours}>{hours}</p>
          <p className={stls.price}>
            {price}
            <br />
            <span className={stls.sub}>{yearly}</span>
          </p>
        </div>

        <ul className={stls.list}>
          {features.map(({ text, type, last }, i) => {
            const classNames = [
              type === 'sub' && stls.subItem,
              type === 'subheading' && stls.subHeading,
              type === 'weight' && stls.weight,
              type === 'sub' && last && stls.lastSubItem,
              type === 'sub' && i > 0 && features[i - 1]?.type !== 'sub' && stls.firstSubItem
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <li key={i} className={classNames}>
                {text.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </li>
            )
          })}
          {isMobileAndTabletLayout && <li className={stls.bonusesToggle}>Бонусы</li>}
        </ul>

        {showBonuses && isMobileAndTabletLayout && (
          <ul className={stls.listBonus}>
            <span className={stls.bonusesTitle}>Бонусы</span>
            {bonusesData.items.map((item, i) => (
              <li key={`bonus-${i}`} className={stls.bonusItem}>
                {item.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type='button'
        className={stls.bonusesButton}
        onClick={() => setShowBonuses(prev => !prev)}>
        Бонусы
      </button>
      <div className={stls.button}>
        <PopupTrigger btn='alpha' cta='signUp' />
      </div>
    </div>
  )
}

export default TariffCard
