import stls from './FooterMobile.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import { contactBlocks, footerMobileLinks } from 'constants/footer'

const FooterMobile = () => {
  return (
    <>
      <div className={stls.wrapper}>
        {contactBlocks.map(({ title, contacts }, index) => (
          <div key={index} className={stls.block}>
            <span className={stls.title}>{title}</span>
            {contacts.map((phone, idx) => (
              <span key={idx} className={stls.text}>
                {phone}
              </span>
            ))}
          </div>
        ))}

        <span className={stls.bold}>Москва, Докучаев переулок, 8</span>
        <PopupTrigger btn='beta' cta='askQuestion' />
      </div>

      <div className={stls.links}>
        {footerMobileLinks.map((link, index) =>
          link.href ? (
            <a key={index} href={link.href} className={stls.link}>
              {link.title}
            </a>
          ) : (
            <span key={index} className={stls.bottomText}>
              {link.text}
            </span>
          )
        )}
      </div>
    </>
  )
}

export default FooterMobile
