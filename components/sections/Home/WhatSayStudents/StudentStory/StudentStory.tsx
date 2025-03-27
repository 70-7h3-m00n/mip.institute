import React from 'react'
import stls from './StudentStory.module.sass'
import { TReview } from '@/types/index'

interface Props {
  story: TReview
  mobileNavigation?: React.ReactNode
}

const StudentStory: React.FC<Props> = ({ story, mobileNavigation }) => {
  return (
    <div className={stls.container}>
      <div className={stls.videoWrapper}>
        <iframe
          src={story.videoId}
          allow='autoplay; fullscreen; picture-in-picture; encrypted-media'
          title='Видео отзыв'></iframe>
      </div>
      {mobileNavigation && <div className={stls.mobileOnly}>{mobileNavigation}</div>}
      <div className={stls.textBlock}>
        <div className={stls.personInfo}>
          <p className={stls.name}>{story.name}</p>
          <p className={stls.course}>{story.program}</p>
        </div>
        <div className={stls.section}>
          <p className={stls.label}>Цели:</p>
          <p className={stls.value}>{story.goal}</p>
        </div>
        <div className={stls.section}>
          <p className={stls.label}>Точка А:</p>
          <p className={stls.value}>{story.pointA}</p>
        </div>

        <div className={stls.section}>
          <p className={stls.label}>Точка Б:</p>
          <p className={stls.value}>{story.pointB}</p>
        </div>
      </div>
    </div>
  )
}

export default StudentStory
