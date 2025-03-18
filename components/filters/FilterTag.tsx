import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/filters/FilterTag.module.sass'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import IconInfo from '../icons/IconInfo'
import { PopupPosition } from 'reactjs-popup/dist/types'

interface FilterTagProps {
  children: any
  onClick?: () => void
  isActive: boolean
  isCategories?: boolean
  isProgram?: boolean
  quantity?: string
  withPopup?: boolean
  popupText?: string
  disabled?: boolean
  position?: string
}
const FilterTag = ({
  children,
  onClick,
  isActive,
  isCategories = false,
  isProgram = false,
  quantity,
  withPopup = false,
  popupText = '',
  disabled = false,
  position = 'left center'
}: FilterTagProps) => {
  const isTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const contentStyle = {
    background: '#ffffff',
    minWidth: isTabletLayout ? '250px' : '400px',
    paddingRight: '30px',
    paddingLeft: '30px',
    paddingTop: '30px',
    paddingBottom: '30px',
    border: '1px solid #CDCDCD'
  }

  return (
    <span
      onClick={onClick}
      className={classNames({
        [stls.container]: true,
        [stls.active]: isActive,
        [stls.category]: isCategories,
        [stls.program]: isProgram,
        [stls.disabled]: disabled
      })}>
      {children}
      {quantity && <span className={stls.quantity}>{quantity}</span>}
      {withPopup && (
        <Popup
          trigger={open => (
            <span className={stls.popupTrigger}>
              <IconInfo yellow />
            </span>
          )}
          on={isTabletLayout ? 'click' : 'hover'}
          position={position as PopupPosition}
          {...{ contentStyle }}
          offsetX={5}>
          <span className={stls.popupText}>{popupText}</span>
        </Popup>
      )}
    </span>
  )
}

export default FilterTag
