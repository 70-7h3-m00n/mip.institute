'use client'

import React from 'react'
import stls from './Bonuses.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const desktopImages = Array.from(
  { length: 8 },
  (_, i) => `/assets/imgs/redesignedProgram/Bonuses/${i + 1}.png`
)

const mobileImages = Array.from(
  { length: 8 },
  (_, i) => `/assets/imgs/redesignedProgram/Bonuses/Mob${i + 1}.png`
)
const Bonuses = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const images = isMobileAndTabletLayout ? mobileImages : desktopImages
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span>Бонусы программы</span>
        </h2>

        <Swiper
          modules={[Navigation]}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          navigation={{
            prevEl: '#bonusesNavBtns button:first-child',
            nextEl: '#bonusesNavBtns button:last-child'
          }}
          className={stls.containerSwiper}>
          {images.map((src, index) => (
            <SwiperSlide key={index} className={stls.slide}>
              <div className={stls.card}>
                <Image
                  src={src}
                  alt={`Бонус программы ${index + 1}`}
                  className={stls.image}
                  width={370}
                  height={370}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={stls.navigation}>
          <div id='bonusesNavBtns'>
            <ArrowNavigation bgColor='#855EDF' arrowColor='#FFF' size='medium' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Bonuses
