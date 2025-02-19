'use client'
import BtnFields from '@/components/btns/BtnFields'
import BtnHumburger from '@/components/btns/BtnHumburger'
import BtnPhone from '@/components/btns/BtnPhone'
import Logo from '@/ui/Logo'
import MenuMobile from '@/components/sections/MenuMobile'
import Wrapper from '@/ui/Wrapper'
import { routes } from '@/config/index'
import MenuContext from '@/context/menu/menuContext'
import { handleSwipedEvt } from '@/helpers/index'
import stls from '@/styles/components/sections/Header.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useEffect } from 'react'
import IconsDropDown from '../dropdown/IconsDropDown'
import SearchProgramsDropDown from '../dropdown/SearchProgramsDropDown'

type Props = {
  isPromo?: boolean
}

const Header = ({ isPromo }: Props) => {
  const { menuIsOpen, closeMenu } = useContext(MenuContext)
  const pathname = usePathname()

  useEffect(() => {
    handleSwipedEvt({ menuIsOpen, closeMenu })
  }, [menuIsOpen, closeMenu])
  return (
    <header
      className={classNames({
        [stls.container]: true,
        [stls.promo]: isPromo
      })}>
      <MenuMobile />
      <Wrapper>
        {pathname === '/' && (
          <div className={stls.top}>
            <div className={stls.topleft}>
              <Link href={routes.front.svedenCommon} className={stls.linkInfo}>
                Сведения об образовательной организации
              </Link>
            </div>
          </div>
        )}
        <div className={stls.row}>
          <Logo atHeader />
          <div className={stls.btns}>
            <BtnPhone />
            <BtnHumburger />
          </div>
          <div className={stls.btnFields}>
            <BtnFields />
          </div>
          <SearchProgramsDropDown />
          <IconsDropDown />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
