'use client'

import { useState } from 'react'
import stls from './ExpandableCourseItem.module.sass'
import { IconMinusCircle } from './IconMinusCircle'
import { IconPlusCircle } from './IconPlusCircle'
import classNames from 'classnames'

type Props = {
  number: number
  title: string
  description?: string
}

const ExpandableCourseItem = ({ number, title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className={stls.item}>
      <button
        className={classNames(stls.header, {
          [stls.opened]: isOpen
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={stls.number}>{number}</span>
        <span className={stls.title}>{title}</span>
        <span className={stls.icon}>{isOpen ? <IconMinusCircle /> : <IconPlusCircle />}</span>
      </button>

      {description && (
        <div className={classNames(stls.wrapper, { [stls.open]: isOpen })}>
          <div className={stls.description}>{description}</div>
        </div>
      )}
    </li>
  )
}

export default ExpandableCourseItem
