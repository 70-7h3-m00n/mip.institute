'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import  {Navigation, Pagination, Autoplay}  from 'swiper/modules'
import Image from 'next/image'
import Wrapper from '@/ui/Wrapper'
import stls from './Carousel.module.sass'
import Title from '../Title/Title'
// import 'swiper/swiper-bundle.min.css'

const imageList = [
  { id: 0, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1738833628/Foto_zaglushka_c6286bb454.jpg' },
  { id: 1, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7256_a6af690446.jpg' },
  { id: 2, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7936_f1275458dd.jpg' },
  { id: 3, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_8025_9c13b3030b.jpg' },
  { id: 4, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9356_5500f80eaa.jpg' },
  { id: 0, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1738833628/Foto_zaglushka_c6286bb454.jpg' },
  { id: 1, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7256_a6af690446.jpg' },
  { id: 2, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7936_f1275458dd.jpg' },
  { id: 3, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_8025_9c13b3030b.jpg' },
  { id: 4, url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9356_5500f80eaa.jpg' }
]

const Carousel = () => {
  return (
    <section className={stls.section}>
        <Title />
      <Wrapper>
      <div className="carouselWrapper">
        <h2>Особенности обучения в МИП</h2>

        <Swiper
          slidesPerView={3} // Показываем 3 слайда
          // slidesOffsetAfter={600}
          // slidesOffsetBefore={600}
          // spaceBetween={20} // Расстояние между слайдами
          centeredSlides={true} // Центрируем активный слайд
          loop={true} // Бесконечная прокрутка

          navigation={true} // Стрелки для навигации
          modules={[Navigation, Pagination]}
          className={stls.container}
        >
          {imageList.map((el) => (
            <SwiperSlide key={el.id} className={`${stls.slide} swiper-slide`}>
              {({isNext}) => (
                <picture>
                 <Image
                   src={el.url}
                   alt=''
                   className={isNext ? stls.nextImg :stls.img}
                   height={300}
                   width={300}
                 />
                </picture>
              )}
                
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
    </section>
  )
}

export default Carousel
