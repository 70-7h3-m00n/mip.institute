type TypeLibBachelors = {
  title?: string | null
} | null

export default TypeLibBachelors

export type Bachelor = {
  __typename: 'Bachelor'
  educationCode: string
  title: string
  minTime: number
  maxTime: number
  admissionDate: string
  slug: string
  heroPicture: {
    __typename: 'UploadFile'
    url: string
    width: number
    height: number
  }
}

export type Program = {
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
  heroPicture: {
    __typename: 'UploadFile'
    url: string
    width: number
    height: number
  }
}

export type PracticalTraining = {
  __typename: 'PracticalTraining'
  title: string
  subtitle: string
  duration: string
  slug: string
  heroPicture: {
    __typename: 'UploadFile'
    url: string
    width: number
    height: number
  }
}
