'use client'

import React from 'react'
import stls from './InsideProgram.module.sass'
import Wrapper from '@/ui/Wrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import { slides, slidesMob } from './const'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const SlideCard = ({ slide }: { slide: (typeof slides)[number] }) => (
  <div className={stls.card}>
    <Image src={slide.img} alt={slide.title} className={stls.image} width={295} height={176} />
    <div className={stls.text}>
      <div className={stls.titleCard}>
        <span style={{ whiteSpace: 'pre-line' }}>
          {slide.title}
          {slide.hours && <span className={stls.hours}> {slide.hours}</span>}
        </span>
        {slide.note && <span className={stls.note}>{slide.note}</span>}
      </div>

      {slide.description.length > 0 && (
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
      )}
    </div>
  </div>
)

const InsideProgram = () => {
  const isMobile = useBetterMediaQuery('(max-width: 800px)')
  const currentSlides = isMobile ? slidesMob : slides
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
          {currentSlides.map((slide, i) => (
            <SwiperSlide key={i} className={stls.slide}>
              <SlideCard slide={slide} />
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
