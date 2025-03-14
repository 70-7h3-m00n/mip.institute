import stls from './FooterMobile.module.sass'
import FooterCards from './FooterCards/FooterCards'
import FooterSubscription from '../Desktop/FooterSubscripion/FooterSubscription'
import FooterTop from './FooterTop/FooterTop'
import FooterLicense from './FooterLicense/FooterLicense'
import FooterBottom from './FooterBottom/FooterBottom'
import FooterWithPrograms from './FooterWithPrograms/FooterWithPrograms'

const FooterMobile = () => {
  return (
    <section className={stls.container}>
      <FooterTop />
      <FooterWithPrograms />
      <FooterCards />
      <FooterSubscription />
      <FooterLicense />
      <FooterBottom />
    </section>
  )
}

export default FooterMobile
