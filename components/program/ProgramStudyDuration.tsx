import { getCasedRuYearString, getCasedRuMonthString } from '@/helpers/index'

type TypeProgramStudyDuration = {
  studyMounthsDuration: number
  monthsOnly?: boolean
}

const ProgramStudyDuration = ({
  studyMounthsDuration,
  monthsOnly
}: TypeProgramStudyDuration) => {
  const years = Math.floor(+studyMounthsDuration / 12)
  const months = +studyMounthsDuration - 12 * years

  return (
    <>
      {monthsOnly ? (
        getCasedRuMonthString({ months: studyMounthsDuration })
      ) : (
        <>
          {getCasedRuYearString({ years })} {getCasedRuMonthString({ months }) }
        </>
      )}
    </>
  )
}

export default ProgramStudyDuration
