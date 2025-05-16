'use client'

import { useState } from 'react'
import stls from './ReviewCard.module.sass'
import Image from 'next/image'

type Props = {
  name: string
  text: string
  positionTags: string[]
  avatar: string
}

const ReviewCard = ({ name, text, positionTags, avatar }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const previewLength = 200

  const displayText =
    !isExpanded && text.length > previewLength ? text.slice(0, previewLength) + '...' : text

  return (
    <div className={stls.card}>
      <div className={stls.header}>
        <Image src={avatar} alt={name} width={133} height={133} className={stls.avatar} />
        <div className={stls.tags}>
          {positionTags.map((tag, i) => (
            <span key={i} className={stls.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p className={stls.name}>{name}</p>
      <p className={stls.text}>{displayText}</p>

      {text.length > previewLength && (
        <button className={stls.link} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Скрыть' : 'Читать полностью'}
        </button>
      )}
    </div>
  )
}

export default ReviewCard
