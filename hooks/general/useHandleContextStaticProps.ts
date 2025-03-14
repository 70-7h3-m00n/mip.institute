import { useContext, useEffect } from 'react'
import { ContextStaticProps } from '@/context/index'
import { filterProgramsByType, getStudyFields } from '@/helpers/index'
import { TypeLibPrograms } from '@/types/index'

type THandleContextStaticPropsProps = {
  program?: any
  seminar?: any
  programs?: TypeLibPrograms | null
  curProgramsType?: string | null
  curProgramsStudyFieldSlug?: string | null
  tickets_quantity?: number
  bachelor?: any
  practicalTrainings?: any
}

const useHandleContextStaticProps = ({
  program,
  programs,
  seminar,
  curProgramsType,
  curProgramsStudyFieldSlug,
  bachelor,
  practicalTrainings,
  tickets_quantity
}: THandleContextStaticPropsProps) => {
  const {
    setSeminar,
    setProgram,
    setPrograms,
    setCourses,
    setProfessions,
    setStudyFields,
    setStudyFieldsProfessions,
    setStudyFieldsCourses,
    setCurProgramsType,
    setCurProgramsStudyFieldSlug,
    setBachelor,
    setPracticalTrainings
  } = useContext(ContextStaticProps)

  useEffect(() => {
    const courses =
      programs && programs?.length > 0 ? filterProgramsByType({ programs, type: 'course' }) : []
    const professions =
      programs && programs?.length > 0 ? filterProgramsByType({ programs, type: 'profession' }) : []
    setSeminar(seminar || null)
    setProgram(program || null)
    setBachelor(bachelor || null)
    setPracticalTrainings(practicalTrainings || null)
    setPrograms(programs || null)
    setCourses(courses || null)
    setProfessions(professions || null)
    setStudyFields(programs && programs?.length > 0 ? getStudyFields(programs) : [])

    setStudyFieldsProfessions(programs && programs?.length > 0 ? getStudyFields(professions) : [])
    setStudyFieldsCourses(programs && programs?.length > 0 ? getStudyFields(courses) : [])

    setCurProgramsType(curProgramsType || null)
    setCurProgramsStudyFieldSlug(curProgramsStudyFieldSlug || null)
  }, [
    curProgramsStudyFieldSlug,
    curProgramsType,
    program,
    programs,
    seminar,
    bachelor,
    practicalTrainings,
    setSeminar,
    setProgram,
    setBachelor,
    setPracticalTrainings,
    setPrograms,
    setCourses,
    setProfessions,
    setStudyFields,
    setStudyFieldsProfessions,
    setStudyFieldsCourses,
    setCurProgramsType,
    setCurProgramsStudyFieldSlug
  ])
}

export default useHandleContextStaticProps
