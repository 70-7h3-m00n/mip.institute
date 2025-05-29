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
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const TeachersSlider = () => {
  const isMobile = useBetterMediaQuery('(max-width: 430px)')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const handleInteraction = (index: number) => {
    if (isMobileAndTabletLayout) {
      setHoveredIndex(prev => (prev === index ? null : index))
    } else {
      setHoveredIndex(index)
    }
  }
  return (
    <section className={stls.container} id='teachers'>
      <Wrapper>
        <h2 className={stls.title}>Преподаватели — практикующие психологи</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          slidesPerView={isMobile ? 1 : 'auto'}
          centeredSlides={true}
          className={stls.containerSwiper}
          navigation={{
            prevEl: '#teachersNavBtns button:first-child',
            nextEl: '#teachersNavBtns button:last-child'
          }}>
          {teachers.map((teacher, index) => (
            <SwiperSlide key={teacher.id} className={stls.swiperSlide}>
              <div
                className={stls.cardWrapper}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleInteraction(index)}>
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
          <div id='teachersNavBtns'>
            <ArrowNavigation bgColor='#855EDF' arrowColor='#FFF' size='medium' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default TeachersSlider
