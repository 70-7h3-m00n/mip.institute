import CardTeacher from '@/components/cards/CardTeacher'
import ImgTeacher from '@/components/imgs/teachers/ImgTeacher'
import Wrapper from '@/ui/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { getImageHeight, sortBasedOnNumericOrder } from '@/helpers/index'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/Teachers.module.sass'
import { TypeLibTeachers } from '@/types/index'
import CustomNextButton from '@/ui/CustomNextButton'
import CustomPrevButton from '@/ui/CustomPrevButton'
import Tag from '@/ui/Tag'
import classNames from 'classnames'
import { useContext } from 'react'
import SwiperCore from 'swiper'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

type TeacherProps = {
  teachersRef?: React.RefObject<HTMLElement | null>
  teachersFromMain?: TypeLibTeachers
  title: string
  onMain?: boolean
  teachersList?: any[]
  isExperienceHidden?: boolean
  halfScreenTitle?: boolean
  isWhiteBackground?: boolean
  isSquareBtn?: boolean
  isTeacherRoundBtn?: boolean
  titlePaddingLeft?: number
  showOnMobile?: boolean
}

const Teachers = ({
  teachersRef,
  teachersFromMain,
  title,
  onMain = false,
  //@ts-ignore
  teachersList = null,
  isExperienceHidden,
  halfScreenTitle = false,
  isWhiteBackground,
  isSquareBtn,
  isTeacherRoundBtn = true,
  showOnMobile = true
}: TeacherProps) => {
  const { program, curProgramsType } = useContext(ContextStaticProps)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  let teachers = teachersList || teachersFromMain || program?.teachers

  const teachersSorted: TypeLibTeachers = sortBasedOnNumericOrder({ teachers })
  const list =
    teachersSorted &&
    teachersSorted.map(teacher => ({
      ...teacher,
      image: (
        <ImgTeacher
          src={teacher?.portrait?.url}
          alt={teacher?.name}
          width={160}
          height={getImageHeight({
            width: 160,
            widthInitial: teacher?.portrait?.width,
            heightInitial: teacher?.portrait?.height
          })}
        />
      )
    }))

  return (
    <section
    //@ts-ignore
      ref={teachersRef}
      className={classNames({
        [stls.container]: true,
        [stls.onProfessions]: !onMain,
        [stls.course]: curProgramsType === 'course'
      })}>
      <Wrapper>
        {onMain && (
          <div className={stls.tag}>
            <Tag type='orange'>Опыт</Tag>
          </div>
        )}
        <h2
          className={classNames({
            [stls.title]: true,
            [stls.halfScreenTitle]: halfScreenTitle
          })}>
          {title}
        </h2>
        <p
          className={classNames({
            [stls.desc]: true,
            [stls.halfScreenSubtitle]: halfScreenTitle
          })}>
          Преподают ведущие практикующие психологи России{' '}
          <span className={stls.highlight}>с опытом от 7 до 25 лет</span>
        </p>
        <div className={stls.teachers}>
          <Swiper
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            slidesPerView={isMobileAndTabletLayout ? 1 : 2}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={2000}
            scrollbar={isMobileAndTabletLayout ? false : true}
            modules={[Scrollbar]}>
            {list?.map((teacher, idx) => (
              <SwiperSlide 
              //@ts-ignore
              key={teacher?.name + idx}>
                <CardTeacher
                  portrait={teacher.image}
                  //@ts-ignore
                  name={teacher.name} achievements={teacher.achievements} experience={teacher.experience}
                  isExperienceHidden={isExperienceHidden}
                  isWhiteBackground={isWhiteBackground}
                />
              </SwiperSlide>
            ))}

            <div className='custom-prev-button-container'>
              <CustomPrevButton
                showOnMobile={showOnMobile}
                left={10}
                top={-10}
                mobileTop={-30}
                mobileLeft={100}
                isTeacherRoundBtn={isTeacherRoundBtn}
                isSquareBtn={isSquareBtn}
              />
            </div>
            <div className='custom-next-button-container'>
              <CustomNextButton
                showOnMobile={showOnMobile}
                left={15}
                top={-10}
                mobileTop={-30}
                mobileLeft={-115}
                isTeacherRoundBtn={isTeacherRoundBtn}
                isSquareBtn={isSquareBtn}
              />
            </div>
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default Teachers
