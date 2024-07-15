import {
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/filters/FiltersForLifeCourses.module.sass'
import { useState } from 'react'
import RangeSlide from '../general/RangeSlide'
import FilterContainer from './FilterContainer'
import FilterWithToggle from './FilterWithToggle'

const FiltersWithContext = ({ cost, duration }) => {
  const dispatch = useFilterDispatch()
  const { filters } = useFilter()
  const handleRecruitment = () => {
    if (!filters.courseOpened) {
      dispatch({
        type: 'setBooleanFilter',
        filterName: 'courseOpened'
      })
    } else {
      dispatch({
        type: 'clearBooleanFilter',
        filterName: 'courseOpened'
      })
    }
  }

  return (
    <div className={stls.filters}>
      <FilterContainer>
        <FilterWithToggle
          checked={filters.courseOpened}
          description={'Идет набор'}
          onChange={handleRecruitment}
        />
      </FilterContainer>

      <FilterContainer>
        <RangeSlide
          dispatchFilterType={'setDurationFilter'}
          title={'Длительность программы'}
          min={duration.min}
          max={duration.max}
          measure={'месяцев'}
        />
      </FilterContainer>

      <FilterContainer>
        <RangeSlide
          dispatchFilterType={'setPriceFilter'}
          title={'Стоимость программы'}
          min={cost.min}
          max={cost.max}
          step={100}
          measure={'руб.'}
          // classNameStyle='eeeeee'
        />
      </FilterContainer>
    </div>
  )
}

export default FiltersWithContext