import { useEffect, useState } from 'react'
import stls from './RangeSlide.module.sass'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import { useFilter, useFilterDispatch } from '@/context/FilterContext/FilterContext'
import classNames from 'classnames'

type Props = {
  classNameStyle?: string
  min: number
  max: number
  title: string
  dispatchFilterType: string
  measure: string
  step?: number
}
const RangeSlide = ({
  min,
  max,
  title,
  dispatchFilterType,
  measure,
  step = 1,
  classNameStyle = 'withBlackThumb'
}: Props) => {
  const [value, setValue] = useState([min, max])

  useEffect(() => {
    setValue([min, max])
  }, [min, max])

  const { additional } = useFilter()

  const dispatch = useFilterDispatch()

  useEffect(() => {
    if (additional.reset) {
      setValue([min, max])
    }
    dispatch({
      type: 'setBool',
      payload: false
    })
  }, [additional.reset, dispatch, min, max])

  useEffect(() => {
    dispatch({
      type: dispatchFilterType,
      min: value[0],
      max: value[1]
    })
  }, [value, dispatch, dispatchFilterType])

  return (
    <div className={stls.container}>
      <p>{title}</p>
      {min !== max ? (
        <span className={stls.interval}>
          от {value[0]} до {value[1]} {measure}
        </span>
      ) : (
        <span className={stls.interval}>
          {value[1]} {measure}
        </span>
      )}
      {min !== max && (
        <div
          className={classNames({
            ['withBlackThumb']: true,
            [classNameStyle]: Boolean(classNameStyle)
          })}>
          <RangeSlider
            className={stls.custom}
            min={min}
            max={max}
            value={value}
            step={step}
            onInput={setValue}
          />
        </div>
      )}
    </div>
  )
}

export default RangeSlide
