import {
  useFilterDispatch,
  useFilteredItems
} from '@/context/FilterContext/FilterContext'
import { findFilteredProgramsLength } from '@/helpers/general/findFilteredProgramsLength'
import { findProgramsLength } from '@/helpers/general/findProgramsLength'
import { findProgrmasLengthByCustomProperty } from '@/helpers/general/findProgrmasLengthByCustomProperty'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/program/ProgramsFilters.module.sass'
import { useRouter } from 'next/router'
import FilterTag from '../filters/FilterTag'
import ProgramSelect from '../program/ProgramSelect'

const ProgramsFilters = ({
  studyFields = [],
  allPrograms = [],
  bachelors = [],
  practicalTrainings = []
}) => {
  const dispatch = useFilterDispatch()

  const filteredItems = useFilteredItems()

  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const handleSelect = (value: any) => {
    // @ts-ignore
    dispatch({
      type: 'sortFilter',
      payload: value.value
    })
  }

  const handleTag = e => {
    const { ofType, studyFieldSlug, ...rest } = router.query
    if (e.value === studyFieldSlug) {
      return null
    }

    router.push({
      pathname: `/${ofType}/${e.value}`,
      query: rest
    })
  }

  const router = useRouter()

  const { query } = router

  const { ofType, studyFieldSlug, filter } = query

  const handleNavigation = (destination: string) => {
    const { ofType, studyFieldSlug, ...rest } = router.query
    console.log(ofType, studyFieldSlug, destination);
    
    router.push({
      pathname: destination,
      query: rest
    })
  }
  const handleSetPopularCourses = () => {
    if (filter !== 'popular') {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, filter: 'popular' }
      })
    } else {
      const { filter, ...rest } = router.query
      router.push({
        pathname: router.pathname,
        query: rest
      })
    }
  }

  const options = studyFields.map(el => ({
    // @ts-ignore
    value: el.studyFieldSlug,
    // @ts-ignore
    label: el.studyField
  }))
