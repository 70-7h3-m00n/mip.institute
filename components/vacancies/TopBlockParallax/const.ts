export type ParagraphType = {
  type: 'paragraph'
  children: { text: string; type: 'text' | 'link'; url?: string; children?: { text: string }[] }[]
}

export type TopBlockDataType = {
  id: number
  title: string
  subtitle: ParagraphType[]
  button: ParagraphType[]
}

export type ParsedTopBlockDataType = {
  title: string
  description: string
  link: string | null
  linkText: string
}

export const parseTopBlockData = (data: TopBlockDataType): ParsedTopBlockDataType | null => {
  if (!data) return null

  const title = data.title || ''

  const description =
    data.subtitle?.map(p => p.children.map(c => c.text).join(' ')).join('\n') || ''

  const buttonObject = data.button.find(p => p.children.some(c => c.type === 'link'))

  const link = buttonObject ? buttonObject.children.find(c => c.type === 'link')?.url || null : null

  const linkText = buttonObject
    ? buttonObject.children.find(c => c.type === 'link')?.children?.[0]?.text || 'Перейти'
    : 'Перейти'

  return { title, description, link, linkText }
}

export const images = [
  {
    id: 1,
    xFactor: -55,
    yFactor: -45,
    width: 240,
    height: 240,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738580986/telegram_cloud_document_2_5226908665893643651_1_41a53db7be.jpg',
    scaleMobile: 1.1,
    scale: 1.3
  },
  {
    id: 2,
    xFactor: -65,
    yFactor: -75,
    width: 130,
    height: 130,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738581102/vacancies_hero2_0555571024.png',
    scaleMobile: 1.1,
    scale: 1.3
  },
  {
    id: 3,
    xFactor: 25,
    yFactor: 60,
    width: 100,
    height: 100,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738581101/vacancies_hero3_f356aef4fc.png',
    scaleMobile: 1.1,
    scale: 1.3
  },
  {
    id: 4,
    xFactor: 60,
    yFactor: 66,
    width: 250,
    height: 250,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738581103/vacancies_hero4_87f49102eb.jpg',
    scaleMobile: 1.1,
    scale: 1.3
  },
  {
    id: 5,
    xFactor: -55,
    yFactor: -45,
    width: 250,
    height: 250,
    src: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738581071/Group_2087330315_d610e633aa.png',
    scaleMobile: 1.5,
    scale: 2
  }
]
