import {
  BtnClose,
  BtnOk,
  BtnPhone,
  BtnTelegram,
  BtnVk,
  BtnWhatsapp,
  BtnYt
} from '@/components/btns'
import Logo from '@/ui/Logo'
import PopupTrigger from '@/ui/PopupTrigger'
import { IconMoreThan } from '@/components/icons'
import Wrapper from '@/ui/Wrapper'
import MenuContext from '@/context/menu/menuContext'
import stls from '@/styles/components/sections/MenuMobile.module.sass'
import cn from 'classnames'
import links from 'constants/menuMobile'
import Link from 'next/link'
import { useContext } from 'react'
import BtnDzen from '../btns/BtnDzen'

const MenuMobile = () => {
  const { menuIsOpen, closeMenu } = useContext(MenuContext)

  return (
    <div
      className={cn({
        [stls.container]: true,
        [stls.menuIsOpen]: menuIsOpen
      })}>
      <Wrapper>
        <div className={stls.row}>
          <Logo atHeader />
          <BtnClose />
        </div>
        <nav className={stls.nav}>
          <ul className={stls.navList}>
            {links.map((item, idx) => (
              <li key={item.text + idx} className={stls.navItem}>
                <Link href={item.href} onClick={closeMenu} passHref>
                  <span>{item.text}</span>
                  {item.withIcon && <IconMoreThan small cnu />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={stls.cta}>
          <p className={stls.divName}>Приемная комиссия:</p>
          <BtnPhone withNumber alterNumber />
          {/* <p>+7(800)600-29-03</p> */}
          <p className={stls.divName}>Кураторский отдел:</p>
          <BtnPhone studyDivision withNumber />
          {/* <p>+7(499)110-82-11</p> */}

          <PopupTrigger btn='epsilon' cta='callMeBack' />
        </div>
        <p>Москва, Докучаев переулок, 8</p>
        <div className={stls.sm}>
          <BtnVk mlzero />
          <BtnWhatsapp />
          <BtnTelegram />
          <BtnYt />
          <BtnOk />
          <BtnDzen />
        </div>
      </Wrapper>
    </div>
  )
}

export default MenuMobile
