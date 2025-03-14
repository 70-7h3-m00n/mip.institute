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
import routes from '@/config/routes'

// удалить когда contacts будут вмержены в dev
const ArrowIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
    <path d='M1 13L13 1M13 1H1M13 1V13' stroke='#855EDF' stroke-width='2' />
  </svg>
)

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
        <a
          className={stls.licenseButton}
          href={routes.external.license}
          target='_blank'
          rel='noopener noreferrer'>
          <span className={stls.eagleIcon}>
            <EagleIcon />
          </span>
          <div className={stls.textWrapper}>
            <div className={stls.licenseText}>Государственная</div>
            <div className={stls.arrowWrapper}>
              лицензия
              <span className={stls.arrowIcon}>
                <ArrowIcon />
              </span>
            </div>
          </div>
        </a>
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
