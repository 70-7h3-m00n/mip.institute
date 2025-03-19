import { TypeLibPrograms } from '@/types/index'
import TypeLibBachelors from '@/types/lib/bachelors/TypeLibBachelors'
import TypeLibPracticalTrainings from '@/types/lib/practicalTrainings/TypeLibPracticalTrainings'

type TypePageProgramsPropsQuery = {
  readonly programs: TypeLibPrograms | undefined
  readonly bachelors: any | null //TODO разобраться с типизацией
  readonly practicalTrainings: any | null //TODO разобраться с типизацией
}

export default TypePageProgramsPropsQuery
