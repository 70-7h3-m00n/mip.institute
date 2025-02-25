interface ParagraphItem {
  text: string
  type: 'text'
}

interface ListItem {
  type: 'list-item'
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

export interface DataItem {
  id: number
  img: { url: string }
  text: TextBlock[]
}
