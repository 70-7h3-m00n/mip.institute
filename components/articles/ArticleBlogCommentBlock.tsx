import stls from '@/styles/components/articles/ArticleBlogCommentBlock.module.sass'
import React from 'react'
import { DocumentContent } from './ArticleContentLinks'

type ArticleBlogCommentBlockType = {
  props: {
    text?: DocumentContent
    lineColor: string
  }
}

const ArticleBlogCommentBlock = ({ props }: ArticleBlogCommentBlockType) => {
  const { text, lineColor } = props

  return (
    <div
      style={{ borderLeft: `2px solid ${lineColor}` }}
      className={stls.commentBlock}>
      {text?.map((el, i) => (
        <p key={i}>
          {el.children.map(el => (
            <span
              key={el.text}
              style={{
                // @ts-ignore
                fontWeight: el.bold && 500,
              }}>
              {el.text}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default ArticleBlogCommentBlock
