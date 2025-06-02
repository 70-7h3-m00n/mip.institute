'use client'

import React from 'react'
import stls from './CoursePreviewVideo.module.sass'
import Wrapper from '@/ui/Wrapper'

const CoursePreviewVideo = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Смотрите, что{' '}
          <span className={stls.highlight}>
            вас ждёт на курсе «Психологическое консультирование»
          </span>{' '}
          — только главное в формате видео
        </h2>
        <div className={stls.playerWrapper}>
          <iframe
            src='https://kinescope.io/embed/mFvJGyhUb1r1Tohp9XJjyB'
            allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'
            loading='lazy'
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default CoursePreviewVideo
