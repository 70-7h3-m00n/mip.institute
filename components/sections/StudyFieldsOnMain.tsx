import BtnField from '@/components/btns/BtnField'
import { routes } from '@/config/index'
import stls from '@/styles/components/sections/StudyFields.module.sass'
import cn from 'classnames'
import {
  studyFields,
  studyFieldsCourses,
  studyFieldsProfessions,
  studyFieldsShortTerm
} from 'constants/studyFieldsOnMain'
import { Fragment } from 'react'

type StudyFieldType =
  | 'course'
  | 'profession'
  | 'bachelor'
  | 'practicalTraining'
  | 'shortTerm'
  | null
  | undefined

type StudyFieldsProps = {
  aside?: boolean
  ofType?: StudyFieldType
  close?: () => void
  flexend?: boolean
  smallText?: boolean
  onMain?: boolean
  orang?: boolean
}

const StudyFieldsOnMain = ({
  aside = false,
  ofType,
  close,
  flexend = false,
  orang = false,
  smallText
}: StudyFieldsProps) => {
  // Определяем список направлений по типу
  const getListByType = (type: StudyFieldType) => {
    switch (type) {
      case 'course':
        return studyFieldsCourses
      case 'profession':
        return studyFieldsProfessions
      case 'shortTerm':
        return studyFieldsShortTerm
      case 'bachelor':
      case 'practicalTraining':
        return null
      default:
        return studyFields
    }
  }

  const list = getListByType(ofType)

  // Определяем путь в зависимости от типа
  const getRouteByType = (type: StudyFieldType) => {
    switch (type) {
      case 'course':
        return routes.front.courses
      case 'profession':
        return routes.front.professions
      case 'shortTerm':
        return routes.front.shortTerm
      default:
        return routes.front.programs
    }
  }

  return (
    <ul
      className={cn(stls.container, {
        [stls.aside]: aside,
        [stls.tooltip]: !aside,
        [stls.flexend]: flexend
      })}>
      {list?.map(({ label, value }) => (
        <Fragment key={value}>
          <li className={stls.studyField} onClick={close || undefined}>
            <BtnField
              smallText={smallText}
              orang={orang}
              href={`${getRouteByType(ofType)}/${value}`}
              aside={aside}
              slug={value}>
              {label}
            </BtnField>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default StudyFieldsOnMain
