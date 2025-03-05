import stls from './FooterDesktop.module.sass'
import FooterBottom from '@/components/sections/Footer/Desktop/FooterBottom/FooterBottom'
import FooterTop from '@/components/sections/Footer/Desktop/FooterTop/FooterTop'
import { footerCards } from 'constants/footer'
import FooterCard from '@/components/sections/Footer/Desktop/FooterCard/FooterCard'
import FooterSubscription from '@/components/sections/Footer/Desktop/FooterSubscripion/FooterSubscription'

const FooterDesktop = () => {
  return (
    <div className={stls.wrapper}>
      <FooterTop />
      <div className={stls.cards}>
        {footerCards.map((card, index) => (
          <FooterCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <FooterSubscription />
      <FooterBottom />
    </div>
  )
}

export default FooterDesktop
