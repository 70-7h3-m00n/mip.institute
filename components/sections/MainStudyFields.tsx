import stls from '@/styles/components/sections/MainStudyFields.module.sass'
import cn from 'classnames'
import list from 'constants/mainStudyFields'
import Link from 'next/link'

type StudyFieldType =
  | 'course'
  | 'profession'
  | 'bachelor'
  | 'practicalTraining'
  | 'shortTerm'
  | undefined

type StudyFieldsProps = {
  currentType: StudyFieldType
  setCurrentType: React.Dispatch<React.SetStateAction<StudyFieldType>>
}

const MainStudyFields = ({ currentType, setCurrentType }: StudyFieldsProps) => {
  return (
    <ul className={stls.wrapper}>
      {list.map(({ label, href, programType, hoverSelect }, idx) => (
        <li
          key={idx}
          className={cn(stls.studyField, { [stls.active]: currentType === programType })}>
          <Link
            href={href}
            onMouseEnter={
              hoverSelect ? () => setCurrentType(programType as StudyFieldType) : undefined
            }
            className={cn(stls.mainFields, { [stls.active]: currentType === programType })}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MainStudyFields
