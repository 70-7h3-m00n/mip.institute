import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import FilterTag from '@/components/filters/FilterTag'
import {
  useFilter,
  useFilterDispatch
} from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/filters/FiltersWithTag.module.sass'
import InputSearch from '@/ui/InputSearch'
import ProgramSelect from '../program/ProgramSelect'
import FiltersForLifeCoursesMobile from './FiltersForLifeCoursesMobile'

interface FilterTagProps {
  minmaxDuration: {
    min: number
    max: number
  }
  minmaxPrice: {
    min: number
    max: number
  }
}
const FiltersWithTag = ({ minmaxPrice, minmaxDuration }: FilterTagProps) => {
  const dispatch = useFilterDispatch()

  const { filters } = useFilter()

  const changeHandler = e => {
    // @ts-ignore
    dispatch({
      type: 'setInputValue',
      payload: e.target.value
    })
  }

  const handleSelect = (value: any) => {
    // @ts-ignore
    dispatch({
      type: 'sortFilter',
      payload: value.value
    })
  }

  return (
    <div className={stls.filtersWithTags}>
      <div className={stls.tags}>
        <FilterTag
          onClick={() =>
            // @ts-ignore
            dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
          }
          isActive={!filters.isPopular}>
          Все курсы
        </FilterTag>
        <FilterTag
          onClick={() =>
            // @ts-ignore
            dispatch({ type: 'setBooleanFilter', filterName: 'isPopular' })
          }
          isActive={filters.isPopular}>
          Популярные курсы
        </FilterTag>
        <ProgramSelect onChange={handleSelect} marginTop='0' />
      </div>

      <div className={stls.filtersWithInput}>
        <InputSearch value={filters.input.text} onChange={changeHandler} />
        <FiltersForLifeCoursesMobile btnTitle={'Показать курсы'}>
          <FiltersForLifeCourses cost={minmaxPrice} duration={minmaxDuration} />
        </FiltersForLifeCoursesMobile>
      </div>
    </div>
  )
}

export default FiltersWithTag
