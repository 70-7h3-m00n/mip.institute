'use client'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Wrapper from '@/ui/Wrapper'
import stls from './Carousel.module.sass'
import CarouselCardNext from '../CarouselCards/CarouselCard'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { useEffect, useRef } from 'react'
import { Swiper as SwiperType } from 'swiper'

const Carousel = ({ heroCarousel }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef<any>(null)
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current
      swiperRef.current.swiper.navigation.init()
      swiperRef.current.swiper.navigation.update()
    }
  }, [])

  return (
    <Wrapper>
      <div >
        <h2 className={stls.title}>Особенности обучения в МИП</h2>
        <Swiper
        ref={swiperRef}
          slidesPerView={isMobileAndTabletLayout ? 1: 3}
          initialSlide={2}
          centeredSlides={true}
          loop={true}
          // navigation={true}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: '.custom-next-button'
          }}
          pagination={
            isMobileAndTabletLayout
              ? { clickable: true, dynamicBullets: true }
              : false
          }
          
          className={stls.container}>
          {heroCarousel.map(card => (
            <SwiperSlide key={card.id} className={`${stls.slide} swiper-slide`}>
              {({ isNext }) => (
                <CarouselCardNext isNext={isNext} card={card} isMobile={isMobileAndTabletLayout}/>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button ref={prevRef} className={stls.btnPrev}>Назад</button>
        <button ref={nextRef} className={stls.btnPrev}>Назад</button>
      </div>
    </Wrapper>
  )
}

export default Carousel
