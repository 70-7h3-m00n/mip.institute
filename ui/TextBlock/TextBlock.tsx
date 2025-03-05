import React from 'react'
import stls from './TextBlock.module.sass'
import Link from 'next/link'

interface TextBlockProps {
  isLinkSide?: boolean
  isLink?: boolean
  textBlock: {
    title?: string
    itemProp?: string
    text?: string
    list?: {
      title?: string
      rows: string[]
    }
    links?: {
      val?: string
      href?: string
    }[]
  }
}

const TextBlock: React.FC<TextBlockProps> = ({
  textBlock,
  isLinkSide = false,
  isLink = false
}) => {
  return (
    <div
      className={stls.container}
      {...(textBlock?.itemProp ? { itemProp: textBlock?.itemProp } : {})}>
      <p className={stls.title}>{textBlock?.title}</p>
      <p>{textBlock?.text}</p>
      {textBlock.list?.title}
      <ul>
        {textBlock.list?.rows.map((el, idx) => (
          <li key={`${el}-${idx}`}>{el}</li>
        ))}
      </ul>
      {isLinkSide && (
        <ul>
          {textBlock.links?.map((el, idx) => (
            <li key={`${el}-${idx}`}>
              {el?.val}{' '}
              <Link
              // @ts-ignore
              href={el?.href} target='_blank' className={stls.link}>
                {el?.href}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isLink && (
        <ul>
          {textBlock.links?.map((el, idx) => (
            <li key={`${el}-${idx}`}>
              
              <Link
              // @ts-ignore 
              href={el?.href} target='_blank' className={stls.link}>
                {el?.val}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TextBlock
