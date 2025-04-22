import CardReview from '@/components/cards/CardReview'
import ImgReview from '@/components/imgs/reviews/ImgReview'
import Wrapper from '@/ui/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { getImageHeight } from '@/helpers/index'
import stls from '@/styles/components/sections/Reviews.module.sass'
import SwiperContainer from '@/ui/SwiperContainer'
import Tag from '@/ui/Tag'
import classNames from 'classnames'
import { useProgramsSafe } from '@/hooks/general/useSafeContext'

type ReviewsType = {
  standalone?: boolean
  reviews: any
  reviewsRef?: any
  onMain?: boolean
  isLiveCourse?: boolean
  subtitle?: string
}

const Reviews = ({
  standalone = false,
  reviews,
  reviewsRef,
  onMain,
  isLiveCourse,
  subtitle
}: ReviewsType) => {
  // const { program } = useContext(ContextStaticProps)
  const {
        state: { program }
      } = useProgramsSafe()
  
  const uniqueReviewsCount = program?.unique_reviews?.length
  if (uniqueReviewsCount > 0) {
    reviews = program?.unique_reviews
  }
  const slides = reviews?.map((review, idx) => (
    <CardReview
      key={review.title + idx}
      title={review.title}
      photo={
        <ImgReview
          src={review?.picture?.[0]?.url}
          alt={review.name}
          width={110}
          height={getImageHeight({
            width: 110,
            widthInitial: review?.picture?.[0]?.width,
            heightInitial: review?.picture?.[0]?.height
          })}
        />
      }
      name={review.name}
      occupation={review.profession}
      story={review.story}
      isLiveCourse={isLiveCourse}
    />
  ))

  const desktopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 20
  }
  const laptopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 20
  }
  const tabletSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 10
  }
  const mobileSwiperOptions = {
    slidesNum: 1.2,
    spaceBetween: 5
  }
  return (
    <section
      ref={reviewsRef}
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        {onMain && (
          <div className={stls.tag}>
            <Tag type='orange'>Cлушатели</Tag>
          </div>
        )}
        {/* <p className={stls.reviewCount}>{reviews.length} отзывов</p> */}
        <h2 className={stls.title}>Отзывы наших студентов</h2>
        {subtitle ? (
          <p className={stls.description}>{subtitle}</p>
        ) : (
          <p className={stls.description}>
            Мы собрали подробные отзывы учеников, которые прослушали курс и
            получили профессию. Они рассказали свои истории, которые откликаются
            в сердцах наших преподавателей и всей команды Московского Института
            Психологии.
          </p>
        )}

        <div className={stls.content}>
          <SwiperContainer
            reviewPrevBtn
            reviewNextBtn
            reviews
            slides={slides}
            desktopOptions={desktopSwiperOptions}
            laptopOptions={laptopSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            mobileOptions={mobileSwiperOptions}
            isLiveCourse={isLiveCourse}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default Reviews
