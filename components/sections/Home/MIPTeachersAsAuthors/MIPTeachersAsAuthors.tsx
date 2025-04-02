'use client'

import React from 'react'
import stls from './MIPTeachersAsAuthors.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import { TImage } from '@/types/index'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'

interface MIPTeachersAsAuthorsProps {
  imgs: TImage[]
}

const MIPTeachersAsAuthors = ({ imgs }: MIPTeachersAsAuthorsProps) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span>
            Преподаватели нашего Института выступают <br className={stls.lineBreak} />в качестве
            авторов статей и экспертов в СМИ
          </span>
        </h2>

        <div className={stls.navigation}>
          <div className={stls.text}>
            Подкасты и публикации от преподавателей института регулярно появляются в крупных
            изданиях
          </div>
          <div id='navBtnsDesktop'>
            <ArrowNavigation bgColor='#FFF' arrowColor='#212121' size='medium' />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          navigation={{
            prevEl: '#navBtnsDesktop button:first-child, #navBtnsMobile button:first-child',
            nextEl: '#navBtnsDesktop button:last-child, #navBtnsMobile button:last-child'
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1025: { slidesPerView: 3 }
          }}>
          {imgs.map(card => (
            <SwiperSlide key={card.id}>
              <div className={stls.card}>
                <Image
                  src={card.url}
                  alt='Публикации журналов'
                  className={stls.image}
                  width={370}
                  height={407}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={stls.navigationMob}>
          <div id='navBtnsMobile'>
            <ArrowNavigation bgColor='#FFF' arrowColor='#212121' size='medium' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default MIPTeachersAsAuthors
