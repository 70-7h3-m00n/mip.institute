import stls from '@/styles/components/btns/BtnFields.module.sass'
import IconMenu from '@/components/icons/IconMenu'
import { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { closeFieldsTooltipOnOuterClick } from '@/helpers/index'
import Wrapper from '@/ui/Wrapper'
import MainStudyFields from '../sections/MainStudyFields'
import StudyFieldsOnMain from '../sections/StudyFieldsOnMain'

const BtnFields = () => {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(FieldsTooltipContext)

  useEffect(() => {
    closeFieldsTooltipOnOuterClick(closeFieldsTooltip)
  }, [])

  const [currentType, setCurrentType] = useState(null)

  return (
    <Wrapper>
      <div id='btnFieldsContainer' className={stls.container}>
        <button className={stls.btn} onClick={toggleFieldsTooltip}>
          <span className={stls.icon}>
            <IconMenu />
          </span>
          <span className={stls.text}>Программы обучения</span>
        </button>
        <div
          className={classNames({
            [stls.tooltip]: true,
            [stls.isShown]: fieldsTooltipIsOpen
          })}>
          <MainStudyFields
          // @ts-ignore
            currentType={currentType}
            // @ts-ignore
            setCurrentType={setCurrentType}
          />
          <StudyFieldsOnMain
          // @ts-ignore
            currentType={currentType}
            ofType={currentType}
            orang
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default BtnFields
