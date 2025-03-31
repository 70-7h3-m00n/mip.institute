'use client'

import React, { useState, useEffect } from 'react'
import stls from './MIPTeachersAsAuthors.module.sass'
import Wrapper from '@/ui/Wrapper'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Image from 'next/image'
import { TImage } from '@/types/index'
// import { SwiperSlide } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
interface MIPTeachersAsAuthorsProps {
  imgs: TImage[]
}

const MIPTeachersAsAuthors = ({ imgs }: MIPTeachersAsAuthorsProps) => {
  const isMobile = useBetterMediaQuery('(max-width: 480px)')
  const isTabletOrLaptop = useBetterMediaQuery('(max-width: 1024px)')

  const [startIndex, setStartIndex] = useState(0)
  const [cardsPerSlide, setCardsPerSlide] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const newCardsPerSlide = isMobile ? 1 : isTabletOrLaptop ? 2 : 3
    setCardsPerSlide(newCardsPerSlide)
    setStartIndex(0)
  }, [isMobile, isTabletOrLaptop])

  const handleNext = () => {
    if (startIndex + cardsPerSlide < imgs.length) {
      setIsAnimating(true)
      setTimeout(() => {
        setStartIndex(prev => prev + cardsPerSlide)
        setIsAnimating(false)
      }, 100)
    }
  }

  const handlePrev = () => {
    if (startIndex - cardsPerSlide >= 0) {
      setStartIndex(prev => prev - cardsPerSlide)
    }
  }

  const endIndex = startIndex + cardsPerSlide
  const visibleCards = imgs.slice(startIndex, endIndex)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span>Преподаватели МИП выступают в качестве авторов статей и экспертов в СМИ</span>
        </h2>

        <div className={stls.navigation}>
          <div className={stls.text}>
            Подкасты и публикации от преподавателей института регулярно появляются в крупных
            изданиях
          </div>
          {/* <ArrowNavigation
            onPrev={handlePrev}
            onNext={handleNext}
            bgColor='#FFF'
            arrowColor='#212121'
            disabledPrev={startIndex === 0}
            disabledNext={endIndex >= imgs.length}
            size='medium'
          /> */}
        </div>

        {/* <div className={`${stls.cards} ${isAnimating ? stls.fade : ''}`}>
          {visibleCards.map(card => (
            <div key={card.id} className={stls.card}>
              <Image
                src={card.url}
                alt='Публикации журналов'
                className={stls.image}
                width={isMobile ? 345 : 370}
                height={isMobile ? 382 : 407}
              />
            </div>
          ))}
        </div> */}
        <Swiper
        // ref={swiperRef}
        slidesPerView={ 3}
        // spaceBetween={10} // Добавляем небольшой отступ между слайдами
        initialSlide={2}
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation={{
        //   prevEl: prevRef.current,
        //   nextEl: nextRef.current // Добавляем nextEl сюда
        }}
        // pagination={
        //   isMobileAndTabletLayout
        //     ? {
        //         clickable: true,
        //         dynamicBullets: true,
        //         bulletActiveClass: stls.bulletViolet,
        //         horizontalClass: stls.pagination
        //       }
        //     : false
        // }
        className={stls.container}
      >
        {imgs.map(card => (
          <SwiperSlide key={card.id} className={`${stls.slide} swiper-slide`}>
            <div key={card.id} className={stls.card}>
              <Image
                src={card.url}
                alt='Публикации журналов'
                className={stls.image}
                width={isMobile ? 345 : 370}
                height={isMobile ? 382 : 407}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <div className={stls.navigationMob}>
          <ArrowNavigation
            onPrev={handlePrev}
            onNext={handleNext}
            bgColor='#FFF'
            arrowColor='#212121'
            disabledPrev={startIndex === 0}
            disabledNext={endIndex >= imgs.length}
            size='medium'
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default MIPTeachersAsAuthors
