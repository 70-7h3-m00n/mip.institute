'use client'

import React from 'react'
import stls from './InsideProgram.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const desktopImages = Array.from(
  { length: 8 },
  (_, i) => `/assets/imgs/redesignedProgram/InsideProgram/${i + 1}.png`
)

const mobileImages = Array.from(
  { length: 8 },
  (_, i) => `/assets/imgs/redesignedProgram/InsideProgram/Mob${i + 1}.png`
)
const InsideProgram = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const images = isMobileAndTabletLayout ? mobileImages : desktopImages
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span>В программу обучения входят:</span>
        </h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          slidesPerView={'auto'}
          centeredSlides={true}
          navigation={{
            prevEl: '#insideProgramNavBtns button:first-child',
            nextEl: '#insideProgramNavBtns button:last-child'
          }}
          className={stls.containerSwiper}>
          {images.map((src, index) => (
            <SwiperSlide key={index} className={stls.slide}>
              <div className={stls.card}>
                <Image
                  src={src}
                  alt={`Инсайды программы ${index + 1}`}
                  className={stls.image}
                  width={370}
                  height={370}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={stls.navigation}>
          <div id='insideProgramNavBtns'>
            <ArrowNavigation bgColor='#FFF' arrowColor='#212121' size='medium' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default InsideProgram
