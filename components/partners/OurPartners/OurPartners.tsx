'use client'
import PartnersNavigation from '@/components/partners/OurPartners/PartnersNavigation/PartnersNavigation'
import PartnersList from '@/components/partners/OurPartners/PartnersList/PartnersList'
import styles from './OurPartners.module.sass'
import { PropsOurPartners } from '../type'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'

const OurPartners: React.FC<PropsOurPartners> = ({
  allTypes,
  currentType,
  onePartner,
  noPaddings = false
}) => {
  return (
    <section className={classNames({ [styles.container]: true, [styles.noPaddings]: noPaddings })}>
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
        {/* Навигация по типам партнеров */}
        {allTypes && currentType && (
          <PartnersNavigation types={allTypes} currentType={currentType} />
        )}
        {/* Отображение партнеров по типу */}
        <PartnersList partners={onePartner} />
      </Wrapper>
    </section>
  )
}

export default OurPartners
