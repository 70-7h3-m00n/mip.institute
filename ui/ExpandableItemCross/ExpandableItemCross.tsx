'use client'
import stls from './ExpandableItemCross.module.sass'
import { ReactNode, useEffect, useState } from 'react'
import IconCrossBlue from '@/components/icons/IconCrossBlue'
import classNames from 'classnames'

type Props = {
  title: string | JSX.Element
  content: string | JSX.Element
  isOpened?: boolean
  icon?: ReactNode
  classNameContainer?: string
  classNameHeader?: string
  classNameIcon?: string
}

const ExpandableItemCross = ({
  title,
  content,
  isOpened = false,
  icon,
  classNameContainer,
  classNameHeader,
  classNameIcon
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpened && setIsOpen(true)
  }, [isOpened])

  return (
    <li className={classNames(stls.container, classNameContainer)}>
      <button
        className={classNames(stls.title, classNameHeader)}
        onClick={() => setIsOpen(!isOpen)}>
        {icon ? (
          icon
        ) : (
          <span className={classNames(stls.icon, classNameIcon)}>
            <IconCrossBlue isRotated={isOpen} />
          </span>
        )}

        {typeof title === 'string' ? <span className={stls.pTitle}>{title}</span> : title}
      </button>

      <div className={`${stls.content} ${isOpen ? stls.visible : ''}`}>
        <div>{content}</div>
      </div>
    </li>
  )
}

export default ExpandableItemCross
