type TypeLibPracticalTrainings = {
  title?: string | null
} | null

export default TypeLibPracticalTrainings

// Типизация программ обучения
export interface HeroPicture {
  __typename: 'UploadFile'
  url: string
  width: number
  height: number
}

export interface Program {
  __typename: 'Program'
  id: string
  title: string
  slug: string
  studyField: string
  studyFieldSlug: string
  type: string
  typeLabel: string
  studyMounthsDuration: number
  studyHours: number
  price: number
  isPopular: boolean
  courseOpened: boolean
  heroPicture: HeroPicture
}

export interface PracticalTraining {
  __typename: 'PracticalTraining'
  title: string
  subtitle?: string
  duration: string
  slug: string
  heroPicture: HeroPicture
}

export interface Bachelor {
  __typename: 'Bachelor'
  educationCode: string
  title: string
  minTime: number
  maxTime: number
  admissionDate: string
  slug: string
  heroPicture: HeroPicture
}
