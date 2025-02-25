import PartnersNavigation from '@/components/partners/OurPartners/PartnersNavigation/PartnersNavigation'
import PartnersList from '@/components/partners/OurPartners/PartnersList/PartnersList'
import styles from './OurPartners.module.sass'

const OurPartners = ({ allTypes, currentType, onePartner }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Наши партнеры</h1>
      {/* Навигация по типам партнеров */}
      <PartnersNavigation types={allTypes} currentType={currentType} />
      {/* Отображение партнеров по типу */}
      <PartnersList partners={onePartner} />
    </section>
  )
}

export default OurPartners
