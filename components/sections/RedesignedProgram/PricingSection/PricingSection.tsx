'use client'

import { useState } from 'react'
import stls from './PricingSection.module.sass'
import TariffCard from './TariffCard'
import BonusesCard from './BonusesCard'
import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import IconBolt from './icons/IconBolt'

const PricingSection = () => {
  const [selected, setSelected] = useState<'lite' | 'standard'>('lite')
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Форматы и стоимость обучения</h2>
        <div className={stls.mobileTabs}>
          <button className={stls.tab} onClick={() => setSelected('lite')}>
            Лайт
            {selected === 'lite' && <span className={stls.pointer} />}
          </button>
          <button className={stls.tab} onClick={() => setSelected('standard')}>
            Стандарт <IconBolt />
            {selected === 'standard' && <span className={stls.pointer} />}
          </button>
        </div>

        <div className={stls.grid}>
          {isMobileAndTabletLayout ? (
            <>
              {selected === 'lite' && <TariffCard type='lite' />}
              {selected === 'standard' && <TariffCard type='standard' />}
            </>
          ) : (
            <>
              <TariffCard type='lite' />
              <TariffCard type='standard' />
              <BonusesCard />
            </>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default PricingSection
