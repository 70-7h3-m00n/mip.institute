'use client'

import React from 'react'
import stls from './PracticalOrientatedProgram.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import IconPracticeTagPointerMob from './IconPracticeTagPointerMob'
import IconPracticeTagPointer from './IconPracticeTagPointer'

const desktopImages = Array.from(
  { length: 4 },
  (_, i) => `/assets/imgs/redesignedProgram/PracticalOrientatedProgram/${i + 1}.png`
)

const mobileImages = Array.from(
  { length: 4 },
  (_, i) => `/assets/imgs/redesignedProgram/PracticalOrientatedProgram/Mob${i + 1}.png`
)

const PracticalOrientatedProgram = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const images = isMobileAndTabletLayout ? mobileImages : desktopImages
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.header}>
          <div className={stls.heading}>
            <h2 className={stls.title}>
              У нас <span className={stls.accent}>практико–ориентированная</span> <br />
              программа обучения
            </h2>
            <p className={stls.description}>
              Практика – ключ к результатам. Мы убеждены, что теория без практики не дает желаемых
              результатов. Именно поэтому в нашу программу включено несколько видов практической
              работы с разными целями
            </p>
          </div>

          <div className={stls.tagWrapper}>
            <span className={stls.tag}>644 часа практики</span>
            <span className={stls.icon}>
              {isMobileAndTabletLayout ? <IconPracticeTagPointerMob /> : <IconPracticeTagPointer />}
            </span>
          </div>
        </div>
        {isMobileAndTabletLayout ? (
          <div className={stls.blockMain}>
            {images.map((src, i) => (
              <div className={stls.imageContainer} key={i}>
                <Image
                  src={src}
                  alt={`Изображение практики ${i + 1}`}
                  width={370}
                  height={370}
                  className={stls.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              navigation={{
                prevEl: '#practicalNavBtns button:first-child',
                nextEl: '#practicalNavBtns button:last-child'
              }}
              slidesPerView={isMobileAndTabletLayout ? 1 : 3}
              className={stls.containerSwiper}>
              {images.map((src, index) => (
                <SwiperSlide key={index}>
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
              <div id='practicalNavBtns'>
                <ArrowNavigation bgColor='#FF8F52' arrowColor='#FFF' size='medium' />
              </div>
            </div>
          </>
        )}
      </Wrapper>
    </section>
  )
}

export default PracticalOrientatedProgram
