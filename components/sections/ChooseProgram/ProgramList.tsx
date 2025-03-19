import routes from '@/config/routes'
import styles from '@/styles/components/sections/ChooseProgram/ProgramList.module.sass'
import { studyFieldsCourses, studyFieldsProfessions } from 'constants/studyFieldsOnMain'
import { useState } from 'react'
import Program from './Program'

type Props = {
  ofType: string | null
  currentType?: string | null
}

export default function ProgramList({ ofType, currentType }: Props) {
  const list = ofType === 'course' ? studyFieldsCourses : studyFieldsProfessions

  const [openListIndex, setOpenListIndex] = useState(-1)

  return (
    <div className={styles.program}>
      {list.map(({ label, value }, index) => (
        <Program
          ofType={ofType}
          index={index}
          slug={value}
          key={`${value}-${index}`}
          label={label}
          href={`${ofType === 'course' ? routes.front.courses : routes.front.professions}/${value}`}
          openListIndex={openListIndex} // Передаем состояние открытого списка
          setOpenListIndex={setOpenListIndex}
          showIcon={ofType !== 'course'}
        />
      ))}
    </div>
  )
}
