import stls from './FooterTop.module.sass'
import Logo from '@/ui/Logo'
import BtnVk from '@/components/btns/BtnVk'
import BtnWhatsapp from '@/components/btns/BtnWhatsapp'
import BtnTelegram from '@/components/btns/BtnTelegram'
import BtnYt from '@/components/btns/BtnYt'
import BtnOk from '@/components/btns/BtnOk'
import BtnDzen from '@/components/btns/BtnDzen'
import EagleIcon from '@/components/icons/EagleIcon'
import { topFooterLinks } from 'constants/footer'

const FooterTop = () => {
  return (
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
                <p key={i} className={stls.title}>
                  {item.title}
                </p>
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
  )
}

export default FooterTop
