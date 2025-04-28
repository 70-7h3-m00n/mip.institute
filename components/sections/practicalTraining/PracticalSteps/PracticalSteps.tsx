import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './PracticalSteps.module.sass'
import { practicalTrainSteps } from 'constants/practicalTrainSteps'
import { useEffect, useRef, useState } from 'react'
import { Swiper as SwiperCore } from 'swiper'
import 'swiper/css/effect-fade'
import { EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CubicBlockThreeSide from '@/components/sections/practicalTraining/PracticalSteps/CubicBlockThreeSide/CubicBlockThreeSide'
import IconPracticalStepNext from '@/components/icons/IconPracticalStepNext'
import Wrapper from '@/ui/Wrapper'
import StepBlocks from '../StepBlocks/StepBlocks'
import { InView } from 'react-intersection-observer'

const PracticalSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animateSteps, setAnimateSteps] = useState(false)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const swiperRef = useRef<SwiperCore | null>(null)

  if (!isMobileAndTabletLayout) {
    SwiperCore.use([EffectFade])
  }

  const handleSlideChange = swiper => {
    const newIndex = swiper.activeIndex
    setCurrentIndex(newIndex)
  }

  const handleInView = inView => {
    if (inView && !animateSteps) {
      setAnimateSteps(true)
    }
  }

  useEffect(() => {
    if (swiperRef.current && !isMobileAndTabletLayout) {
      swiperRef.current.slideTo(currentIndex)
    }
  }, [currentIndex])

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.innerContainer}>
          <h2 className={stls.title}>Шаги практики</h2>
          {isMobileAndTabletLayout && (
            <div className={stls.iconMob}>
              <IconPracticalStepNext />
            </div>
          )}
          {isMobileAndTabletLayout && (
            <Swiper
              direction={'horizontal'}
              slidesPerView={1}
              spaceBetween={10}
              speed={800}
              className={stls.myMobSwiper}
              onSlideChange={handleSlideChange}
              style={{ height: '30rem', width: '100%' }}>
              {practicalTrainSteps.map(el => (
                <SwiperSlide key={`${el.id}+${el.title}`} className={stls.slide}>
                  <CubicBlockThreeSide
                    title={el.title}
                    subtitle={el.subtitle}
                    src={el.src}
                    mobHeight={el.mobHeight}
                    fullText={el.fullText}
                    link={el.link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <InView
            as='div'
            onChange={handleInView}
            triggerOnce
            threshold={0.7}
            rootMargin='0px 0px -100px 0px'>
            <Swiper
              direction={isMobileAndTabletLayout ? 'horizontal' : 'vertical'}
              slidesPerView={1}
              spaceBetween={isMobileAndTabletLayout ? 10 : 0}
              mousewheel={false}
              effect={isMobileAndTabletLayout ? 'slide' : 'fade'}
              fadeEffect={!isMobileAndTabletLayout ? { crossFade: true } : undefined}
              speed={800}
              className={stls.mySwiper}
              onSlideChange={handleSlideChange}
              onSwiper={swiper => (swiperRef.current = swiper)}
              style={{ height: '30rem', width: '100%' }}>
              <StepBlocks
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                animateSteps={animateSteps}
              />
              {practicalTrainSteps.map((el, index) => (
                <SwiperSlide key={`${el.id}+${el.title}`} className={stls.slide}>
                  <CubicBlockThreeSide
                    title={el.title}
                    subtitle={el.subtitle}
                    src={el.src}
                    mobHeight={el.mobHeight}
                    fullText={el.fullText}
                    isActive={currentIndex === index}
                    onClick={() => setCurrentIndex(index)}
                    link={el.link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </InView>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalSteps
