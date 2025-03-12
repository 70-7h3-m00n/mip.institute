import React, { ReactNode, useRef } from 'react'
import stls from '@/styles/components/filters/FiltersForLifeCoursesMobile.module.sass'
import Popup from 'reactjs-popup'
import IconFilterOpen from '../icons/IconFilterOpen'
import ResetFilter from './ResetFilter'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  btnTitle: string
  isProgram?: boolean
}
export default function FiltersForLifeCoursesMobile({
  children,
  btnTitle,
  isProgram = false
}: Props) {
  const scrollToRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={scrollToRef} className={stls.container}>
      <Popup
        className='popupOverlay-liveCourses'
        position={'bottom center'}
        lockScroll={true}
        trigger={
          <button
            className={classNames({
              [stls.trigger]: true,
              [stls.program]: isProgram
            })}>
            <IconFilterOpen />
          </button>
        }
        modal
        nested
        contentStyle={{
          padding: '0'
        }}
        overlayStyle={{ background: 'rgba(0, 0, 0, 0.35)' }}>
        {
          ((close: () => void) => (
            <div className={stls.modal}>
              <ResetFilter />
              {children}
              <button
                className={stls.btn}
                onClick={() => {
                  scrollToRef?.current?.scrollIntoView({ behavior: 'smooth' })
                  close()
                }}>
                {btnTitle}
              </button>
            </div>
          )) as unknown as ReactNode
        }
      </Popup>
    </div>
  )
}
