import ImgTopCourse from '@/components/imgs/programs/ImgTopCourse'
import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/LinkedPrograms.module.sass'
import classNames from 'classnames'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardLinkedProgram from '../cards/CardLinkedProgram'
import CustomNextButton from '@/ui/CustomNextButton'
import CustomPrevButton from '@/ui/CustomPrevButton'
import PopupSpecialization from '../popups/PopupSpecialization'

type Picture = {
  url: string
  width: number
  height: number
}

type Specialization = {
  title: string
  studyHours: number | null
  admissionDate: string
  heroPicture: Picture
  record: { text: string }[]
}

type Props = {
  specializations: Specialization[]
  title: string | JSX.Element
  close?: () => void
}

type Slide = {
  image: JSX.Element
} & Specialization

const LinkedPrograms = ({ specializations, title, close }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState<null | Slide>(null)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  if (!specializations || !specializations.length) {
    return null // Если нет данных, не рендерим ничего
  }

  const handleSlideClick = (slide: Slide) => {
    setCurrentSlide(slide)
    setIsOpen(true)
  }

  const list =
    specializations &&
    [...specializations]?.map(course => ({
      ...course,
      image: (
        <ImgTopCourse
          src={course?.heroPicture?.url}
          alt={course?.title}
          width={780}
          height={380}
        />
      )
    }))

  return (
    <section
      className={classNames({
        [stls.container]: true
      })}>
      <Wrapper>
        {title}
        <div className={stls.teachers}>
          <Swiper
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            slidesPerView={isMobileAndTabletLayout ? 1 : 3}
            spaceBetween={30}
            scrollbar={true}
            modules={[Navigation, Scrollbar]}
            className={stls.mySwiper}>
            {list?.map((course, idx) => (
              <SwiperSlide
                key={course.title + idx}
                className={stls.slide}
                onClick={() => handleSlideClick(course)}>
                <CardLinkedProgram
                  key={course.title + idx}
                  portrait={course?.image}
                  title={course.title}
                />
              </SwiperSlide>
            ))}
            {!isMobileAndTabletLayout && (
              <>
                <div className='custom-prev-button-container'>
                  <CustomPrevButton
                    showOnMobile
                    left={10}
                    top={-10}
                    mobileTop={-30}
                    mobileLeft={100}
                    isTeacherRoundBtn
                  />
                </div>
                <div className='custom-next-button-container'>
                  <CustomNextButton
                    showOnMobile
                    left={15}
                    top={-10}
                    mobileTop={-30}
                    mobileLeft={-115}
                    isTeacherRoundBtn
                  />
                </div>
              </>
            )}
          </Swiper>
        </div>
        <Popup
          open={isOpen}
          onClose={() => setIsOpen(false)}
          position={'center center'}>
          <PopupSpecialization
          // @ts-ignore
            image={currentSlide?.image} title={currentSlide?.title} onClose={close}
            descriptionList={currentSlide?.record}
            
          />
        </Popup>
      </Wrapper>
    </section>
  )
}

export default LinkedPrograms
