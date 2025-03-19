import IconVioletCircle from '@/components/icons/IconVioletCircle'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical/TwoColumnsPractical'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './LectoriumHowGoesClasses.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { Swiper, SwiperSlide } from 'swiper/react'
import { classesImages, classesListText } from 'constants/lectorium/classes'
import { CldImage } from 'next-cloudinary'

const Player = dynamic(() => import('@/ui/Player/Player'), {
  ssr: false
})
const LectoriumHowGoesClasses = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const classNameImages = [stls.imgClass1, stls.imgClass2, stls.imgClass3]
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical fixHeight>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.left]: true
            })}>
            <div className={stls.playerWrapper}>
              <Player
                preload='auto'
                className={stls.kinescope}
                videoId='sPJLpY5fpEK8rg2fJeBia1'
              />
            </div>
          </div>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.right]: true
            })}>
            <h2 className={stls.titleRight}>
              КАК
              <span className={stls.colouredTitle}> ПРОХОДЯТ ЗАНЯТИЯ</span>
            </h2>
            <div className={stls.text}>
              <p className={stls.descriptionRight}>
                Мы обучаем не только онлайн – наши студенты могут лично посетить
                различные лекции, семинары и мастер–классы.
              </p>
              {isMobileAndTabletLayout && (
                <span className={stls.separator}></span>
              )}
              <p className={stls.listName}>
                В аудиториях нашего здания на Красных воротах{' '}
                <span className={stls.strongText}>вас ожидают:</span>
              </p>
            </div>
            <div className={stls.list}>
              {classesListText.map((el, idx) => (
                <div key={el + idx} className={stls.listItem}>
                  <IconVioletCircle width='20px' height='20px' />
                  <p className={stls.listText}>{el}</p>
                </div>
              ))}
            </div>
            <div className={stls.imgRight}>
              {classesImages.map((src, idx) => (
                <div className={classNameImages[idx]} key={idx}>
                  <CldImage
                    src={src}
                    alt='Занятия'
                    className={stls.image}
                    style={{ width: '100%', height: 'auto' }}
                    width='400'
                    height='400'
                    crop='fit'
                  />
                </div>
              ))}
            </div>
            {isMobileAndTabletLayout && (
              <div className={stls.slides}>
                <Swiper
                  slidesPerView={1.3}
                  spaceBetween={10}
                  className={stls.mySwiper}>
                  {classesImages.map((src, idx) => (
                    <SwiperSlide key={idx} className={stls.slide}>
                      <CldImage
                        src={src}
                        alt='Занятия'
                        className={stls.image}
                        style={{ width: '100%', height: 'auto' }}
                        width='270'
                        height='200'
                        crop='fit'
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default LectoriumHowGoesClasses
