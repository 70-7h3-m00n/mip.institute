'use client'

import React, { useState } from 'react'
import stls from './WhatSayStudents.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import StudentStory from './StudentStory/StudentStory'
import { TReview } from '@/types/index'
interface WhatSayStudentsProps {
  data: TReview[]
}

const WhatSayStudents = ({ data }: WhatSayStudentsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(data, 'data')

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % data.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + data.length) % data.length)
  }

  const linkImage = [
    'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579299/attractive_girl_portrait_white_shirt_1_c6c7efff26.jpg',
    'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579264/medium_shot_woman_posing_74e7876ad9.jpg',
    'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579224/close_up_portrait_tender_lovely_woman_with_curly_hair_nude_make_up_posing_camera_with_lovely_smile_brunette_woman_brown_shirt_feels_good_weekend_home_comfort_concept_9928b287be.jpg',
    'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579316/image_2441_3e64fbc153.jpg',
    'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1738579299/attractive_girl_portrait_white_shirt_1_c6c7efff26.jpg'
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.desktop}>
            <span className={stls.left}>Что говорят о нас студенты и выпускники, </span>
            <span className={stls.right}>успехами которых мы гордимся, как своими</span>
          </span>
          <span className={stls.mobile}>
            Что говорят о нас студенты и выпускники, успехами которых мы гордимся, как своими
          </span>
        </h2>

        <div className={stls.navigation}>
          <ArrowNavigation
            onPrev={handlePrev}
            onNext={handleNext}
            bgColor='#855EDF'
            arrowColor='#FFF'
            disabledPrev={currentIndex === 0}
            disabledNext={currentIndex === data.length - 1}
            size='medium'
          />
          <div className={stls.imageGallery}>
            {linkImage.map((imageUrl, index) => (
              <div
                key={index}
                className={stls.imageWrapper}
                style={{ zIndex: linkImage.length - index }}>
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  width={69}
                  height={69}
                  className={stls.image}
                />
              </div>
            ))}
          </div>
        </div>
        <StudentStory
          story={data[currentIndex]}
          mobileNavigation={
            <div className={stls.mobileNav}>
              <ArrowNavigation
                onPrev={handlePrev}
                onNext={handleNext}
                bgColor='#855EDF'
                arrowColor='#FFF'
                disabledPrev={currentIndex === 0}
                disabledNext={currentIndex === data.length - 1}
                size='medium'
              />
            </div>
          }
        />
      </Wrapper>
    </section>
  )
}

export default WhatSayStudents
