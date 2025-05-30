import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import stls from './ProgramHeroSwiper.module.sass'
import Image from 'next/image'
import card1 from '@/public/assets/imgs/redesignedProgram/ProgramHero/card-hours.png'
import card2 from '@/public/assets/imgs/redesignedProgram/ProgramHero/card-forma.png'

interface Props {
  hours: number
}

const ProgramHeroSwiper = ({ hours }: Props) => {
  const slides = [card1, card2]

  return (
    <div className={stls.container}>
      <Swiper
        slidesPerView={1.5}
        loop={true}
        modules={[Navigation, Pagination]}
        className={stls.swiper}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletActiveClass: stls.bulletViolet
        }}>
        {slides.map((card, index) => (
          <SwiperSlide key={card.src} className={stls.slide}>
            <picture>
              {index === 0 ? (
                <div className={stls.hoursSlide}>
                  <span className={stls.hoursText}>{hours || '1500'} академических часов</span>
                  <Image
                    src={card}
                    alt='Количество часов'
                    className={stls.img}
                    height={500}
                    width={500}
                  />
                </div>
              ) : (
                <div className={stls.hoursSlide}>
                  <span className={stls.hoursText}>Заочная форма обучения</span>
                  <Image
                    src={card}
                    alt='Форма обучения'
                    className={stls.img}
                    height={500}
                    width={500}
                  />
                </div>
              )}
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProgramHeroSwiper
