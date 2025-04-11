import stls from './BuildYourBrandBasics.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import Image from 'next/image'

SwiperCore.use([Scrollbar])

const BuildYourBrandBasics = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')
  const images = [
    '/assets/imgs/practicalTraining/buildYourBrand/basics/1.jpg',
    '/assets/imgs/practicalTraining/buildYourBrand/basics/2.jpg',
    '/assets/imgs/practicalTraining/buildYourBrand/basics/3.jpg',
    '/assets/imgs/practicalTraining/buildYourBrand/basics/4.jpg'
  ]

  const imageSizes = [
    { width: 271, height: 85 },
    { width: 271, height: 321 },
    { width: 271, height: 226 },
    { width: 271, height: 165 }
  ]

  const imageContainer1 = [0, 1]
  const imageContainer2 = [2, 3]

  return (
    <section className={stls.container}>
      <div className={stls.textBlock}>
        <h2 className={stls.title}>Построй личный бренд психолога!</h2>
        <p className={stls.desc}>Основы продвижения</p>
        <p className={stls.text}>
          Расскажем, как{' '}
          <span className={stls.bold}>
            создать личный бренд {isMobileAndTabletLayout && <br />} психолога и помогающего
            практика
          </span>{' '}
          {isMobileAndTabletLayout && <br />}и сделать шаг навстречу успешной карьере!
        </p>
      </div>

      <div className={stls.imagesBlock}>
        <div className={classNames(stls.column, stls.column1)}>
          {imageContainer1.map(idx => (
            <div className={stls.imageContainer} key={images[idx]}>
              <Image
                src={images[idx]}
                alt='Мероприятия'
                width={imageSizes[idx].width}
                height={imageSizes[idx].height}
                className={stls.image}
              />
            </div>
          ))}
        </div>
        <div className={classNames(stls.column, stls.column2)}>
          {imageContainer2.map(idx => (
            <div className={stls.imageContainer} key={images[idx]}>
              <Image
                src={images[idx]}
                alt='Мероприятия'
                width={imageSizes[idx].width}
                height={imageSizes[idx].height}
                className={stls.image}
              />
            </div>
          ))}
        </div>
      </div>

      {isMobileAndTabletLayout && (
        <Swiper
          slidesPerView={isMobileLayout ? 1.5 : 2}
          spaceBetween={0}
          className={stls.swiperWrapper}>
          {images
            .slice()
            .reverse()
            .map((src, idx) => (
              <SwiperSlide key={src + idx} className={stls.slide}>
                <Image
                  src={src}
                  alt='Мероприятия'
                  width={227}
                  height={270}
                  className={stls.image}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </section>
  )
}

export default BuildYourBrandBasics
