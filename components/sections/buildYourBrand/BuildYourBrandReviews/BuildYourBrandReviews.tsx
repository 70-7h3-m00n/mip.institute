import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './BuildYourBrandReviews.module.sass'
import Wrapper from '@/ui/Wrapper'
import reviewsDefault from 'constants/buildYourBrand/reviews'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import loadIcon from '@/helpers/general/loadIcon'
import BuildYourBrandCard from './BuildYourBrandCard'

SwiperCore.use([Scrollbar])

const BuildYourBrandReviews = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.titleSuper}>Отзывы</h2>

        <Swiper
          scrollbar
          slidesPerView={isMobileAndTabletLayout ? 1.5 : 4}
          spaceBetween={isMobileAndTabletLayout ? 10 : 30}
          modules={[Scrollbar]}
          className={stls.swiperCustom}>
          {reviewsDefault.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className={stls.cards}>
                <BuildYourBrandCard review={review} key={idx} number={idx} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={stls.finger}>{loadIcon('IconFinger')}</div>
      </Wrapper>
    </section>
  )
}

export default BuildYourBrandReviews
