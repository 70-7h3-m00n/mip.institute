import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import ProgramsFilters from '@/components/program/ProgramsFilters'
import Wrapper from '@/ui/Wrapper'
import HeroPrograms from '@/components/sections/HeroPrograms'
import {
  useFilter,
  useFilterDispatch,
  useFilteredItems
} from '@/context/FilterContext/FilterContext'
import { sortBasedOnNumericOrder } from '@/helpers/index'
import stls from '@/styles/components/sections/Programs.module.sass'
import { TypeLibPrograms } from '@/types/index'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import CardProfession from '../cards/CardProfession'
import ResetFilter from '../filters/ResetFilter'
import { findMinMaxForSlider } from '@/helpers/funcs/findMinMaxForSlider'
import { getUniqueCategories } from '@/helpers/funcs/getUniqueCategories'
import Breadcrumbs from '@/ui/Breadcrumbs'
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/sections/ContactForm'))

type PagesProgramsType = {
  programs?: TypeLibPrograms
  bachelors?: any[]
  practicalTrainings?: any[]
  studyFields?: string[]
  allPrograms: any[]
}

const PagesPrograms = ({
  programs,
  studyFields,
  allPrograms,
  bachelors,
  practicalTrainings
}: PagesProgramsType) => {
  const { filters } = useFilter()
  let filteredItems = useFilteredItems()

  const dispatch = useFilterDispatch()

  const categories = getUniqueCategories(filteredItems)

  const prices = programs && programs.map(el => el?.price)
  const programsDuration =
    programs && programs.map(el => el?.studyMounthsDuration)
  const minmaxDuration =
    programsDuration && findMinMaxForSlider(programsDuration)
  const minmaxPrice = prices && findMinMaxForSlider(prices)

  useEffect(() => {
    // @ts-ignore
    dispatch({
      type: 'setDurationFilter',
      min: minmaxDuration?.min,
      max: minmaxDuration?.max
    })
    // @ts-ignore
    dispatch({
      type: 'setPriceFilter',
      min: minmaxPrice?.min,
      max: minmaxPrice?.max
    })
    // @ts-ignore
    dispatch({ type: 'setItems', payload: programs })
  }, [
    programs,
    dispatch,
    minmaxDuration?.max,
    minmaxDuration?.min,
    minmaxPrice?.max,
    minmaxPrice?.min
  ])

  const router = useRouter()

  const { query } = router
  const { filter, opened } = query

  const favprograms = allPrograms.filter(el => el.isPopular === true)

  const favcategories = getUniqueCategories(favprograms)

  useEffect(() => {
    if (filter === 'popular') {
      // @ts-ignore
      dispatch({ type: 'setBooleanFilter', filterName: 'isPopular' })
    } else {
      // @ts-ignore
      dispatch({ type: 'clearBooleanFilter', filterName: 'isPopular' })
    }
  }, [filter, dispatch])

  useEffect(() => {
    if (opened) {
      // @ts-ignore
      dispatch({ type: 'setBooleanFilter', filterName: 'courseOpened' })
    } else {
      // @ts-ignore
      dispatch({ type: 'clearBooleanFilter', filterName: 'courseOpened' })
    }
  }, [opened, dispatch])

  const handleResetFilters = () => {
    const { ofType, studyFieldSlug, ...rest } = router.query
    router.push({
      pathname: '/programs',
      query: null
    })
  }

  const sortedPrograms = useMemo(() => {
    return sortBasedOnNumericOrder({
      programs: filteredItems,
      sortField: filters.sort?.field,
      sortDirection: filters.sort?.direction
    })
  }, [filteredItems, filters.sort])

  return (
    <>
      <Wrapper>
        <Breadcrumbs isJournal />
      </Wrapper>
      
      <HeroPrograms 
      // @ts-ignore
       minmaxDuration={minmaxDuration} minmaxPrice={minmaxPrice} />
      <section className={stls.container}>
        <div className={stls.sorting}>
          <ProgramsFilters
          // @ts-ignore
            bachelors={bachelors} practicalTrainings={practicalTrainings} allPrograms={allPrograms}
            // @ts-ignore
            studyFields={
              query.studyFieldSlug && filter === 'popular'
                ? favcategories
                : query.studyFieldSlug
                  ? studyFields
                  : categories
            }
          />
        </div>
        <Wrapper>
          <div className={stls.filters}>
            <ResetFilter onClick={handleResetFilters} onIndex />
            {minmaxDuration && minmaxPrice && (
              <FiltersForLifeCourses cost={minmaxPrice} duration={minmaxDuration} />
            )}
          </div>

          <div className={stls.content}>
            <div className={stls.programs}>
              {sortedPrograms?.length > 0 ? (
                sortedPrograms?.map((profession, idx) => (
                  <CardProfession key={`${profession.price}+${idx}`} profession={profession} />
                ))
              ) : (
                <>Кажется, что по вашему запросу ничего не нашлось</>
              )}
            </div>
          </div>
        </Wrapper>
      </section>
      <ContactForm />
    </>
  )
}

export default PagesPrograms
