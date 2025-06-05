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
import { Suspense, useContext, useEffect, useState } from 'react'
import IconsDropDown from '../dropdown/IconsDropDown'
import SearchProgramsDropDown from '../dropdown/SearchProgramsDropDown'
import { getCookie, setCookie } from 'cookies-next'
import StickyTop from './StickyTop'
import NProgress from 'nprogress'
import TagManager from 'react-gtm-module'
import Router from 'next/router'
import Script from 'next/script'
import { WPheaderJsonLd } from 'constants/header'
import axios from 'axios'
import { PromoCodeItems } from '@/lib/promo'

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

  const [promocodes, setPromocodes] = useState<PromoCodeItems[]>([]);
  const [error, setError] = useState<string | null>(null);

  const utmCookie = getCookie('utm')?.toString() || ''

  useEffect(() => {
    const fetchPromocodes = async () => {
      try {
        const response = await axios.get('/api/promo/getPromos');
        const fetchedPromocodes: PromoCodeItems[] = response.data;
        setPromocodes(fetchedPromocodes);

        // Проверка UTM и установка промо
        const promo = fetchedPromocodes.find(p => utmCookie?.includes(p.name));
        setIsPromo(!!promo);
        setPromoText(promo ? promo.promo_code : '');

        // Проверка промокодов с подарком (по redirect_url)
        const giftPromo = fetchedPromocodes.find(
          p => p.redirect_url !== '' && utmCookie?.includes(p.name)
        );
        setIsWithGift(!!giftPromo);
      } catch (err) {
        console.error('Ошибка при загрузке промокодов:', err);
        setError('Не удалось загрузить промокоды');
      }
    };

    fetchPromocodes();
  }, [utmCookie]);
    

  const closePromo = () => setIsPromo(false)
  // /SticyTop

  useEffect(() => {
    const urlUtmsArr = String(searchParams)

    if (!urlUtmsArr.length) return // Если в URL нет UTM-меток, выходим

    const utms = urlUtmsArr.split('&').reduce(
      (acc, utm) => {
        const [key, value] = utm.split('=')
        acc[key] = decodeURIComponent(value) // Декодируем значение UTM
        return acc
      },
      {} as Record<string, string>
    )

    setCookie('utm', JSON.stringify(utms), { maxAge: 7776000 })
  }, [searchParams])

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    // Загружаем utm из sessionStorage
    const storedUtms = sessionStorage.getItem('utms')
    const utms = storedUtms ? JSON.parse(storedUtms) : {}

    if (Object.keys(utms).length === 0) {
      const utmParams = String(searchParams)
      if (utmParams) {
        const parsedUtms = Object.fromEntries(
          utmParams.split('&').map(utm => utm.split('=').map(decodeURIComponent))
        )

        sessionStorage.setItem('utms', JSON.stringify(parsedUtms))
      }
    }

    // Сохраняем реферер, если его нет в sessionStorage
    if (!sessionStorage.getItem('referrer')) {
      sessionStorage.setItem('referrer', JSON.stringify(document.referrer))
    }

    // Настраиваем NProgress
    NProgress.configure({ showSpinner: false })

    const start = () => NProgress.start()
    const end = () => NProgress.done()

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [searchParams])

  const PsyConsAB = getCookie('PsyConsAB')?.toString() || ''
  const [roistatAB, setRoistatAB] = useState<string | null>('old')
  useEffect(() => {
    setRoistatAB(PsyConsAB as 'old' | 'new')
  }, [PsyConsAB])

  return (
    <>
      <Script
        id='header-jsonld'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(WPheaderJsonLd, null, 2)
        }}
      />
    <Suspense>
      <StickyTop
        isWithGift={isWithGift}
        onClick={closePromo}
        isPromo={isPromo}
        promoText={promoText}
      />
      </Suspense>
      <header
        className={classNames({
          [stls.container]: true,
          [stls.promo]: isPromo,
          [stls.newHomePage]: pathname === '/' || roistatAB === 'new'
        })}>
        <MenuMobile />
        <Wrapper>
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
            <IconsDropDown
              newMainPage={pathname === '/'}
            />
          </div>
          {pathname === '/' && (
            <div className={stls.bottom}>
              <div className={stls.bottomleft}>
                <Link href={routes.front.svedenCommon} className={stls.linkInfo}>
                  Сведения об образовательной организации
                </Link>
              </div>
            </div>
          )}
        </Wrapper>
      </header>
    </>
  )
}

export default Header
