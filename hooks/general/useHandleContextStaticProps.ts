import { useContext, useEffect } from 'react'
import { ContextStaticProps } from '@/context/index'
import { filterProgramsByType, getStudyFields } from '@/helpers/index'

type THandleContextStaticPropsProps = {
  program?: any
  seminar?: any
  programs?: any[]
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
    //@ts-ignore
      programs?.length > 0
        ? filterProgramsByType({ programs, type: 'course' })
        : []
    const professions =
    //@ts-ignore
      programs?.length > 0
        ? filterProgramsByType({ programs, type: 'profession' })
        : []
    setSeminar(seminar || null)
    setProgram(program || null)
    setBachelor(bachelor || null)
    setPracticalTrainings(practicalTrainings || null)
    setPrograms(programs || null)
    setCourses(courses || null)
    setProfessions(professions || null)
//@ts-ignore
    setStudyFields(programs?.length > 0 ? getStudyFields(programs) : [])

    setStudyFieldsProfessions(
      //@ts-ignore
      programs?.length > 0 ? getStudyFields(professions) : []
    )
    //@ts-ignore
    setStudyFieldsCourses(programs?.length > 0 ? getStudyFields(courses) : [])

    setCurProgramsType(curProgramsType || null)
    setCurProgramsStudyFieldSlug(curProgramsStudyFieldSlug || null)
  }, [curProgramsStudyFieldSlug, curProgramsType, program, programs, seminar, bachelor, practicalTrainings])
}

export default useHandleContextStaticProps
