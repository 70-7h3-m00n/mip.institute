import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/StickyTop.module.sass'
import classNames from 'classnames'
import PopupTrigger from '@/ui/PopupTrigger'
import { IconCloseCircle } from '../icons'
import IconPortalViolet from '../icons/IconPortalViolet'

type Props = {
  onClick: () => void
  isPromo?: boolean
  promoText?: string
}

const StickyTop = ({ onClick, isPromo = false, promoText = '' }: Props) => {
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.nopromo]: !isPromo,
        [stls.promo]: isPromo
      })}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.icon}>
              <IconPortalViolet />
            </div>
            <div className={stls.text}>
              Активируйте промокод
              <span className={stls.bold}> “{promoText}”</span> и получите
              дополнительную <span className={stls.bold}>скидку 10%</span>
            </div>
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='gamma' cta='use' isActivePromocode={promoText} />
          </div>
        </div>
        <div className={stls.mobileBtn}>
          <PopupTrigger btn='gamma' cta='use' isActivePromocode={promoText} />
        </div>
      </Wrapper>
      <div className={stls.close}>
        <IconCloseCircle onClick={onClick} blackCross />
      </div>
    </div>
  )
}

export default StickyTop
