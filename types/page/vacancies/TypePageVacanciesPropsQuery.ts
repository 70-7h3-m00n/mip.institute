export type VacanciesCommonCardProps = {
  title: string
  quote: { id: number; title: string; body: string }[]
}

type Image = {
  url: string
  height: number
  width: number
}

export type Recruiter = {
  id: number
  name: string
  position: string
  quote: string
  image: Image
}
