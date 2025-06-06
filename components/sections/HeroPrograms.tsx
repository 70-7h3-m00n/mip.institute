import FiltersForLifeCourses from '@/components/filters/FiltersForLifeCourses'
import Wrapper from '@/ui/Wrapper'
import { useFilter, useFilterDispatch } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import { useRouter } from 'next/router'
import FiltersForLifeCoursesMobile from '../filters/FiltersForLifeCoursesMobile'
import titleName from '@/helpers/funcs/titleNameFunction'
import InputSearch from '@/ui/InputSearch'

type MinMax =
  | {
      min: number
      max: number
    }
  | undefined

type Props = {
  minmaxDuration: MinMax
  minmaxPrice: MinMax
}

const HeroPrograms = ({ minmaxDuration, minmaxPrice }: Props) => {
  const { asPath } = useRouter()
  const dispatch = useFilterDispatch()
  const { filters } = useFilter()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    dispatch({
      type: 'setInputValue',
      payload: value
    })
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h1 className={stls.title}>{titleName(asPath)}</h1>
          <div className={stls.input}>
            <InputSearch value={filters.input.text} onChange={changeHandler} isProgram />
            <FiltersForLifeCoursesMobile btnTitle={'Показать курсы'} isProgram>
              <FiltersForLifeCourses cost={minmaxPrice} duration={minmaxDuration} />
            </FiltersForLifeCoursesMobile>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
