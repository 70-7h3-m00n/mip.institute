import stls from './NoPlannedEvents.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import { useCallback, useState } from 'react'

const images = [
  {
    id: 0,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1738833628/Foto_zaglushka_c6286bb454.jpg'
  },
  {
    id: 1,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7256_a6af690446.jpg'
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7936_f1275458dd.jpg'
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_8025_9c13b3030b.jpg'
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9356_5500f80eaa.jpg'
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9275_3422189b9a.jpg'
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9360_d807f6f92d.jpg'
  }
]
type TopBlockProps = {
  onClick: () => void
}
const NoPlannedEvents = ({ onClick }: TopBlockProps) => {
  const [imageList, setImageList] = useState(images)

  const nextSlide = useCallback(() => {
    setImageList(prev => [...prev.slice(1), prev[0]])
  }, [])

  const prevSlide = useCallback(() => {
    setImageList(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])
  }, [])

  return (
    <div className={stls.section}>
      <div className={stls.container}>
        <div className={stls.text}>
          <h2 className={stls.title}>
            Пока у нас нет <br />
            запланированных мероприятий,
            <br /> но это лишь временно!
          </h2>
          <p className={stls.description}>
            Мы активно работаем над созданием программы, которая точно вас удивит и вдохновит.
            Заглядывайте сюда позже — мы обязательно порадуем вас новыми событиями
          </p>
          <p className={stls.buttomDescription}>
            По кнопке ниже, вы можете ознакомиться прошедшими мероприятиями
          </p>
          <button className={stls.btn} onClick={onClick}>
            Прошедшие мероприятия
          </button>
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
                  alt={`Слайд ${i + 1}`}
                  width='620'
                  height='450'
                />
              </div>
            ))}
            <button onClick={prevSlide} className={stls.btnPrev}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'>
                <rect width='40' height='40' rx='20' fill='white' />
                <path
                  d='M14.5 20.866C13.8333 20.4811 13.8333 19.5189 14.5 19.134L22 14.8038C22.6667 14.4189 23.5 14.9001 23.5 15.6699L23.5 24.3301C23.5 25.0999 22.6667 25.5811 22 25.1962L14.5 20.866Z'
                  fill='#6F01C6'
                />
              </svg>
            </button>
            <button onClick={nextSlide} className={stls.nextBtn}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'>
                <rect
                  x='40'
                  y='40'
                  width='40'
                  height='40'
                  rx='20'
                  transform='rotate(-180 40 40)'
                  fill='white'
                />
                <path
                  d='M25.5 19.134C26.1667 19.5189 26.1667 20.4811 25.5 20.866L18 25.1962C17.3333 25.5811 16.5 25.0999 16.5 24.3301L16.5 15.6699C16.5 14.9001 17.3333 14.4189 18 14.8038L25.5 19.134Z'
                  fill='#6F01C6'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoPlannedEvents
