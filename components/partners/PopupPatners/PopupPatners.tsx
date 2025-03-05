'use client'
import Popup from 'reactjs-popup'
import PartnersForm from '../PartnersForm/PartnersForm'
import { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'

interface IPopupPartnersProps {
  text: string
  btnClass: string
}

const PopupPartners = ({ text, btnClass }: IPopupPartnersProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <CustomButton text={text} onClick={handleOpen} className={btnClass} />
      <Popup open={open} onClose={handleClose} modal>
        {
          // @ts-ignore
          close => <PartnersForm onClose={handleClose} title={text} />
        }
      </Popup>
    </>
  )
}

export default PopupPartners
