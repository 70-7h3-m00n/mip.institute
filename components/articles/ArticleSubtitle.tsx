import React from 'react'
import { DocumentContent } from './ArticleContentLinks'

export type ArticleSubtitleType = {
  props: {
    subtitle?: DocumentContent
    subtitleSlug?: string
    color: string
  }
}

const ArticleSubtitle = ({ props }: ArticleSubtitleType) => {
  const { subtitle, subtitleSlug, color } = props

  return (
    <h2 id={subtitleSlug}>
      {subtitle?.[0].children.map(el => (
        // @ts-ignore
          <span key={el.text} style={{ color: el.italic && color }}>{el.text}</span>
      ))}
    </h2>
  )
}

export default ArticleSubtitle
