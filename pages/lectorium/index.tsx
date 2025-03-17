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

  const [showPast, setShowPast] = useState<boolean>(false)
  const [isInternal, setIsInternal] = useState<boolean | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [priceFilter, setPriceFilter] = useState<string | null>(null)
  const [filteredDates, setFilteredDates] = useState<[string | null, string | null]>([null, null])
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [filteredLectoriums, setFilteredLectoriums] = useState<Lectorium[]>([])
  const [dates, setDates] = useState<string[]>([])
  console.log(filteredLectoriums, 'filteredLectoriums')

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
      return showPast ? targetDate.isBefore(today, 'hour') : targetDate.isAfter(today, 'hour')
    })

    if (filteredDates[0] && filteredDates[1]) {
      const [startDate, endDate] = filteredDates.map(date => dayjs(date))
      baseFilter = baseFilter.filter(lect => {
        const targetDate = dayjs(lect.targetDate)
        return (
          targetDate.isSameOrAfter(startDate, 'day') && targetDate.isSameOrBefore(endDate, 'day')
        )
      })
    }

    const sortedByDate = baseFilter.sort((a, b) =>
      showPast
        ? dayjs(b.targetDate).diff(dayjs(a.targetDate))
        : dayjs(a.targetDate).diff(dayjs(b.targetDate))
    )

    // Проверяем, изменились ли данные перед установкой состояния
    if (JSON.stringify(filteredLectoriums) !== JSON.stringify(sortedByDate)) {
      setFilteredLectoriums(sortedByDate)
    }

    const newDates = sortedByDate.map(lectorium => lectorium.targetDate)
    if (JSON.stringify(dates) !== JSON.stringify(newDates)) {
      setDates(newDates)
    }
  }, [
    filteredDates,
    isInternal,
    lectoriums,
    priceFilter,
    selectedType,
    showPast,
    today,
    dates,
    filteredLectoriums
  ])

  useEffect(() => {
    filterLectoriums()
  }, [filterLectoriums])

  const handleFilterInternalEvents = () => {
    setIsInternal(true)
  }

  const handleFilterAllEvents = () => {
    setIsInternal(null)
  }

  const handleFilterOutsideEvents = () => {
    setIsInternal(false)
  }

  const handleSelectChange = (selectedOption: (typeof lectoriumOptions)[0]) => {
    setSelectedType(selectedOption?.value || null)
  }
  const handleSelectPriceFilter = (selectedOption: (typeof lectoriumPriceOptions)[0]) => {
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
              radius='50'
              height='30'
              mainColor='#6F6F6F'
              placeholder='Тип'
              value={lectoriumPriceOptions.find(option => option.value === priceFilter)}
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
            {filteredLectoriums.length !== 0 && filteredLectoriums.map((lectorium: Lectorium, index) => (
              <LectoriumIndexCard key={lectorium?.slug || index} card={lectorium} />
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
