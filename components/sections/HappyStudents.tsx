import stls from '@/styles/components/sections/HappyStudents.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import IconCurveLineReview from '../icons/IconCurveLineReview'
import Otzovic from '../imgs/footerReviews/Otzovic'
import Tutortop from '../imgs/footerReviews/Tutortop'
import TwoGis from '../imgs/footerReviews/TwoGis'
import Ucheba from '../imgs/footerReviews/Ucheba'
import Ya from '../imgs/footerReviews/Ya'
import Wrapper from '@/ui/Wrapper'
import FooterReviews from '../popups/FooterReviews'
import routes from '@/config/routes'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import CardReviewsPlatform from '../cards/CardReviewsPlatform'
import CustomPrevButton from '@/ui/CustomPrevButton'
import CustomNextButton from '@/ui/CustomNextButton'
import Image from 'next/image'
import SliderNavigation from '@/ui/SliderNavigation/SliderNavigation'
import { useRef } from 'react'

SwiperCore.use([Navigation, Pagination])

const HappyStudents = ({ isMainPage = true }: { isMainPage?: boolean }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const isMobileLayout = useBetterMediaQuery('(max-width: 435px)')
  const swiperRef = useRef<SwiperCore | null>(null)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const list = [
    {
      node: (
        <FooterReviews href={routes.external.yandex}>
          <Ya />
        </FooterReviews>
      ),
      quantity: '100+',
      rating: '5.0'
    },
    {
      node: (
        <FooterReviews href={routes.external.turtop}>
          <Tutortop />
        </FooterReviews>
      ),
      quantity: '70+',
      rating: '4.7'
    },
    {
      node: (
        <FooterReviews href={routes.external.otzovic}>
          <Otzovic />
        </FooterReviews>
      ),
      quantity: '10+',
      rating: '5.0'
    },
    {
      node: (
        <FooterReviews href={routes.external.twoGis}>
          <TwoGis />
        </FooterReviews>
      ),
      quantity: '7',
      rating: '5.0'
    },
    {
      node: (
        <FooterReviews href={routes.external.ucheba}>
          <Ucheba />
        </FooterReviews>
      ),
      quantity: '15',
      rating: '5.0'
    }
  ]

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation
      if (navigation !== undefined) {
        navigation.prevEl = navigationPrevRef.current
        navigation.nextEl = navigationNextRef.current
      }
    }
  }

  return (
    <section className={isMainPage ? stls.section : stls.newSection}>
      <Wrapper>
        {isMainPage ? (
          <h2 className={stls.title}>Студенты довольны обучением в нашем институте</h2>
        ) : (
          <div className={stls.container_title}>
            <h2 className={stls.newTitle}>
              <span className={stls.coloured}>Студенты довольны {isMobileLayout && <br />}</span>
              обучением в МИП
            </h2>
            {isMobileAndTabletLayout ? (
              <div className={stls.container_imageMob}>
                <Image
                  src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739200031/vybor_bolshinstva_mob1_2837e1504c.png'
                  alt=''
                  width={164}
                  height={73}
                  className={stls.image}
                />
                <Image
                  src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739200031/vybor_bolshinstva_mob2_440d9fa503.png'
                  alt=''
                  width={164}
                  height={73}
                  className={stls.image}
                />
              </div>
            ) : (
              <Image
                src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739199056/vybor_bolshinstva_ce9c167123.png'
                alt=''
                width={233}
                height={102}
                className={stls.image}
              />
            )}
          </div>
        )}
        <div className={stls.content}>
          <div className={stls.textContainer}>
            <IconCurveLineReview
              left={isMobileAndTabletLayout ? 30 : 0}
              height={isMobileAndTabletLayout ? 140 : 241}
            />
            <div className={stls.textblock}>
              <p className={stls.students}>98% студентов считают,</p>
              <p className={stls.program}>
                что программы Московского Института Психологии превзошли их ожидания
              </p>
              <p className={stls.portal}>
                Данные исходя из результатов отзывов на ведущих порталах сравнения образовательных
                учреждений
              </p>
            </div>
          </div>
          <div className={stls.reviews}>
            <p className={stls.reviewsSubtitle}>
              Больше 250 отзывов на различных независимых площадках!
            </p>
            <Swiper
              onSwiper={swiper => (swiperRef.current = swiper)}
              onBeforeInit={onBeforeInit}
              slidesPerView={isMobileAndTabletLayout ? 1 : 1.6}
              spaceBetween={30}
              modules={[Pagination]}
              className={isMainPage ? stls.mySwiper : stls.newSwiper}>
              {list.map((el, i) => (
                <SwiperSlide key={i} className={stls.slide}>
                  <CardReviewsPlatform el={el} />
                </SwiperSlide>
              ))}
              {isMainPage && (
                <>
                  <div ref={navigationPrevRef} className={stls.prevBtn}>
                    <CustomPrevButton showOnMobile happyStudents />
                  </div>
                  <div ref={navigationNextRef} className={stls.prevBtn}>
                    <CustomNextButton showOnMobile happyStudents />
                  </div>
                </>
              )}
            </Swiper>
            {!isMainPage && (
              <SliderNavigation
                onPrev={() => swiperRef.current?.slidePrev()}
                onNext={() => swiperRef.current?.slideNext()}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HappyStudents
