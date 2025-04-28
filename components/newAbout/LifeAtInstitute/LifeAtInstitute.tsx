import React, { useState, useCallback } from 'react'
import stls from './LifeAtInstitute.module.sass'
import Image from 'next/image'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import { BtnPrev, NextBtn } from 'constants/contacts/contactsIcons'
import { IconBG } from 'constants/newAbout/newAboutIcons'
import Link from 'next/link'
import routes from '@/config/routes'

const images = [
  {
    id: 0,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1738833628/Foto_zaglushka_c6286bb454.jpg',
    alt: 'Фото кампуса 1',
    width: 620,
    height: 420
  },
  {
    id: 1,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7256_a6af690446.jpg',
    alt: 'Фото кампуса 2',
    width: 620,
    height: 420
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7936_f1275458dd.jpg',
    alt: 'Фото кампуса 3',
    width: 620,
    height: 420
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_8025_9c13b3030b.jpg',
    alt: 'Фото кампуса 4',
    width: 620,
    height: 420
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9356_5500f80eaa.jpg',
    alt: 'Фото кампуса 5',
    width: 620,
    height: 420
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9275_3422189b9a.jpg',
    alt: 'Фото кампуса 6',
    width: 620,
    height: 420
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9360_d807f6f92d.jpg',
    alt: 'Фото кампуса 7',
    width: 620,
    height: 420
  }
]

const LifeAtInstitute = () => {
  const [imageList, setImageList] = useState(images)

  const nextSlide = useCallback(() => {
    setImageList(prev => [...prev.slice(1), prev[0]])
  }, [])

  const prevSlide = useCallback(() => {
    setImageList(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])
  }, [])

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.blockWrapper}>
          <div className={stls.containerText}>
            <span className={stls.iconWrapper}>
              <IconBG />
            </span>
            <h2 className={stls.title}>Жизнь института</h2>
            <p className={stls.text}>
              Мы создаём насыщенную и разнообразную программу мероприятий —{' '}
              <span className={stls.highlight}>
                мастер-классы, ресурсные практики, практикумы, мастерайнды, тренинги
              </span>{' '}
              и другие форматы.
            </p>
            <p className={stls.text}>
              Наши события разработаны с учётом реальных потребностей участников и направлены на
              рост, поддержку и получение ценного опыта.
            </p>
            <Link href={routes.front.lectoriums} className={stls.btn}>
              Наши мероприятия
            </Link>
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

export default LifeAtInstitute
