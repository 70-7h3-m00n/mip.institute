'use client'

import { useState, useEffect } from 'react'
import stls from './PricingSection.module.sass'
import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import classNames from 'classnames'
import IconBolt from '../../RedesignedProgram/PricingSection/icons/IconBolt'
import TariffCard from './TariffCard'
import BonusesCard from './BonusesCard'

export type FeatureItem = {
  text: string | null
  type?: string | null
}

export type Tariff = {
  title: string
  practiceHours: string
  monthlyPrice: string
  yearlyPrice: string
  slug: string
  features?: FeatureItem[] | null
}

export type Bonuses = {
  title: string
  subtitle: string
  items: string
}

type PricingSectionProps = {
  tariffs: Tariff[]
  bonuses: Bonuses
  costRef: React.RefObject<HTMLElement>
}

const PricingSection = ({ tariffs, bonuses, costRef }: PricingSectionProps) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const [selected, setSelected] = useState('')

  // ✅ Устанавливаем "Лайт" по умолчанию, иначе первый доступный тариф
  useEffect(() => {
    if (tariffs?.length && !selected) {
      const defaultTariff = tariffs.find(t => t.title?.toLowerCase().includes('лайт')) || tariffs[0]
      setSelected(defaultTariff.slug)
    }
  }, [tariffs, selected])

  return (
    <section className={stls.container} id='pricing' ref={costRef}>
      <Wrapper>
        <h2 className={stls.title}>Форматы и стоимость обучения</h2>

        <div className={stls.mobileTabs}>
          {tariffs.map(tariff => (
            <button
              key={tariff.slug}
              className={classNames({
                [stls.tab]: true,
                [stls.inactive]: selected !== tariff.slug
              })}
              onClick={() => setSelected(tariff.slug)}>
              {tariff.title}
              {tariff.title?.toLowerCase().includes('стандарт') && <IconBolt />}
              {selected === tariff.slug && <span className={stls.pointer} />}
            </button>
          ))}
        </div>

        <div className={stls.grid}>
          {isMobileAndTabletLayout ? (
            tariffs
              .filter(tariff => tariff.slug === selected)
              .map(tariff => <TariffCard key={tariff.slug} tariff={tariff} bonuses={bonuses} />)
          ) : (
            <>
              {tariffs.map(tariff => (
                <TariffCard key={tariff.slug} tariff={tariff} bonuses={bonuses} />
              ))}
              <BonusesCard bonuses={bonuses} />
            </>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default PricingSection
