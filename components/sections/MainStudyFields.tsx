import stls from '@/styles/components/sections/MainStudyFields.module.sass'
import cn from 'classnames'
import list from 'constants/mainStudyFields'
import Link from 'next/link'
import { Fragment } from 'react'

type StudyFieldsType = {
  ofType?: 'course' | 'profession' | null
  close?: any
  setCurrentType?: (type: string) => void
  currentType?: string
}

const MainStudyFields = ({
  setCurrentType,
  close = null,
  currentType
}: StudyFieldsType) => {
  return (
    <ul className={stls.wrapper}>
      {list.map(({ label, href, programType, hoverSelect }, idx) => (
        <Fragment key={idx}>
          <li
            className={cn({
              [stls.studyField]: true,
              [stls.active]: currentType === programType
            })}
            onClick={close && close}>
            <Link
              href={href}
              passHref
              // @ts-ignore
              onMouseEnter={
                // @ts-ignore
                hoverSelect ? () => setCurrentType(programType) : null
              }
              className={cn({
                [stls.mainFields]: true,
                [stls.active]: currentType === programType
              })}>
              {label}
            </Link>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default MainStudyFields
