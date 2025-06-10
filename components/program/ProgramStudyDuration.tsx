import { getCasedRuYearString, getCasedRuMonthString } from '@/helpers/index'

type TypeProgramStudyDuration = {
  studyMounthsDuration: number
}

const ProgramStudyDuration = ({
  studyMounthsDuration,
}: TypeProgramStudyDuration) => {

  return (
    <>
      {studyMounthsDuration} мес
    </>
  )
}

export default ProgramStudyDuration
