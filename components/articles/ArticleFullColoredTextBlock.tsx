import React from 'react'
import { DocumentContent } from './ArticleContentLinks'

type ArticleFullColoredTextBlockType = {
  props: {
    text?: DocumentContent
    textColor?: string
  }
}

const ArticleFullColoredTextBlock = ({ props }: ArticleFullColoredTextBlockType) => {
  return (
    <>
      {props?.text?.map((el, i) => (
        <p key={i}>
          {el.children.map(el => (
            <span
              key={el.text}
              style={{
                fontWeight: el.bold ? 500 : 'normal',
                color: el.italic ? props.textColor : 'inherit'
              }}>
              {el.text}
            </span>
          ))}
        </p>
      ))}
    </>
  )
}

export default ArticleFullColoredTextBlock
