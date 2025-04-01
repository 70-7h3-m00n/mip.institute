'use client'

import React from 'react'
import stls from './WhatSayStudents.module.sass'
import Wrapper from '@/ui/Wrapper'
import { TReview } from '@/types/index'
import StudentStory from './StudentStory/StudentStory'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import ImageGallery from './ImageGallery/ImageGallery'
interface WhatSayStudentsProps {
  data: TReview[]
}

const WhatSayStudents = ({ data }: WhatSayStudentsProps) => {
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
          <div id='studentsNavDesktop'>
            <ArrowNavigation bgColor='#8F60FF' arrowColor='#FFF' size='medium' />
          </div>
          <ImageGallery />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          speed={600}
          navigation={{
            prevEl: '#studentsNavDesktop button:first-child, #studentsNavMobile button:first-child',
            nextEl: '#studentsNavDesktop button:last-child, #studentsNavMobile button:last-child'
          }}
          loop={true}>
          {data.map((story, idx) => (
            <SwiperSlide key={idx}>
              <StudentStory
                story={story}
                mobileNavigation={
                  <div className={stls.mobileNav} id='studentsNavMobile'>
                    <ArrowNavigation bgColor='#8F60FF' arrowColor='#FFF' size='medium' />
                  </div>
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  )
}

export default WhatSayStudents
