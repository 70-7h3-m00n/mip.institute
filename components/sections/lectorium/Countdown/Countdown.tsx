import stls from './Countdown.module.sass'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import duration from 'dayjs/plugin/duration'
import {
  declensionForDays,
  declensionForHours,
  declensionForMinutes,
  declensionForSeconds
} from '@/helpers/getDeclensions'
import { calculateTimeLeft } from '@/helpers/calculateTimeLeft'
import classNames from 'classnames'

dayjs.extend(duration)

type Props = {
  targetDate?: string
}

const Countdown = ({ targetDate = '2024-12-31T20:59:59.000Z' }: Props) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))
  const [eventOver, setEventOver] = useState(false) // Флаг завершения

  useEffect(() => {
    if (
      timeLeft.totalDaysLeft <= 0 &&
      timeLeft.hoursLeft <= 0 &&
      timeLeft.minutesLeft <= 0 &&
      timeLeft.secondsLeft <= 0
    ) {
      setEventOver(true) // Отмечаем, что событие прошло
      return
    }

    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timerId)
  }, [targetDate, timeLeft])

  if (eventOver) {
    return (
      <div className={classNames(stls.countdown, stls.countdownEnd)}>
        <p className={stls.countdownTitle}>Мероприятие состоялось!</p>
      </div>
    )
  }

  const timeUnits = [
    {
      label: declensionForHours(timeLeft.hoursLeft),
      value: timeLeft.hoursLeft
    },
    {
      label: declensionForMinutes(timeLeft.minutesLeft),
      value: timeLeft.minutesLeft
    },
    {
      label: declensionForSeconds(timeLeft.secondsLeft),
      value: timeLeft.secondsLeft
    }
  ]

  return (
    <div className={stls.countdown}>
      <p className={stls.countdownTitle}>Мероприятие состоится через:</p>
      <div className={stls.daysBlock}>
        <span className={stls.daysNumbers}>{timeLeft.totalDaysLeft}</span>
        <span className={stls.daysText}>
          {declensionForDays(timeLeft.totalDaysLeft)}
        </span>
      </div>
      <div className={stls.blocks}>
        {timeUnits.map((unit, index) => (
          <div key={index} className={stls.item}>
            <p className={stls.block}>
              <span className={stls.value}>
                {unit.value.toString().padStart(2, '0')}
              </span>
              <span className={stls.label}>{unit.label}</span>
            </p>
            {index !== 2 && <span className={stls.divider}>:</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
