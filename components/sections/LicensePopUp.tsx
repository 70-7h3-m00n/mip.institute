import stls from '@/styles/components/sections/LicensePopUp.module.sass'
import Popup from 'reactjs-popup'
import ImgLicence from '../imgs/legal/ImgLicence'
import PopupImage from '../popups/PopupImage'
import loadIcon from '@/helpers/general/loadIcon'
import License from '../imgs/legal/License'
import IconLoupe from '../icons/IconLoupe'
import { ReactNode } from 'react'

type Props = {
  showFullText?: boolean
  onBachelor?: boolean
}

const LicensePopUp = ({ showFullText = false, onBachelor = false }: Props) => {
  const triggerContent = (
    <div className={stls.trig}>
      <div className={!showFullText ? stls.license : stls.cuttedLicense}>
        <div className={stls.leftLicense}>
          <span className={stls.licenseTitle}>
            Образовательная
            <br />
          </span>
          <span className={stls.edu}>{onBachelor ? '' : ' №041363'}</span>
          <div className={stls.iconRus}>{loadIcon('IconRusLicense')}</div>
          <div className={stls.iconAtom}>{loadIcon('IconAtom')}</div>
        </div>
        <div className={stls.rightLicense}>
          <div className={stls.card}>
            <License />
          </div>
          {!onBachelor && <div className={stls.loupe}>
            <IconLoupe />
          </div>}
        </div>
      </div>
    </div>
  )

  return (
    <div className={stls.btn}>
      {onBachelor ? (
        triggerContent
      ) : (
        <Popup
          trigger={triggerContent}
          modal
          lockScroll
          nested
          closeOnDocumentClick>
          {
            ((close: () => void) => (
              <PopupImage
                image={onBachelor ? <ImgLicence isOchuVoMip /> : <ImgLicence />}
                close={close}
              />
            )) as unknown as ReactNode
          }
        </Popup>
      )}
    </div>
  )
}

export default LicensePopUp