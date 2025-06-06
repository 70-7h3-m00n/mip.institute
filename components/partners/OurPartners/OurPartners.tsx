'use client'

import React, { useEffect, useState } from 'react'
import PartnersNavigation from './PartnersNavigation/PartnersNavigation'
import PartnersList from './PartnersList/PartnersList'
import styles from './OurPartners.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import { Partner } from '../type'

interface Props {
  allTypes?: string[]
  allPartners?: Partner[]
  onePartner?: Partner[]
  noPaddings?: boolean
}

const OurPartners: React.FC<Props> = ({
  allTypes,
  allPartners,
  onePartner,
  noPaddings = false
}) => {
  const isTabbed = allTypes && allPartners // если есть вкладки
  const [currentType, setCurrentType] = useState<string>('')
  // Устанавливаем текущий тип, когда данные появились
  useEffect(() => {
    if (isTabbed) {
      setCurrentType(allTypes[0])
    }
  }, [isTabbed, allTypes])

  const partnersToRender =
    isTabbed && allPartners
      ? allPartners.filter(partner => partner.type === currentType)
      : onePartner || []

  return (
    <section className={classNames(styles.container, { [styles.noPaddings]: noPaddings })}>
      <Wrapper>
        {allTypes ? (
          <h2 className={styles.title}>Наши партнеры</h2>
        ) : (
          <h2 className={styles.title}>
            С нами вы можете{' '}
            <span className={styles.highlight}>стать членами крупных ассоциаций </span>
            ОППЛ и АППП{' '}
          </h2>
        )}
        {isTabbed && (
          <PartnersNavigation
            types={allTypes}
            currentType={currentType}
            onClickType={setCurrentType}
          />
        )}
        <PartnersList partners={partnersToRender} />
      </Wrapper>
    </section>
  )
}

export default OurPartners
