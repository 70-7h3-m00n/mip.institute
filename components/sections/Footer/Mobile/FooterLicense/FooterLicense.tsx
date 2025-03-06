import stls from './FooterLicense.module.sass'
import EagleIcon from '@/components/icons/EagleIcon'

const FooterLicense = () => {
  return (
    <button className={stls.licenseContainer} onClick={() => {}}>
      <EagleIcon />
      <span className={stls.licenseText}>Государственная лицензия</span>
      <span className={stls.licenseLink}>
        <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8' fill='none'>
          <path opacity='0.4' d='M1 7L7 1M7 1H1M7 1V7' stroke='white' stroke-width='0.9825' />
        </svg>
      </span>
    </button>
  )
}

export default FooterLicense
