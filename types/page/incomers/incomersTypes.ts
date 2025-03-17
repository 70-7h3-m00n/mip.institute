interface ParagraphItem {
  text: string
  type: 'text'
}

interface ListItem {
  type: 'list-item'
  text: string
  children: ParagraphItem[]
}

interface ParagraphBlock {
  type: 'paragraph'
  children: ParagraphItem[]
}

export interface ListBlock {
  type: 'list'
  format: 'unordered' | 'ordered'
  children: ListItem[]
}

type TextBlock = ParagraphBlock | ListBlock

type TextItemType = {
  children: Array<{ text: string }>
}

type ItemType = {
  id: number
  text: TextItemType[]
}

export interface DataItem {
  id: number
  img: { url: string }
  text: TextBlock[]
}

export interface Image {
  id: number
  documentId: string
  url: string
  width: number
  height: number
}

export interface ImageWithFormats extends Image {
  name: string
  alternativeText: string | null
  caption: string | null
  formats: {
    small?: Image
    medium?: Image
    thumbnail?: Image
  }
  hash: string
  ext: string
  mime: string
  size: number
  previewUrl: string | null
  provider: string
  provider_metadata: {
    public_id: string
    resource_type: string
  }
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Slide {
  id: number
  files: Image[]
}

export interface Carousel {
  id: number
  slide: Slide
}

export interface AdventureCard {
  id: number
  text: ItemType[]
  carousel: Carousel
}

export interface IncomersInfo {
  id: number
  text: ItemType[]
  img: Image
}

export interface MeetInstitute extends DataItem {}

export interface StudyProcess extends DataItem {}

export interface ProgramSelection extends DataItem {
  img: ImageWithFormats
}

export interface CareerCenter {
  id: number
  text: ItemType[]
  img: Image
}

export interface Incomers {
  id: number
  documentId: string
  title: ItemType[]
  programForRequest: ItemType
  createdAt: string
  updatedAt: string
  publishedAt: string
  incomersInfo: IncomersInfo
  AdventureCards: AdventureCard[]
  MeetInstitute: MeetInstitute[]
  studyProcess: StudyProcess[]
  programSelectionsTop: ProgramSelection[]
  programSelectionsBottom: ProgramSelection[]
  ourPossibilities: DataItem[]
  careerCenter: CareerCenter
}
