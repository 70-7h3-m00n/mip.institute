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
  const handleClick = () => {
    window.open(
      'https://islod.obrnadzor.gov.ru/rlic/details/67f7635c-5dbb-e9d7-c30c-950b7e64c838/',
      '_blank'
    )
  }
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
        <button className={stls.licenseButton} onClick={handleClick}>
          <span>
            <EagleIcon />
          </span>
          <span className={stls.licenseContainer}>
            <span className={stls.licenseText}>
              Государственная <br />
            </span>
            <span className={stls.licenseText}>
              лицензия
              <span className={stls.licenseLink}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='8'
                  height='8'
                  viewBox='0 0 8 8'
                  fill='none'>
                  <path
                    opacity='0.4'
                    d='M1 7L7 1M7 1H1M7 1V7'
                    stroke='white'
                    stroke-width='0.9825'
                  />
                </svg>
              </span>
            </span>
          </span>
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
