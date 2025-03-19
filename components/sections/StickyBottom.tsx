'use client'
import React, { useState, useEffect } from 'react'
import PopupTrigger from '@/ui/PopupTrigger'
import IconCloseCircle from '@/components/icons/IconCloseCircle'
import IconForStickyBottom from '@/components/icons/IconForStickyBottom'
import IconInfoOrange from '@/components/icons/IconInfoOrange'
import Wrapper from '@/ui/Wrapper'
import ProgramDiscountUntil from '@/components/program/ProgramDiscountUntil'
import { discount } from '@/data/price'
import stls from '@/styles/components/sections/StickyBottom.module.sass'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import Popup from 'reactjs-popup'
import IconPortalViolet from '../icons/IconPortalViolet'
import PopupPartnersStickyBottom from '../partners/PopupPatners/PopupPartnersStickyBottom'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

interface Props {
  pageAppRouter?: boolean
}

const StickyBottom = ({ pageAppRouter = false }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  // Управляем анимацией скрытия
  const [isShown, setIsShown] = useState(true)

  const roistat_visit = getCookie('roistat_visit')

  const [rs_visit, setRsVisit] = useState('')

  useEffect(() => {
    setRsVisit(roistat_visit as string)
  }, [roistat_visit])

  // Если `isShown === false`, ждем анимацию, а потом удаляем компонент
  if (!isShown) {
    setTimeout(() => {
      if (isShown === false) return null
    }, 200)
  }

  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.isShown]: isShown,
        [stls.isClosed]: !isShown
      })}>
      <div className={stls.shape}>
        <IconForStickyBottom />
      </div>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.text}>
            <span className={stls.title}>Скидка до {discount}</span>
            <span className={stls.description}>на все программы и курсы</span>
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
            on={isMobileAndTabletLayout ? 'click' : 'hover'}
            closeOnDocumentClick
            arrow={false}
            contentStyle={{ boxShadow: 'none' }}>
            <div className={stls.tooltip}>
              <div className={stls.icon}>
                <IconInfoOrange />
              </div>
              Информацию о скидках и бонусах уточняйте у менеджеров приемной комиссии
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
          <p>Ваш номер обращения: {rs_visit}</p>
        </div>

        <div className={stls.btnMobile}>
          {pageAppRouter ? (
            <PopupPartnersStickyBottom btnClass='btn_alpha' text={'Оставить заявку'} />
          ) : (
            <PopupTrigger btn='alpha' cta='submitApplication' />
          )}
        </div>
      </Wrapper>

      <button className={stls.close} onClick={() => setIsShown(false)}>
        <IconCloseCircle blackCross />
      </button>
    </div>
  )
}

// ✅ Меморизация для предотвращения лишних ререндеров
export default React.memo(StickyBottom)
