'use client'
import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/StickyTop.module.sass'
import classNames from 'classnames'
import PopupTrigger from '@/ui/PopupTrigger'
import IconCloseCircle from '../icons/IconCloseCircle'
import IconPortalViolet from '../icons/IconPortalViolet'
import { useEffect } from 'react'
import gtmId from '@/config/gtmId'
import TagManager from 'react-gtm-module'
import { usePathname, useSearchParams } from 'next/navigation'
import { setCookie } from 'cookies-next'

type Props = {
  onClick: () => void
  isPromo?: boolean
  promoText?: string
  isWithGift?: boolean
}

const StickyTop = ({
  onClick,
  isPromo = false,
  promoText = '',
  isWithGift
}: Props) => {

  // const pathname = usePathname()
  // const searchParams = useSearchParams()

  // useEffect(() => {
  //   const urlUtmsArr = String(searchParams)

  //   if (!urlUtmsArr.length) return // Если в URL нет UTM-меток, выходим

  //   const utms = urlUtmsArr.split('&').reduce(
  //     (acc, utm) => {
  //       const [key, value] = utm.split('=')
  //       acc[key] = decodeURIComponent(value) // Декодируем значение UTM
  //       return acc
  //     },
  //     {} as Record<string, string>
  //   )

  //   setCookie('utm', JSON.stringify(utms), { maxAge: 7776000 })
  // }, [searchParams])

  // useEffect(() => {
  //   TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

  //   // Загружаем utm из sessionStorage
  //   const storedUtms = sessionStorage.getItem('utms')
  //   const utms = storedUtms ? JSON.parse(storedUtms) : {}

  //   if (Object.keys(utms).length === 0) {
  //     const utmParams = String(searchParams)
  //     if (utmParams) {
  //       const parsedUtms = Object.fromEntries(
  //         utmParams.split('&').map(utm => utm.split('=').map(decodeURIComponent))
  //       )

  //       sessionStorage.setItem('utms', JSON.stringify(parsedUtms))
  //     }
  //   }

  //   // Сохраняем реферер, если его нет в sessionStorage
  //   if (!sessionStorage.getItem('referrer')) {
  //     sessionStorage.setItem('referrer', JSON.stringify(document.referrer))
  //   }

  //   // Настраиваем NProgress
  //   // NProgress.configure({ showSpinner: false })

  //   // const start = () => NProgress.start()
  //   // const end = () => NProgress.done()

  //   // Router.events.on('routeChangeStart', start)
  //   // Router.events.on('routeChangeComplete', end)
  //   // Router.events.on('routeChangeError', end)

  //   // return () => {
  //   //   Router.events.off('routeChangeStart', start)
  //   //   Router.events.off('routeChangeComplete', end)
  //   //   Router.events.off('routeChangeError', end)
  //   // }
  // }, [searchParams])
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.nopromo]: !isPromo,
        [stls.promo]: isPromo
      })}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.icon}>
              <IconPortalViolet />
            </div>
            <div className={stls.text}>
              Активируйте промокод
              <span className={stls.bold}> “{promoText}”</span> и получите
              дополнительную{' '}
              <span className={stls.bold}>
                скидку 10%{isWithGift && ' и мини-курс в подарок!'}
              </span>
            </div>
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='gamma' cta='use' isActivePromocode={promoText} />
          </div>
        </div>
        <div className={stls.mobileBtn}>
          <PopupTrigger btn='gamma' cta='use' isActivePromocode={promoText} />
        </div>
      </Wrapper>
      <div className={stls.close}>
        
        <IconCloseCircle
        onClick={onClick} blackCross />
      </div>
    </div>
  )
}

export default StickyTop
