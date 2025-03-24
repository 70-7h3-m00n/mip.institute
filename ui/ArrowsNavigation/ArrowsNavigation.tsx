import React from 'react'
import stls from './ArrowsNavigation.module.sass'
import ArrowLeftIcon from './ArrowLeftIcon/ArrowLeftIcon'
import ArrowRightIcon from './ArrowRightIcon/ArrowRightIcon'
import classNames from 'classnames'

interface ArrowNavigationProps {
  onPrev: () => void
  onNext: () => void
  bgColor?: string
  arrowColor?: string
  size?: 'small' | 'medium' | 'large'
  iconSizeLeft?: number
  iconSizeRight?: number
  disabledPrev?: boolean
  disabledNext?: boolean
}

const ArrowNavigation: React.FC<ArrowNavigationProps> = ({
  onPrev,
  onNext,
  bgColor = '#855EDF',
  arrowColor = '#FFFFFF',
  size = 'medium',
  iconSizeLeft = 18, // чтобы работало нужно убрать svg 100% из layout
  iconSizeRight = 18,
  disabledPrev = false,
  disabledNext = false
}) => {
  return (
    <div className={stls.container}>
      <button
        onClick={onPrev}
        className={classNames(stls.button, stls[size])}
        style={{ backgroundColor: bgColor }}
        disabled={disabledPrev}>
        <ArrowLeftIcon fill={arrowColor} width={iconSizeLeft} height={iconSizeLeft} />
      </button>
      <button
        onClick={onNext}
        className={classNames(stls.button, stls[size])}
        style={{ backgroundColor: bgColor }}
        disabled={disabledNext}>
        <ArrowRightIcon fill={arrowColor} width={iconSizeRight} height={iconSizeRight} />
      </button>
    </div>
  )
}

export default ArrowNavigation
