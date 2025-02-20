'use client'
import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/Footer.module.sass'
import Logo from '@/ui/Logo'
import BtnWhatsapp from '@/components/btns/BtnWhatsapp'
import BtnVk from '@/components/btns/BtnVk'
import BtnTelegram from '@/components/btns/BtnTelegram'
import BtnYt from '@/components/btns/BtnYt'
import BtnOk from '@/components/btns/BtnOk'
import BtnDzen from '@/components/btns/BtnDzen'
import EagleIcon from '@/components/icons/EagleIcon'
import { topFooterLinks } from 'constants/footer'
import FooterBottom from '@/components/sections/FooterBottom'

const Footer = () => {
  // const [isEdpartners, setIsEdpartners] = useState(false)
  //
  // const partCookie = getCookie('utm')
  // useEffect(() => {
  //   setTimeout(() => {
  //     const utmSource = getUtmSourceFromCookie()
  //     setIsEdpartners(utmSource === 'edpartners')
  //   }, 300)
  // }, [isEdpartners, partCookie])

  return (
    <footer className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.topFooter}>
            <div className={stls.leftBlockWithLogo}>
              <div className={stls.logoMIP}>
                <Logo atFooter />
              </div>
              <div className={stls.sm}>
                <BtnVk dark mlzero />
                <BtnWhatsapp dark />
                <BtnTelegram dark />
                <BtnYt dark />
                <BtnOk dark />
                <BtnDzen />
              </div>
              <button className={stls.licenseButton} onClick={() => {}}>
                <span>
                  <EagleIcon />
                </span>
                Государственная
                <br /> лицензия
              </button>
            </div>

            <div className={stls.rightBlockWithPrograms}>
              {topFooterLinks.map((column, index) => (
                <div className={stls.column} key={index}>
                  {column.map((item, i) =>
                    item.title ? (
                      <h3 key={i} className={stls.title}>
                        {item.title}
                      </h3>
                    ) : (
                      <a key={i} href={item.href} className={stls.link}>
                        {item.val}
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          <FooterBottom />
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
