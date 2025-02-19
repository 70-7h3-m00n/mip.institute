import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '@/styles/pages/JournalSlug.module.sass'
import { DocumentContent } from './ArticleContentLinks'

type ArticleFullColoredTextBlockType = {
  props: {
    text?: DocumentContent
    textColor?: string
  }
}

const ArticleFullColoredTextBlock = ({
  props
}: ArticleFullColoredTextBlockType) => {
  

  return (
    <>
    {props?.text?.map((el, i) => (
      <p key={i}>
      {el.children.map(el => (
        // @ts-ignore
        <span key={el.text} style={{ fontWeight: el.bold && 500, color: el.italic && props.textColor }}>{el.text}</span>
    ))}
    </p>
    ))}
      </>
  )
}

export default ArticleFullColoredTextBlock
