'use client'
import stls from '@/styles/components/btns/BtnHumburger.module.sass'
import { useContext } from 'react'

import MenuContext from '@/context/menu/menuContext'
import IconHumburger from '@/components/icons/IconHumburger'

const BtnHumburger = () => {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <button className={stls.container} onClick={toggleMenu} aria-label='Меню'>
      <IconHumburger />
    </button>
  )
}

export default BtnHumburger
