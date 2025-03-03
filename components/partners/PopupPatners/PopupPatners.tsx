'use client'
import Popup from 'reactjs-popup'
import BtnAlpha from '@/components/btns/BtnAlpha'
import PartnersForm from '../PartnersForm/PartnersForm'
import { useState } from 'react'

const PopupPartners = ({ text }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <BtnAlpha text={text} onClick={handleOpen} />
      <Popup open={open} onClose={handleClose} modal>
        {
          // @ts-ignore
          close => <PartnersForm onClose={handleClose} />
        }
      </Popup>
    </>
  )
}

export default PopupPartners