// @ts-ignore
  const favprograms = allPrograms.filter(el => el.isPopular === true)

  return (
    <div className={stls.container}>
      <div className={stls.sorting}>
        <FilterTag
          onClick={() => handleNavigation('/programs')}
          isActive={ofType === 'programs'}
          quantity={
            ofType === 'programs' && !studyFieldSlug
              ? findProgramsLength(filteredItems, 'programs')
              : filter === 'popular'
                ? favprograms?.length
                : ofType === 'programs' && studyFieldSlug
                  ? findProgramsLength(allPrograms, 'programs') -
                    findFilteredProgramsLength(
                      allPrograms,
                      studyFieldSlug,
                      ofType as string
                    ) +
                    findFilteredProgramsLength(
                      filteredItems,
                      studyFieldSlug,
                      ofType as string
                    )
                  : findProgramsLength(allPrograms, 'programs')
          }
          isProgram>
          Все курсы
        </FilterTag>

        <FilterTag
          onClick={() => handleNavigation('/professions')}
          withPopup
          popupText='Программы профессиональной переподготовки рассчитаны на тех, кто решил освоить новую профессию с нуля. Длительность обучения — от 6 до 24 месяцев в зависимости от выбранного направления. По окончании обучения выдаются диплом о профессиональной переподготовке установленного образца (заносится в реестр ФИС ФРДО) и международное приложение к диплому Supplement. Присваиваемая квалификация и дополнительная специализация зависят от направления обучения. '
          isActive={ofType === 'professions'}
          quantity={
            ofType === 'professions' && !studyFieldSlug
              ? findProgramsLength(filteredItems, 'professions')
              : filter === 'popular'
                ? favprograms?.length
                : ofType === 'professions' && studyFieldSlug
                  ? findProgramsLength(allPrograms, 'professions') -
                    findFilteredProgramsLength(
                      allPrograms,
                      studyFieldSlug,
                      ofType as string
                    ) +
                    findFilteredProgramsLength(
                      filteredItems,
                      studyFieldSlug,
                      ofType as string
                    )
                  : findProgramsLength(allPrograms, 'professions')
          }
          isProgram>
          Профессиональная переподготовка
        </FilterTag>

        <FilterTag
          onClick={() => handleNavigation('/courses')}
          withPopup
          popupText='Программы повышения квалификации подходят тем, кто хочет углубить
          знания и получить новые навыки по профилю своей деятельности.
          Длительность обучения — от 1 до 6 месяцев. Выпускники получают
          удостоверение о повышении квалификации установленного образца
          (заносится в реестр ФИС ФРДО).'
          isActive={ofType === 'courses'}
          quantity={
            ofType === 'courses' && !studyFieldSlug
              ? findProgramsLength(filteredItems, 'courses')
              : filter === 'popular'
                ? findProgramsLength(favprograms, 'courses')
                : ofType === 'courses' && studyFieldSlug
                  ? findProgramsLength(allPrograms, 'courses') -
                    findFilteredProgramsLength(
                      allPrograms,
                      studyFieldSlug,
                      ofType as string
                    ) +
                    findFilteredProgramsLength(
                      filteredItems,
                      studyFieldSlug,
                      ofType as string
                    )
                  : findProgramsLength(allPrograms, 'courses')
          }
          isProgram>
          Повышение квалификации
        </FilterTag>

        {bachelors.length > 0 && (
          <FilterTag
            onClick={() => handleNavigation('/bachelor')}
            isActive={router.asPath === '/bachelor'}
            quantity={bachelors.length.toString()}
            isProgram>
            Высшее образование
          </FilterTag>
        )}

        {practicalTrainings.length > 0 && (
          <FilterTag
            onClick={() => handleNavigation('/practical-training')}
            isActive={router.asPath === '/practical-training'}
            quantity={(practicalTrainings.length + 1).toString()}
            isProgram>
            Практические навыки
          </FilterTag>
        )}

        {/* {findProgramsLength(allPrograms, 'practice') > 0 && (
          <FilterTag
            onClick={() => handleNavigation('/practice')}
            isActive={ofType === 'practice'}
            quantity={
              ofType === 'practice' && !studyFieldSlug
                ? findProgramsLength(filteredItems, 'practice')
                : ofType === 'practice' && studyFieldSlug
                  ? findProgramsLength(allPrograms, 'practice') -
                    findFilteredProgramsLength(
                      allPrograms,
                      studyFieldSlug,
                      ofType as string
                    ) +
                    findFilteredProgramsLength(
                      filteredItems,
                      studyFieldSlug,
                      ofType as string
                    )
                  : findProgramsLength(allPrograms, 'practice')
            }
            isProgram>
            Практическая подготовка
          </FilterTag>
        )} */}
        {findProgramsLength(allPrograms, 'shortTerm') > 0 && (
          <FilterTag
          onClick={() => handleNavigation('/shortTerm')}
          // withPopup
          // position='right center'
          // popupText='Программы повышения квалификации подходят тем, кто хочет углубить
          // знания и получить новые навыки по профилю своей деятельности.
          // Длительность обучения — от 1 до 6 месяцев. Выпускники получают
          // удостоверение о повышении квалификации установленного образца
          // (заносится в реестр ФИС ФРДО).'
          isActive={ofType === 'shortTerm'}
          quantity={
             findProgramsLength(allPrograms, 'shortTerm')
          }
          isProgram>
          Курсы
        </FilterTag> 
        )}
         

        <FilterTag
          onClick={handleSetPopularCourses}
          isActive={filter === 'popular'}
          quantity={findProgrmasLengthByCustomProperty(
            filteredItems,
            'isPopular',
            true
          )}
          isProgram>
          Популярные курсы
        </FilterTag>
        {!isMobileAndTabletLayout && <ProgramSelect onChange={handleSelect} />}
      </div>

      <div className={stls.categories}>
        {!isMobileAndTabletLayout &&
          studyFields.map((el, i) => (
            <FilterTag
            // @ts-ignore
              key={el.studyField + i}
              onClick={() =>
                // @ts-ignore
                handleNavigation(`/${ofType}/${el.studyFieldSlug}`)
              }
              // @ts-ignore
              isActive={studyFieldSlug === el.studyFieldSlug}
              quantity={
                // @ts-ignore
                studyFieldSlug === el.studyFieldSlug
                  ? findFilteredProgramsLength(
                      filteredItems,
                      // @ts-ignore
                      el.studyFieldSlug,
                      ofType as string
                    )
                  : !studyFieldSlug
                    ? findFilteredProgramsLength(
                        filteredItems,
                        // @ts-ignore
                        el.studyFieldSlug,
                        ofType as string
                      )
                    : findFilteredProgramsLength(
                        allPrograms,
                        // @ts-ignore
                        el.studyFieldSlug,
                        ofType as string,
                        filter as string
                      )
              }
              isCategories>

              {
              // @ts-ignore
              el.studyField}
            </FilterTag>
          ))}
      </div>
      {isMobileAndTabletLayout && (
        <div className={stls.mobileSelect}>
          <ProgramSelect
            options={options}
            onChange={handleTag}
            mainColor='#fb6c2e'
            width='345'
          />
          <ProgramSelect onChange={handleSelect} marginTop='10' />
        </div>
      )}
    </div>
  )
}

export default ProgramsFilters
