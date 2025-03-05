import stls from './TwoColumnsPractical.module.sass'
import classNames from 'classnames'
import { ReactNode } from 'react'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

type Props = {
  children: ReactNode
  bigLeft?: boolean
  leftViolet?: boolean
  rightViolet?: boolean
  fixHeight?: boolean
  isMobileReversed?: boolean
  borderRadius?: number
}

const TwoColumnsPractical = ({
  children,
  bigLeft = false,
  leftViolet = false,
  rightViolet = false,
  fixHeight = false,
  isMobileReversed = false,
  borderRadius = 10
}: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const radius = isMobileAndTabletLayout
    ? `${borderRadius - 5}px`
    : `${borderRadius}px`

  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.fixHeight]: fixHeight,
        [stls.reversed]: isMobileReversed
      })}>
      <div
        className={classNames({
          [stls.leftColumn]: true,
          [stls.isViolet]: leftViolet
        })}
        style={{
          flexBasis: bigLeft ? '65%' : '35%',
          borderRadius: radius
        }}>
        {children?.[0]}
      </div>
      <div
        className={classNames({
          [stls.rightColumn]: true,
          [stls.isViolet]: rightViolet
        })}
        style={{
          flexBasis: bigLeft ? '35%' : '65%',
          borderRadius: radius
        }}>
        {children?.[1]}
      </div>
    </div>
  )
}

export default TwoColumnsPractical
