import classNames from 'classnames'
import { ReactNode } from 'react'
import stls from './TwoBlocks.module.sass'

type Props = {
  children: ReactNode
  isRightViolet?: boolean
}
const TwoBlocks = ({ children, isRightViolet = false }: Props) => {
  return (
    <div className={stls.container}>
      <div className={stls.leftBlock}>{children?.[0]}</div>
      <div
        className={classNames(stls.rightBlock, {
          [stls.violet]: isRightViolet
        })}>
        {children?.[1]}
      </div>
    </div>
  )
}

export default TwoBlocks
