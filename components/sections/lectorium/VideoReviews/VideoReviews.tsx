import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './VideoReviews.module.sass'
import CustomNextButton from '@/ui/CustomNextButton'
import CustomPrevButton from '@/ui/CustomPrevButton'
import Wrapper from '@/ui/Wrapper'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import SwiperCore from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import videoReviewList from 'constants/lectorium/videoReviewList'

const Player = dynamic(() => import('@/ui/Player/Player'), {
  ssr: false
})
SwiperCore.use([Navigation, Scrollbar])

const VideoReviews = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const playersRef = useRef([])

  const handleSlideChange = swiper => {
    playersRef.current.forEach((player, index) => {
      if (player && index !== swiper.activeIndex) {
        // @ts-ignore
        player.stop()
      }
    })
  }
  useEffect(() => {
    playersRef.current = playersRef.current.slice(0, videoReviewList.length)
  }, [videoReviewList.length])

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          ВИДЕО – <span className={stls.colored}>ОТЗЫВЫ</span>
        </h2>
        <div className={stls.slides}>
          <Swiper
            scrollbar={isMobileAndTabletLayout ? false : true}
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            onSlideChange={handleSlideChange}
            slidesPerView={isMobileAndTabletLayout ? 1 : 3}
            spaceBetween={20}
            allowTouchMove={false}
            speed={2000}
            slidesPerGroupAuto={false}
            modules={[Scrollbar]}
            className={stls.mySwiper}>
            {videoReviewList.map((videoId, idx) => (
              <SwiperSlide key={videoId + idx} className={stls.slide}>
                <div className={stls.playerWrapper}>
                  <Player
                    // @ts-ignore
                    forwardRef={el => (playersRef.current[idx] = el)}
                    className={stls.kinescope}
                    controls={false}
                    videoId={videoId}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className='custom-prev-button-container'>
              <CustomPrevButton
                left={5}
                top={0}
                mobileTop={-15}
                mobileLeft={100}
                isTeacherRoundBtn={isMobileAndTabletLayout}
                showOnMobile
              />
            </div>
            <div className='custom-next-button-container'>
              <CustomNextButton
                left={0}
                top={0}
                mobileTop={-15}
                mobileLeft={-115}
                isTeacherRoundBtn={isMobileAndTabletLayout}
                showOnMobile
              />
            </div>
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default VideoReviews
