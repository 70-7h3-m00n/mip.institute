import stls from './FooterCards.module.sass'
import { footerCards } from 'constants/footer'

const FooterCards = () => {
  return (
    <div className={stls.wrapper}>
      <div className={stls.cards}>
        {footerCards.map((card, index) => (
          <div key={index} className={stls.containerCard}>
            <span className={stls.title}>{card.title}</span>
            <span className={stls.desc}>{card.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterCards
