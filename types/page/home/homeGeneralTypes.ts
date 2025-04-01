// Общий тип для Program (courses, professions, shorts)
export interface ProgramGeneralType {
  title: string
  slug: string
  studyField?: string
  studyFieldSlug?: string
  type: 'Course' | 'Profession' | 'ShortTerm' // Тип программы
  typeLabel?: string
  studyMounthsDuration?: number
  studyHours?: number
  shortDescription?: string
  tag?: Tag
  __typename: 'Program'
}

export enum Tag {
  Updated = 'updated',
  Popular = 'popular'
}

export enum ProgramFilter {
  Popular = 'popular',
  Professions = 'professions',
  Courses = 'courses',
  Bachelor = 'bachelor',
  Shorts = 'shorts',
  PracticalTrainings = 'practicalTrainings'
}

export type EducationalProgram = BachelorType | ProgramGeneralType | PracticalTrainingType

type Image = {
  url: string
  width: number
  height: number
}

export type BachelorType = {
  slug: string
  offlineFullPrice: number
  heroPicture: Image
  educationCode: string
  title: string
  admissionDate: string
  minTime: string
  maxTime: string
  shortDescription?: string
  __typename: 'Bachelor'
}

export type PracticalTrainingType = {
  title: string
  duration: string
  slug: string
  price: number
  heroPicture: Image
  shortDescription?: string
  __typename: 'PracticalTraining'
}

type Review = {
  id: string
  name: string
  profession: string
  title: string
  story: string
  createdAt: string
  picture: Image
  index_number: { idx: number }
}

export type ProgramsDataQueryResult = {
  program: null
  programs: ProgramGeneralType[]
  reviews: Review[]
  courses: ProgramGeneralType[]
  professions: ProgramGeneralType[]
  studyFields: string[]
  studyFieldsProfessions: string[]
  studyFieldsCourses: string[]
  curProgramsType: null
  curProgramsStudyFieldSlug: null
  searchTerm: null
  filteredPrograms: ProgramGeneralType[]
  blogs: any[]
  seminar: null
  bachelor: BachelorType[]
  practicalTrainings: PracticalTrainingType[]
}
