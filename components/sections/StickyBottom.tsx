'use client'
import PopupTrigger from '@/ui/PopupTrigger'
import IconCloseCircle from '@/components/icons/IconCloseCircle'
import IconForStickyBottom from '@/components/icons/IconForStickyBottom'
import IconInfoOrange from '@/components/icons/IconInfoOrange'
import Wrapper from '@/ui/Wrapper'
import ProgramDiscountUntil from '@/components/program/ProgramDiscountUntil'
import { discount } from '@/data/price'
import stls from '@/styles/components/sections/StickyBottom.module.sass'
import cn from 'classnames'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import IconPortalViolet from '../icons/IconPortalViolet'
import PopupPartnersStickyBottom from '../partners/PopupPatners/PopupPartnersStickyBottom'

interface Props {
  pageAppRouter?: boolean
}
const StickyBottom = ({ pageAppRouter = false }: Props) => {
  const [isShown, setIsShown] = useState(true)
  const [isClosed, setIsClosed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const roistat_visit = getCookie('roistat_visit')

  useEffect(() => {
    setIsLoaded(true)
  }, [setIsShown, isClosed])

  if (isLoaded)
    return (
      <div
        className={cn({
          [stls.container]: true,
          [stls.isShown]: isShown,
          [stls.isClosed]: isClosed
        })}>
        <div className={stls.shape}>
          <IconForStickyBottom />
        </div>
        <Wrapper>
          <div className={stls.content}>
            <div className={stls.text}>
              <span className={stls.title}>Скидка до {discount}</span>
              <span className={stls.description}>на все программы и курсы </span>
              <span className={stls.discount}>
                <ProgramDiscountUntil />
              </span>
            </div>
            <span className={classNames(stls.portal, stls.big)}>
              <IconPortalViolet />
            </span>
            <span className={classNames(stls.portal, stls.medium)}>
              <IconPortalViolet />
            </span>
            <span className={classNames(stls.portal, stls.small, stls.right)}>
              <IconPortalViolet />
            </span>
            <span className={classNames(stls.portal, stls.small)}>
              <IconPortalViolet />
            </span>
            <span className={classNames(stls.portal, stls.tiny)}>
              <IconPortalViolet />
            </span>
            <Popup
              trigger={
                <button className={stls.info} aria-label='Информация о скидках'>
                  <IconInfoOrange />
                </button>
              }
              position='top left'
              on={window.innerWidth <= 768 ? 'click' : 'hover'}
              closeOnDocumentClick
              arrow={false}
              contentStyle={{
                boxShadow: 'none'
              }}>
              <div className={stls.tooltip}>
                <div className={stls.icon}>
                  <IconInfoOrange />
                </div>
                Информацию о скидках и дополнительных бонусах при поступлении уточняйте у менеджеров
                приемной комиссии
              </div>
            </Popup>
          </div>
          <div className={stls.btns}>
            {pageAppRouter ? (
              <PopupPartnersStickyBottom btnClass='btn_alpha' text={'Оставить заявку'} />
            ) : (
              <PopupTrigger btn='alpha' cta='submitApplication' />
            )}
            <div className={stls.btn2}>
              {pageAppRouter ? (
                <PopupPartnersStickyBottom btnClass='btn_beta' text={'Хочу консультацию'} />
              ) : (
                <PopupTrigger btn='beta' cta='consultMe' />
              )}
            </div>
          </div>
          <div className='js-whatsapp-message-container' style={{ display: 'none' }}>
            <p>
              Обязательно отправьте это сообщение и дождитесь ответа. Ваш номер обращения:{' '}
              {roistat_visit}
            </p>
          </div>
          <div className={stls.btnMobile}>
            {pageAppRouter ? (
              <PopupPartnersStickyBottom btnClass='btn_alpha' text={'Оставить заявку'} />
            ) : (
              <PopupTrigger btn='alpha' cta='submitApplication' />
            )}
          </div>
        </Wrapper>
        <button className={stls.close} onClick={() => setIsClosed(true)}>
          <IconCloseCircle blackCross />
        </button>
      </div>
    )

  return null
}

export default StickyBottom
