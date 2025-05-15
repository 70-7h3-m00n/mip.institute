// Интерфейс для изображения
export interface ImageType {
  id: number
  documentId: string
  url: string
  width: number
  height: number
}

// Интерфейс для партнера
export interface Partner {
  id: number
  documentId: string
  title: string
  subtitle: string
  type: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: ImageType
}

// Интерфейс для карточки
export interface PropsCard {
  partner: Partner
}

// Интерфейс для списка карточек
export interface PropsList {
  partners: Partner[]
}

// Интерфейс для блока наши партнеры
export interface PropsOurPartners {
  allTypes?: string[]
  currentType?: string
  onePartner: Partner[]
}

// Интерфейс для параметров страницы
export interface Params {
  type: string
}
