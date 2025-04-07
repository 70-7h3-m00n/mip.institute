'use client'
import Image from 'next/image'
import stls from './Office.module.sass'
import Wrapper from '@/ui/Wrapper'
import { useState } from 'react'
import classNames from 'classnames'
import { BtnPrev, IconBG, images, NextBtn } from 'constants/contacts/contactsIcons'

const Office = () => {
  const [imageList, setImageList] = useState(images)

  const nextSlide = () => {
    setImageList(prev => [...prev.slice(1), prev[0]])
  }

  const prevSlide = () => {
    setImageList(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.blockWrapper}>
          <div className={stls.officeText}>
            <span className={stls.iconWrapper}>
              <IconBG />
            </span>
            <h2 className={stls.title}>Наш уютный кампус</h2>
            <p className={stls.text}>
              Это прекрасный отреставрированный{' '}
              <span className={stls.highlight}>особняк в самом сердце Москвы</span>, до которого
              легко добраться даже без личного транспорта. У нас светлые и просторные помещения,
              уютная атмосфера, а также все необходимое для комфортной и продуктивной работы.
            </p>
          </div>
          <div className={stls.sliderContainer}>
            <div className={stls.slider}>
              {imageList?.map((el, i) => (
                <div className={stls.slide} key={i}>
                  <Image
                    onClick={nextSlide}
                    className={classNames({
                      [stls.img]: true,
                      [stls.activeSlide]: imageList?.[0].id === el.id
                    })}
                    src={el.url}
                    alt={el.alt}
                    width={el.width}
                    height={el.height}
                  />
                </div>
              ))}
              <button onClick={prevSlide} className={stls.btnPrev}>
                <BtnPrev />
              </button>
              <button onClick={nextSlide} className={stls.nextBtn}>
                <NextBtn />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Office
