import { PropsList } from '../../type'
import PartnersCard from './PartnersCard'
import styles from './PartnersList.module.sass'

const PartnersList: React.FC<PropsList>  = ({ partners }) => {
  return (
    <div className={styles.containerList}>
      {partners.length > 0
        ? partners.map(partner => <PartnersCard key={partner.id} partner={partner} />)
        : null}
    </div>
  )
}

export default PartnersList
