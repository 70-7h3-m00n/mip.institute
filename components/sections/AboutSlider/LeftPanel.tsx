import IconNextButton from '@/components/icons/IconNextButton'
import IconPrevButton from '@/components/icons/IconPrevButton'
import stls from '@/styles/components/sections/AboutSlider/LeftPanel.module.sass'

interface Props {
  isLiveCourse?: boolean
  currentIndex?: number
  component?: JSX.Element[]
  onArrowClick: (direction: any) => void
}
const LeftPanel = ({ component, onArrowClick, currentIndex, isLiveCourse }: Props) => {
  return (
    <div className={stls.container}>
      {component?.map((slide, index) => (
        <div key={index} className={index === currentIndex ? stls.block : stls.hidden}>
          {slide}
        </div>
      ))}

      <div onClick={() => onArrowClick('left')} className={stls.prevBtn}>
        <IconPrevButton
          fourtyPx
          fourtyPxViolet={currentIndex === 2 ? true : false}
          isLiveCourse={isLiveCourse}
        />
      </div>
      <div onClick={() => onArrowClick('right')} className={stls.nextBtn}>
        <IconNextButton
          fourtyPx
          fourtyPxViolet={currentIndex === 2 ? true : false}
          isLiveCourse={isLiveCourse}
        />
      </div>
    </div>
  )
}

export default LeftPanel
