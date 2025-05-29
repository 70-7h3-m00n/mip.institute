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
import { slides } from './const'

const SlideCard = ({ slide }: { slide: (typeof slides)[number] }) => (
  <div className={stls.card}>
    <Image src={slide.img} alt={slide.title} className={stls.image} width={295} height={176} />
    <div className={stls.text}>
      <div className={stls.titleCard}>
        <span>
          {slide.title} – <span className={stls.hours}>{slide.hours}</span>
        </span>
        <span className={stls.note}>{slide.note}</span>
      </div>

      <p className={stls.desc}>
        {slide.description.map((part, i) => (
          <React.Fragment key={i}>
            {part.type === 'bold' ? (
              <strong style={{ whiteSpace: 'pre-line' }}>{part.value}</strong>
            ) : (
              <span style={{ whiteSpace: 'pre-line' }}>{part.value}</span>
            )}
          </React.Fragment>
        ))}
      </p>
    </div>
  </div>
)

const PracticalOrientatedProgram = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 770px)')
  const isMobile = useBetterMediaQuery('(max-width: 430px)')
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
            {slides.map((slide, i) => (
              <SlideCard key={i} slide={slide} />
            ))}
          </div>
        ) : (
          <>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              initialSlide={2}
              slidesPerGroup={1}
              loop={true}
              slidesPerView={isMobile ? 1 : 'auto'}
              navigation={{
                prevEl: '#practicalNavBtns button:first-child',
                nextEl: '#practicalNavBtns button:last-child'
              }}
              className={stls.containerSwiper}>
              {slides.map((slide, i) => (
                <SwiperSlide key={i} className={stls.swiperSlide}>
                  <SlideCard slide={slide} />
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
