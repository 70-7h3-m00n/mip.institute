type TypeProgramStudyDuration = {
  studyMounthsDuration: number
  studyMounthsDurationStandart: number
}

const ProgramStudyDurationTarifs = ({
  studyMounthsDuration,
  studyMounthsDurationStandart
}: TypeProgramStudyDuration) => {
  return (
    <>
      {`${studyMounthsDuration} / ${studyMounthsDurationStandart} мес`}
    </>
  )
}

export default ProgramStudyDurationTarifs
