'use client'
import BtnFields from '@/components/btns/BtnFields'
import BtnHumburger from '@/components/btns/BtnHumburger'
import BtnPhone from '@/components/btns/BtnPhone'
import Logo from '@/ui/Logo'
import MenuMobile from '@/components/sections/MenuMobile'
import Wrapper from '@/ui/Wrapper'
import { gtmId, routes } from '@/config/index'
import MenuContext from '@/context/menu/menuContext'
import { handleSwipedEvt } from '@/helpers/index'
import stls from '@/styles/components/sections/Header.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import IconsDropDown from '../dropdown/IconsDropDown'
import SearchProgramsDropDown from '../dropdown/SearchProgramsDropDown'
import promocodesWithGift from '@/helpers/promoWithGIfts'
import promocodes from '@/helpers/promocodes'
import { getCookie, setCookie } from 'cookies-next'
import StickyTop from './StickyTop'
import NProgress from 'nprogress'
import TagManager from 'react-gtm-module'
import Router from 'next/router'

type Props = {
  isPromo?: boolean
}

const Header = () => {
  const { menuIsOpen, closeMenu } = useContext(MenuContext)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    handleSwipedEvt({ menuIsOpen, closeMenu })
  }, [menuIsOpen, closeMenu])

  // Sticky top
  const [isPromo, setIsPromo] = useState(false)
  const [promoText, setPromoText] = useState('')
  const [isWithGift, setIsWithGift] = useState(false)

  const utmCookie = getCookie('utm')
  const stringedUtm = utmCookie?.toString()

  useEffect(() => {
    setTimeout(() => {
      let foundPromo = false
      Object.keys(promocodes).forEach(code => {
        if (stringedUtm?.includes(code)) {
          setIsPromo(true)
          setPromoText(promocodes[code])
          foundPromo = true
        }
      })
      if (!foundPromo) {
        setIsPromo(false)
        setPromoText('')
      }

      let foundPromoWithGift = false
      Object.keys(promocodesWithGift).forEach(code => {
        if (stringedUtm?.includes(code)) {
          setIsWithGift(true)
          foundPromoWithGift = true
        }
      })
      if (!foundPromoWithGift) {
        setIsWithGift(false)
      }
    }, 2000)
  }, [utmCookie])

  const closePromo = () => {
    setIsPromo(false)
  }
  // /SticyTop

  useEffect(() => {
    const utmCookie = getCookie('utm')
    let arr
    if (typeof utmCookie === 'string') {
      arr = JSON.parse(utmCookie)
    }
    const urlUtmsArr = String(searchParams)

    // переписываем куку если отличается сурс от того, что был до этого
    if (urlUtmsArr.length > 0) {
      const urlUtmsArr = String(searchParams)
      let utms = {}
      urlUtmsArr &&
        urlUtmsArr?.split('&').forEach(utm => {
          const [key, value] = utm.split('=')
          utms[key] = decodeURIComponent(value) // Декодирование URL-кодированной строки
        })

      setCookie('utm', JSON.stringify(utms), { maxAge: 7776000 })
    }
  }, [searchParams])

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })
    // @ts-ignore
    let utms = JSON.parse(sessionStorage.getItem('utms')) || {}
    let utmsAreEmpty = false

    for (const key in utms) {
      if (utms.hasOwnProperty(key)) {
        utmsAreEmpty = true
        break
      }
    }

    if (!utmsAreEmpty) {
      const urlUtmsArr = String(searchParams)

      urlUtmsArr &&
        urlUtmsArr.split('&').forEach(utm => {
          utms[utm.split('=')[0]] = utm.split('=')[1]
        })
      sessionStorage.setItem('utms', JSON.stringify(utms))
    }

    const referer = sessionStorage.getItem('referrer')
    if (!referer) {
      sessionStorage.setItem('referer', JSON.stringify(document.referrer))
    }

    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
    }
    const end = () => {
      NProgress.done()
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <>
      <StickyTop
        isWithGift={isWithGift}
        onClick={closePromo}
        isPromo={isPromo}
        promoText={promoText}
      />
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
    </>
  )
}

export default Header
