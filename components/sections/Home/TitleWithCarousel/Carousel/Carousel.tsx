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
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current
      swiperRef.current.swiper.navigation.init()
      swiperRef.current.swiper.navigation.update()
    }
  }, [])

  return (
    <Wrapper>
        <h2 className={stls.title}>Особенности обучения в МИП</h2>
        <Swiper
          ref={swiperRef}
          slidesPerView={isMobileAndTabletLayout ? 1.1 : 3}
          initialSlide={2}
          centeredSlides={true}
          loop={true}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current
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
          className={stls.container}>
          {heroCarousel.map(card => (
            <SwiperSlide key={card.id} className={`${stls.slide} swiper-slide`}>
              {({ isNext }) => (
                <CarouselCardNext isNext={isNext} card={card} isMobile={isMobileAndTabletLayout} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={stls.btns}>
          <button ref={prevRef} className={stls.navBtn}>
            {' '}
            &larr;
          </button>
          <button ref={nextRef} className={stls.navBtn}>
            &rarr;
          </button>
        </div>
    </Wrapper>
  )
}

export default Carousel
