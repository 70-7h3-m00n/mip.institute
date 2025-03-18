import stls from '@/styles/components/sections/GratefullNew.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import Link from 'next/link'
import IconArrowNew from '../icons/IconArrowNew'
import IconArrowLeft from '../icons/IconArrowLeft'
import gifts from '@/public/assets/imgs/gratefull/gifts.png'
import planes from '@/public/assets/imgs/gratefull/planes.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import promocodesWithGift from '@/helpers/promoWithGIfts'
import { gratefull } from 'constants/gratefull'
import LinkComponent from '@/ui/LinkComponent'

type Props = {
  backButton?: boolean
}

const GratefullNew = ({ backButton = true }: Props) => {
  const [isPromo, setIsPromo] = useState(false)
  const [isPromoLinkGift, setIsPromoLinkGift] = useState('')

  const utmCookie = getCookie('utm')
  const stringedUtm = utmCookie?.toString()
  useEffect(() => {
    setTimeout(() => {
      let foundPromo = false
      for (const key in promocodesWithGift) {
        if (stringedUtm?.includes(key)) {
          const { gift } = promocodesWithGift[key]
          setIsPromoLinkGift(gift)
          setIsPromo(true)
          foundPromo = true
          break
        }
      }
      if (!foundPromo) {
        setIsPromo(false)
      }
    }, 2000)
  }, [utmCookie, stringedUtm])

  return (
    <LinkComponent
      title={gratefull.title}
      tag={gratefull.tag}
      background1={gratefull.columns[0].backgroundImage}
      backButton={backButton}>
      <>
        <div className={stls.top}>
          <h3>{gratefull.columns[0].title}</h3>
          <p>{gratefull.columns[0].text}</p>
        </div>
        {isPromo && (
          <div className={stls.bottom}>
            <p>{gratefull.columns[0].subtitle}</p>
            <Link href={isPromoLinkGift} target='_blank' className={stls.link}>
              <button
                className={classNames({
                  [stls.button]: true,
                  [stls.purple]: true
                })}>
                {gratefull.columns[0].linkText}
              </button>
              <div
                className={classNames({
                  [stls.iconLink]: true,
                  [stls.purple]: true
                })}>
                <IconArrowNew />
              </div>
            </Link>
          </div>
        )}
      </>
      <>
        <div className={stls.top}>
          <h3 className={stls.whiteText}>{gratefull.columns[1].title}</h3>
          <p className={stls.whiteText}>{gratefull.columns[1].text}</p>
        </div>
        <div className={stls.bottom}>
          <p></p>
          <Link href={gratefull.columns[1].link ?? '#'} target='_blank' className={stls.link}>
            <button
              className={classNames({
                [stls.button]: true,
                [stls.white]: true
              })}>
              {gratefull.columns[1].linkText}
            </button>
            <div
              className={classNames({
                [stls.iconLink]: true,
                [stls.white]: true
              })}>
              <IconArrowNew orange />
            </div>
          </Link>
        </div>
        <div className={stls.backgroundImageRight}>
          <Image
            src={planes}
            alt='Самолеты'
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
      </>
    </LinkComponent>
  )
}

export default GratefullNew
