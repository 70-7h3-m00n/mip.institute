import CustomNextButton from '@/ui/CustomNextButton'
import CustomPrevButton from '@/ui/CustomPrevButton'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './SwiperContainer.module.sass'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import SwiperCore from 'swiper'
import { Grid, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import PopupImage from '@/components/popups/PopupImage'

SwiperCore.use([Navigation, Pagination])

interface IOption {
  slidesNum?: number
  spaceBetween?: number
}

interface Props {
  teachers?: boolean
  topCourses?: boolean
  diplomas?: boolean
  reviews?: boolean
  reviewNextBtn?: boolean
  reviewPrevBtn?: boolean
  isLiveCourse?: boolean
  isMultiRow?: boolean
  autoHeight?: boolean
  hideNavigation?: boolean
  alwaysDisabledOnDesktop?: boolean
  slides: any
  mobileOptions?: IOption
  tabletOptions?: IOption
  laptopOptions?: IOption
  desktopOptions?: IOption
  close?: () => void
}

const SwiperContainer = ({
  teachers = false,
  topCourses = false,
  diplomas = false,
  reviews = false,
  reviewNextBtn = false,
  reviewPrevBtn = false,
  slides,
  mobileOptions = { slidesNum: 1, spaceBetween: 10 },
  tabletOptions = { slidesNum: 1, spaceBetween: 10 },
  laptopOptions = { slidesNum: 2, spaceBetween: 10 },
  desktopOptions = { slidesNum: 2, spaceBetween: 50 },
  alwaysDisabledOnDesktop = false,
  isMultiRow = false,
  autoHeight = false,
  hideNavigation = false,
  isLiveCourse = false,
  close
}: Props) => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')
  const isTabletLayout = useBetterMediaQuery(
    '(min-width: 481px) and (max-width: 768px)'
  )
  const isLaptopLayout = useBetterMediaQuery(
    '(min-width: 768px) and (max-width: 1200px)'
  )
  const isDesktopLayout = useBetterMediaQuery('(min-width: 1201px)')

  const layouts = [
    { mobile: isMobileLayout },
    { tablet: isTabletLayout },
    { laptop: isLaptopLayout },
    { desktop: isDesktopLayout }
  ]

  const getCurrentLayoutKey = () => {
    const currentLayout = layouts.find(layout => {
      const firstKey = Object.keys(layout)[0]
      return layout[firstKey]
    })

    if (!currentLayout) return 'mobile'

    const currentLayoutKey = Object.keys(currentLayout)[0]

    return currentLayoutKey
  }

  const swiperOptions = {
    mobile: mobileOptions,
    tablet: tabletOptions,
    laptop: laptopOptions,
    desktop: desktopOptions
  }

  const assignNumOfSlidesPerView = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 0

    const { slidesNum } = swiperOptions[currentLayoutKey]

    return slidesNum !== undefined ? slidesNum : 0
  }

  const checkIfSwiperEnabled = () => {
    if (alwaysDisabledOnDesktop && (isLaptopLayout || isDesktopLayout))
      return false

    const slidesPerView = assignNumOfSlidesPerView()

    return !(slidesPerView === slides && slides.length)
  }

  const getSpaceBetween = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 10

    return swiperOptions[currentLayoutKey].spaceBetween
  }

  return (
    <Swiper
      navigation={{
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button'
      }}
      speed={250}
      enabled={checkIfSwiperEnabled()}
      spaceBetween={getSpaceBetween()}
      slidesPerView={assignNumOfSlidesPerView()}
      modules={[Grid]}
      grid={{
        rows: isMultiRow && (isLaptopLayout || isDesktopLayout) ? 2 : 1,
        fill: !isMobileLayout ? 'row' : 'column'
      }}
      autoHeight={autoHeight}
      pagination={
        (isMobileLayout || isTabletLayout) && !topCourses && !hideNavigation
          ? { clickable: true, dynamicBullets: true }
          : false
      }
      className={classNames({
        [stls.container]: true,
        [stls.teachers]: teachers,
        [stls.diplomas]: diplomas,
        [stls.reviews]: reviews,
        [stls.topCourses]: topCourses
      })}>
      {slides &&
        slides.length > 0 &&
        slides.map((slide, idx) => (
          <SwiperSlide key={`slide-${idx}`}>
            {diplomas ? (
              <Popup trigger={<div>{slide}</div>} modal nested>
                <PopupImage image={slide} close={close} />
              </Popup>
            ) : (
              slide
            )}
          </SwiperSlide>
        ))}

      {!hideNavigation && (
        <>
          <div className='custom-prev-button-container'>
            <CustomPrevButton
              reviewPrevBtn={reviewPrevBtn}
              isLiveCourse={isLiveCourse}
            />
          </div>
          <div className='custom-next-button-container'>
            <CustomNextButton
              reviewNextBtn={reviewNextBtn}
              isLiveCourse={isLiveCourse}
            />
          </div>
        </>
      )}
    </Swiper>
  )
}

export default SwiperContainer
