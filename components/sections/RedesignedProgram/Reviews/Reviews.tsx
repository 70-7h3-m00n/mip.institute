'use client'

import React from 'react'
import stls from './Reviews.module.sass'
import Wrapper from '@/ui/Wrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import ReviewCard from './ReviewCard'
import { reviews } from './const'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const Reviews = () => {
  const isMobile = useBetterMediaQuery('(max-width: 430px)')
  return (
    <section className={stls.container} id='reviews'>
      <Wrapper>
        <h2 className={stls.title}>Отзывы наших студентов и выпускников</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          slidesPerView={isMobile ? 1 : 'auto'}
          centeredSlides={true}
          className={stls.containerSwiper}
          navigation={{
            prevEl: '#reviewNavBtns button:first-child',
            nextEl: '#reviewNavBtns button:last-child'
          }}>
          {reviews.map((review, i) => (
            <SwiperSlide key={i} className={stls.swiperSlide}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={stls.navigation}>
          <div id='reviewNavBtns'>
            <ArrowNavigation bgColor='#855EDF' arrowColor='#FFF' size='medium' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Reviews
