import React from 'react'
import stls from './StudentStory.module.sass'
import { StoryData } from '../const'

interface Props {
  story: StoryData
  mobileNavigation?: React.ReactNode
}

const StudentStory: React.FC<Props> = ({ story, mobileNavigation }) => {
  return (
    <div className={stls.container}>
      <div className={stls.videoWrapper}>
        <iframe
          src={story.videoUrl}
          allow='autoplay; fullscreen; picture-in-picture; encrypted-media'
          title='Видео отзыв'></iframe>
      </div>
      {mobileNavigation && <div className={stls.mobileOnly}>{mobileNavigation}</div>}
      <div className={stls.textBlock}>
        <div className={stls.personInfo}>
          <p className={stls.name}>{story.name}</p>
          <p className={stls.course}>{story.course}</p>
        </div>

        {story.sections.map((section, index) => (
          <div className={stls.section} key={index}>
            <p className={stls.label}>{section.label}</p>
            <p className={stls.value}>{section.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentStory
