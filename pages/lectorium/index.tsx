import { useCallback, useEffect, useState } from 'react'
import LectoriumIndexCard from '@/components/cards/LectoriumIndexCard/LectoriumIndexCard'
import routes from '@/config/routes'
import { handleGetStaticProps } from '@/lib/index'
import Wrapper from '@/ui/Wrapper'
import { GetStaticProps } from 'next'
import stls from '@/styles/pages/LectoriumSlug.module.sass'
import FilterTag from '@/components/filters/FilterTag'
import { useRouter } from 'next/router'
import CustomSelect from '@/ui/CustomSelect'
import { lectoriumOptions, lectoriumPriceOptions } from 'constants/customSelect'
import Calendar from '@/ui/Calendar'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/ru'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import SeoPagesLectoriums from '@/components/seo/SeoPageLectoriums'
import Breadcrumbs from '@/ui/Breadcrumbs'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Stub from '@/components/sections/lectorium/Stub/Stub'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ru')
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

type Props = {
  lectoriums: Lectorium[]
}

const LectoriumPage = ({ lectoriums }: Props) => {
  const router = useRouter()
  const today = dayjs()

  const [showPast, setShowPast] = useState(false)
  const [isInternal, setIsInternal] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [priceFilter, setPriceFilter] = useState(null)
  const [filteredDates, setFilteredDates] = useState([null, null])
  const [filteredLectoriums, setFilteredLectoriums] = useState([])
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [dates, setDates] = useState([])

  const handleToggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible)
    setFilteredDates([null, null])
  }

  const handleFilteredDates = dates => {
    setFilteredDates(dates)
  }

  const filterLectoriums = useCallback(() => {
    let baseFilter = lectoriums

    if (selectedType) {
      baseFilter = baseFilter.filter(lect => lect.type === selectedType)
    }

    if (priceFilter) {
      switch (priceFilter) {
        case 'more':
          baseFilter = baseFilter.filter(lect => Number(lect.price) > 0)
          break
        case 'equal':
          baseFilter = baseFilter.filter(lect => lect.price === 'Бесплатно')
          break
        default:
          baseFilter
      }
    }

    

    if (isInternal !== null) {
      baseFilter = baseFilter.filter(lect => lect.isInternal === isInternal)
    }

    baseFilter = baseFilter.filter(lect => {
      const targetDate = dayjs(lect.targetDate).tz('Europe/Moscow')
      const isDateInFuture = targetDate.isAfter(today)

      return showPast ? targetDate.isBefore(today, 'hour') : targetDate.isAfter(today, 'hour')
    })

    if (filteredDates[0] && filteredDates[1]) {
      const startDate = dayjs(filteredDates[0])
      const endDate = dayjs(filteredDates[1])

      baseFilter = baseFilter.filter(lect => {
        const targetDate = dayjs(lect.targetDate)
        return (
          targetDate.isSameOrAfter(startDate, 'day') && targetDate.isSameOrBefore(endDate, 'day')
        )
      })
    }
    let sortedByDate
    if (showPast) {
      sortedByDate = baseFilter.sort((a, b) => dayjs(b.targetDate).diff(dayjs(a.targetDate)))
    } else {
      sortedByDate = baseFilter.sort((a, b) => dayjs(a.targetDate).diff(dayjs(b.targetDate)))
    }

    setFilteredLectoriums(sortedByDate)
    setDates(sortedByDate.map(lectorium => lectorium.targetDate))
  },[filteredDates, isInternal, lectoriums, priceFilter, selectedType, showPast,today])

  useEffect(() => {
    filterLectoriums()
  }, [showPast, selectedType, isInternal, filteredDates, lectoriums, priceFilter, setFilteredDates,filterLectoriums])

  const handleFilterInternalEvents = () => {
    //@ts-ignore
    setIsInternal(true)
  }

  const handleFilterAllEvents = () => {
    setIsInternal(null)
  }

  const handleFilterOutsideEvents = () => {
    //@ts-ignore
    setIsInternal(false)
  }

  const handleSelectChange = (selectedOption: (typeof lectoriumOptions)[0]) => {
    //@ts-ignore
    setSelectedType(selectedOption?.value || null)
  }
  const handleSelectPriceFilter = (selectedOption: (typeof lectoriumPriceOptions)[0]) => {
    //@ts-ignore
    setPriceFilter(selectedOption?.value || null)
  }

  const onClickReset = () => {
    setPriceFilter(null)
    setSelectedType(null)
    setShowPast(true)
  }

  return (
    <>
      <section className={stls.container}>
        <Wrapper>
          <SeoPagesLectoriums />
          <Breadcrumbs isJournal />
          <h1 className={stls.title}>Семинары по психологии</h1>
          <p className={stls.subtitle}>
            Это раздел с образовательными мероприятия, такие как очные мастер классы, супервизии,
            воркшопы и т.п
          </p>
          <div className={stls.tags}>
            

            <FilterTag onClick={handleFilterAllEvents} isActive={isInternal === null} isCategories>
              Все мероприятия
            </FilterTag>
            <FilterTag
              onClick={handleFilterInternalEvents}
              isActive={isInternal === true}
              isCategories>
              Внутренние
            </FilterTag>
            <FilterTag
              onClick={handleFilterOutsideEvents}
              isActive={isInternal === false}
              isCategories>
              Внешние
            </FilterTag>
            <FilterTag onClick={() => router.push('/webinars')} isActive={false} isCategories>
              Вебинары
            </FilterTag>
            <CustomSelect
              onChange={handleSelectChange}
              options={lectoriumOptions}
              // isDisabled={!isInternal}
              radius='50'
              height='30'
              mainColor='#6F6F6F'
              placeholder='Тип'
              value={lectoriumOptions.find(option => option.value === selectedType)}
            />
            <button className={stls.calendarButton} onClick={handleToggleCalendar}>
              Даты &nbsp;
              <span
                className={stls.caret}
                style={{
                  transform: isCalendarVisible
                    ? 'rotate(-90deg) scaleX(.7)'
                    : 'rotate(-270deg) scaleX(.7)'
                }}>
                &gt;
              </span>
            </button>
            <CustomSelect
            onChange={handleSelectPriceFilter}
            options={lectoriumPriceOptions}
            // isDisabled={!isInternal}
            radius='50'
            height='30'
            mainColor='#6F6F6F'
            placeholder='Тип'
            value={lectoriumPriceOptions.find(
              option => option.value === priceFilter
            )}
          />
          <FilterTag isActive={!!showPast} onClick={() => setShowPast(prev => !prev)}>
              Прошедшие
            </FilterTag>
          </div>
          <div className={stls.lectoriumGrid}>
            {isCalendarVisible && (
              <div>
                <Calendar
                  onDatesFiltered={handleFilteredDates}
                  dates={dates}
                  selectRange={true}
                  onSupervisionPagesStyle={false}
                />
              </div>
            )}
            {filteredLectoriums.map(lectorium => (
              //@ts-ignore
              <LectoriumIndexCard key={lectorium?.slug} card={lectorium} />
            ))}
          </div>
          {filteredLectoriums.length === 0 && <Stub onClick={onClickReset} />}
        </Wrapper>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    context,
    page: routes.front.lectoriums
  })

export default LectoriumPage
