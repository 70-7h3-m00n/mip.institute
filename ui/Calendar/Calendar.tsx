import React, { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/ru'
import stls from './Calendar.module.sass'
import classNames from 'classnames'
import { GroupData } from '@/types/page/group-supervision/GroupSupervisionSchedule'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ru')

type Props = {
  dates: string[] | GroupData[]
  onDatesFiltered?: (dates: string[]) => void
  selectRange?: boolean
  onSupervisionPagesStyle?: boolean
  defaultValue?: Date
}

type TileClassNameProps = {
  date: Date
  view: string
}

const Calendar = ({
  dates,
  onDatesFiltered,
  selectRange,
  onSupervisionPagesStyle,
  defaultValue
}: Props) => {
  const [isClient, setIsClient] = useState(false)
  const [selectedRange, setSelectedRange] = useState<Date[]>([])
  const eventDatesArray = dates.map(date => dayjs(date).tz('Europe/Moscow').format('YYYY-MM-DD'))

  useEffect(() => {
    setIsClient(true)
  }, [])

  const onClickDayHandler = (date: Date) => {
    if (selectRange) {
      if (onDatesFiltered) {
        onDatesFiltered(['', '']) // Проверяем перед вызовом
      }

      if (selectedRange.length === 0 || selectedRange.length === 2) {
        setSelectedRange([date])
      } else {
        const newRange = [selectedRange[0], date].sort((a, b) => a.getTime() - b.getTime())
        setSelectedRange(newRange)

        const startDate = dayjs(newRange[0]).format('YYYY-MM-DD')
        const endDate = dayjs(newRange[1]).format('YYYY-MM-DD')

        if (onDatesFiltered) {
          onDatesFiltered([startDate, endDate]) // Проверяем перед вызовом
        }
      }
    } else {
      setSelectedRange([date])
    }
  }

  const getTileClassName = ({ date }: TileClassNameProps): string => {
    const currentDate = dayjs(date).format('YYYY-MM-DD')
    let className = ''

    if (typeof dates[0] === 'string') {
      if (eventDatesArray.includes(currentDate)) {
        className = stls.eventDate
      }
    } else {
      ;(dates as GroupData[]).forEach(group => {
        const groupDates = group.dates.map(date => dayjs(date).format('YYYY-MM-DD'))
        if (groupDates.includes(currentDate)) {
          className = stls[group.classEventDate]
        }
      })
    }

    // Подсветка выбранных дат (одна или диапазон)
    if (selectedRange.length > 0) {
      const start = dayjs(selectedRange[0])
      const end = selectedRange[1] ? dayjs(selectedRange[1]) : start
      const current = dayjs(date)

      if (
        (selectRange && current.isSame(start, 'day')) || // Подсветка первой выбранной даты
        (selectedRange.length === 2 && current.isSame(end, 'day')) || // Подсветка второй даты в диапазоне
        (current.isAfter(start, 'day') && current.isBefore(end, 'day')) // Подсветка промежуточных дат
      ) {
        className = `${className} ${stls.selectedDate}`
      }
    }

    return className
  }

  if (!isClient) return null

  return (
    <ReactCalendar
      value={defaultValue}
      selectRange={selectRange}
      onClickDay={onClickDayHandler}
      className={classNames({
        [stls.customCalendar]: onSupervisionPagesStyle,
        [stls.calendar]: !onSupervisionPagesStyle
      })}
      prevLabel={
        <div
          className={classNames({
            [stls.bgArrowCustom]: onSupervisionPagesStyle,
            [stls.bgArrow]: !onSupervisionPagesStyle
          })}>
          <div
            className={classNames({
              [stls.arrowCustom]: onSupervisionPagesStyle,
              [stls.arrow]: !onSupervisionPagesStyle,
              [stls.prev]: true
            })}></div>
        </div>
      }
      nextLabel={
        <div
          className={classNames({
            [stls.bgArrowCustom]: onSupervisionPagesStyle,
            [stls.bgArrow]: !onSupervisionPagesStyle
          })}>
          <div
            className={classNames({
              [stls.arrowCustom]: onSupervisionPagesStyle,
              [stls.arrow]: !onSupervisionPagesStyle
            })}></div>
        </div>
      }
      maxDetail='month'
      minDetail='month'
      tileClassName={getTileClassName}
      formatMonthYear={(locale, date) => dayjs(date).format('MMMM YYYY')}
    />
  )
}

export default Calendar
