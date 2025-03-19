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

export const parseRichTextData = (data?: { text?: RichTextParagraph[]; img?: string | null }) => {
  if (!data || !data.text) return null // Проверяем, есть ли `data` и `data.text`

  const paragraphs = data.text || []

  // Безопасный доступ к первому параграфу
  const title = paragraphs[0]?.children?.[0]?.text || ''

  // Описание — все параграфы, кроме первого и ссылок (с дополнительными проверками)
  const description = paragraphs
    .slice(1)
    .map(p => p.children?.map(c => c.text || '').join(' ') || '')
    .join('\n')

  // Достаем ссылку, если есть (с проверкой `children`)
  const linkObject = paragraphs.find(p => p.children?.some(c => c.type === 'link'))
  const link = linkObject?.children?.find(c => c.type === 'link')?.url || null

  // Достаем текст ссылки (с дополнительными проверками)
  const linkText =
    linkObject?.children?.find(c => c.type === 'link')?.children?.[0]?.text || 'Перейти'

  return { title, description, link, linkText }
}
