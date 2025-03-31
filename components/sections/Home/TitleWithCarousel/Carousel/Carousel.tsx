'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Wrapper from '@/ui/Wrapper'
import stls from './Carousel.module.sass'
import CarouselCardNext from '../CarouselCards/CarouselCard'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { useEffect, useRef } from 'react'

const Carousel = ({ heroCarousel }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [])

  return (
    <Wrapper>
      <h2 className={stls.title}>Особенности обучения в МИП</h2>
      <Swiper
        ref={swiperRef}
        slidesPerView={isMobileAndTabletLayout ? 1.1 : 3}
        // spaceBetween={10} // Добавляем небольшой отступ между слайдами
        initialSlide={2}
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current // Добавляем nextEl сюда
        }}
        pagination={
          isMobileAndTabletLayout
            ? {
                clickable: true,
                dynamicBullets: true,
                bulletActiveClass: stls.bulletViolet,
                horizontalClass: stls.pagination
              }
            : false
        }
        className={stls.container}
      >
        {heroCarousel.map(card => (
          <SwiperSlide key={card.id} className={`${stls.slide} swiper-slide`}>
            {({ isNext }) => (
              <CarouselCardNext
                isNext={isNext}
                card={card}
                isMobile={isMobileAndTabletLayout}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={stls.btns}>
        <button ref={prevRef} className={stls.navBtn}>
          ←
        </button>
        <button ref={nextRef} className={stls.navBtn}>
          →
        </button>
      </div>
    </Wrapper>
  )
}

export default Carousel