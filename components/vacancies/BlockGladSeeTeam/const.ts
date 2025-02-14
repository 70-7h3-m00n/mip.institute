export type RichTextChild = {
  text?: string
  type: string
  url?: string
  children?: RichTextChild[]
}

export type RichTextParagraph = {
  type: 'paragraph'
  children: RichTextChild[]
}

export const parseRichTextData = (data: { text: RichTextParagraph[]; img?: string | null }) => {
  if (!data) return null

  const paragraphs = data.text || []

  // Заголовок — первый параграф
  const title = paragraphs[0]?.children[0]?.text || ''

  // Описание — все параграфы, кроме первого и ссылок
  const description = paragraphs
    .slice(1, -1)
    .map(p => p.children.map(c => c.text).join(' '))
    .join('\n')

  // Достаем ссылку, если есть
  const linkObject = paragraphs.find(p => p.children.some(c => c.type === 'link'))
  const link = linkObject ? linkObject.children.find(c => c.type === 'link')?.url : null

  const linkText = linkObject
    ? linkObject.children.find(c => c.type === 'link')?.children[0]?.text
    : 'Перейти'

  return { title, description, link, linkText }
}
