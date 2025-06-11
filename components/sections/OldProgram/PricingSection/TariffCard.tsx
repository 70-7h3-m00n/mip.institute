'use client'

import { useState } from 'react'
import stls from './TariffCard.module.sass'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import PopupTrigger from '@/ui/PopupTrigger'
import { Bonuses, Tariff } from './PricingSection'

type TariffCardProps = {
  tariff: Tariff
  bonuses: Bonuses
}
const TariffCard = ({ tariff, bonuses }: TariffCardProps) => {
  const [showBonuses, setShowBonuses] = useState(false)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const parseMarkdownSimple = (text: string): string => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  }

  return (
    <div className={stls.card}>
      <div>
        <div className={stls.containerTitle}>
          <p className={stls.name}>{tariff.title}</p>
          <p className={stls.hours}>{tariff.practiceHours}</p>
          <p className={stls.price}>
            от {tariff.monthlyPrice} руб / месяц
            <br />
            <span className={stls.sub}>от {tariff.yearlyPrice} руб / год</span>
          </p>
        </div>

        <ul className={stls.list}>
          {tariff.features?.map((feature, i) => (
            <li key={i}>
              <span
                dangerouslySetInnerHTML={{
                  __html: parseMarkdownSimple(feature.text || '')
                }}
              />
            </li>
          ))}

          {isMobileAndTabletLayout && (
            <li className={stls.bonusesToggle} onClick={() => setShowBonuses(prev => !prev)}>
              Бонусы
            </li>
          )}
        </ul>

        {showBonuses && isMobileAndTabletLayout && bonuses?.items && (
          <ul className={stls.listBonus}>
            <span className={stls.bonusesTitle}>Бонусы</span>
            {bonuses.items
              ?.split('\n')
              ?.filter(line => line.trim() !== '')
              .map((item, i) => (
                <li key={i} className={stls.bonusItem}>
                  {item}
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
