'use client'
import PartnersNavigation from '@/components/partners/OurPartners/PartnersNavigation/PartnersNavigation'
import PartnersList from '@/components/partners/OurPartners/PartnersList/PartnersList'
import styles from './OurPartners.module.sass'
import { PropsOurPartners } from '../type'
import Wrapper from '@/ui/Wrapper'

const OurPartners: React.FC<PropsOurPartners> = ({ allTypes, currentType, onePartner }) => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h1 className={styles.title}>Наши партнеры</h1>
        {/* Навигация по типам партнеров */}
        <PartnersNavigation types={allTypes} currentType={currentType} />
        {/* Отображение партнеров по типу */}
        <PartnersList partners={onePartner} />
      </Wrapper>
    </section>
  )
}

export default OurPartners
