'use client'
import Popup from 'reactjs-popup'
import { useState } from 'react'
import PartnersFormStickyBottom from '../PartnersFormStickyBottom/PartnersFormStickyBottom'
import CustomButton from '../CustomButton/CustomButton'

interface IPopupPartnersStickyBottomProps {
  text: string
  btnClass: string
}

const PopupPartnersStickyBottom = ({ text, btnClass }: IPopupPartnersStickyBottomProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const pormoVisible = text === 'Оставить заявку'
  return (
    <>
      <CustomButton text={text} onClick={handleOpen} className={btnClass} />
      <Popup
        open={open}
        closeOnDocumentClick={false}
        closeOnEscape={true}
        onClose={handleClose}
        modal
        nested>
        <PartnersFormStickyBottom
          onClose={handleClose}
          cta={text}
          promo={pormoVisible}
          popup={true}
        />
      </Popup>
    </>
  )
}

export default PopupPartnersStickyBottom
