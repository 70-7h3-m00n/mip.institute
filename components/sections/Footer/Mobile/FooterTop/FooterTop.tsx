import stls from './FooterTop.module.sass'
import Logo from '@/ui/Logo'

const FooterTop = () => {
  return (
    <div className={stls.container}>
      <Logo atFooter />
    </div>
  )
}

export default FooterTop
