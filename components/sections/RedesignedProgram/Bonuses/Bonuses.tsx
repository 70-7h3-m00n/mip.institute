'use client'

import React from 'react'
import stls from './Bonuses.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import { bonusesSlides, bonusesSlidesMob } from './const'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const BonusCard = ({ item }: { item: (typeof bonusesSlides)[number] }) => (
  <div className={stls.card}>
    <div className={stls.text}>
      <p className={stls.titleCard} style={{ whiteSpace: 'pre-line' }}>
        {item.title}
      </p>
      <p className={stls.subtitle} style={{ whiteSpace: 'pre-line' }}>
        {item.subtitle}
      </p>
    </div>
    <Image src={item.img} alt={item.title} className={stls.image} width={370} height={250} />
  </div>
)

const Bonuses = () => {
  const isMobile = useBetterMediaQuery('(max-width: 800px)')
  const currentSlides = isMobile ? bonusesSlidesMob : bonusesSlides
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
          {currentSlides.map((item, index) => (
            <SwiperSlide key={index} className={stls.slide}>
              <BonusCard item={item} />
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
