import { useFilterDispatch } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/filters/FiltersForLifeCourses.module.sass'
import { useRouter } from 'next/router'
import RangeSlide from '@/ui/RangeSlide'
import FilterContainer from './FilterContainer'
import FilterWithToggle from './FilterWithToggle'

const Filters = ({ cost, duration }) => {
  const dispatch = useFilterDispatch()

  const router = useRouter()
  const { query } = router
  const { opened } = query

  const handleSetPopularCourses = () => {
    if (!opened) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, opened: true }
      })
      dispatch({
        type: 'sortFilter',
        payload: { field: 'price', direction: 'desc' }
      })
    } else {
      const { opened, ...rest } = router.query
      router.push({
        pathname: router.pathname,
        query: rest
      })
      dispatch({
        type: 'sortFilter',
        payload: { field: '', direction: '' }
      })
    }
  }

  return (
    <div className={stls.filters}>
      <FilterContainer>
        <FilterWithToggle
          checked={opened}
          description={'Идет набор'}
          onChange={handleSetPopularCourses}
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
          step={1}
          measure={'руб.'}
        />
      </FilterContainer>
    </div>
  )
}

export default Filters
