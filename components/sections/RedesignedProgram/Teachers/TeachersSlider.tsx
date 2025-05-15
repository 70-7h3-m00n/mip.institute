'use client'

import { useState } from 'react'
import stls from './TeachersSlider.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import HoverTeacherCard from './HoverTeacherCard'
import MobileHintIcon from './MobileHintIcon'
import { teachers } from './const'

const TeachersSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Преподаватели — практикующие психологи</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          navigation={{
            prevEl: '#navBtnsDesktop button:first-child',
            nextEl: '#navBtnsDesktop button:last-child'
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1025: { slidesPerView: 3 }
          }}>
          {teachers.map((teacher, index) => (
            <SwiperSlide key={teacher.id} className={stls.swiperWrapper}>
              <div
                className={stls.cardWrapper}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <span className={stls.mobileIcon}>
                  <MobileHintIcon />
                </span>
                <div className={stls.card}>
                  <div
                    className={`${stls.preview} ${
                      hoveredIndex === index ? stls.hidden : stls.visible
                    }`}>
                    <Image
                      src={teacher.photo}
                      alt={teacher.name}
                      width={370}
                      height={407}
                      className={stls.image}
                    />
                    <div className={stls.meta}>
                      <p className={stls.name}>{teacher.name}</p>
                    </div>
                  </div>

                  <div
                    className={`${stls.hoverCard} ${
                      hoveredIndex === index ? stls.visible : stls.hidden
                    }`}>
                    <HoverTeacherCard
                      name={teacher.name}
                      role={teacher.role}
                      description={teacher.description}
                      experience={teacher.experience}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={stls.navigation}>
          <div id='navBtnsDesktop'>
            <ArrowNavigation bgColor='#855EDF' arrowColor='#FFF' size='medium' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default TeachersSlider
