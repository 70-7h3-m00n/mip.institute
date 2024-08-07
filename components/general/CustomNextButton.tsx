import React from 'react'
import stls from '@/styles/components/general/CustomPrevButton.module.sass'
import IconNextButton from '@/components/icons/IconNextButton'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

interface Props {
  reviewNextBtn?: boolean
  happyStudents?: boolean
  teachers?: boolean
  showOnMobile?: boolean
  isLiveCourse?: boolean
  top?: number
  left?: number
  mobileLeft?: number
  mobileTop?: number
}

const CustomNextButton = ({
  reviewNextBtn = false,
  happyStudents = false,
  teachers = false,
  left = 0,
  top = 0,
  mobileTop = 0,
  mobileLeft = 0,
  showOnMobile = false,
  isLiveCourse = false
}: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <div
      style={{
        transform: `translate(${
          isMobileAndTabletLayout ? mobileLeft : left
        }px, ${isMobileAndTabletLayout ? mobileTop : top}px)`,
        opacity: isMobileAndTabletLayout && !showOnMobile ? 0 : 1
      }}
      className={classNames({
        [stls.containerNext]: true,
        [stls.reviewNextBtn]: reviewNextBtn,
        [stls.happyStudentsNextBtn]: happyStudents,
        [stls.teachersNextBtn]: teachers,
        [stls.liveCourses]: isLiveCourse
      })}>
      <button className='custom-next-button'>
        <IconNextButton />
      </button>
    </div>
  )
}

export default CustomNextButton
