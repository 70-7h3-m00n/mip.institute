import { TypeLibPrograms, TypeLibReviews, TypeLibTeachers } from '@/types/index'

type TypePageHomePropsQuery = {
  readonly programs: TypeLibPrograms | null
  readonly reviews: TypeLibReviews | null
  readonly teachers: TypeLibTeachers | null
  readonly bachelors: any | null
  readonly practicalTrainings: any | null,
  readonly hasQueryParams: boolean
}

export default TypePageHomePropsQuery
