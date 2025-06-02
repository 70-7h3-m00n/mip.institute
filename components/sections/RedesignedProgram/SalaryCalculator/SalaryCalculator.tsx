'use client'
import stls from './SalaryCalculator.module.sass'
import { useEffect, useRef, useState } from 'react'
import Wrapper from '@/ui/Wrapper'
import PopupTrigger from '@/ui/PopupTrigger'
import Image from 'next/image'
import pattern from '@/public/assets/imgs/redesignedProgram/SalaryCalculator/patern.png'

type SalaryCalculatorNewType = {}

const calculateInitialPositions = (
  value: number,
  range: { min: number; max: number },
  trackWidth: number = 100 // Запасное значение
) => {
  const thumbWidth = typeof window !== 'undefined' && window.innerWidth <= 768 ? 11 : 25 // px
  const position = range.max === range.min ? 0 : (value - range.min) / (range.max - range.min)
  const thumbPosition = `${position * 100}%`
  const labelPosition = `${((position * (trackWidth - thumbWidth) + thumbWidth / 2 - 2) / trackWidth) * 100}%` // Смещение -2px
  return { thumbPosition, labelPosition }
}

const SalaryCalculatorNew = ({}: SalaryCalculatorNewType) => {
  const [consultation, setConsultation] = useState(5)
  const [consultationsRange] = useState({ min: 1, max: 10 })
  const [days, setDays] = useState(15)
  const [daysRange] = useState({ min: 1, max: 31 })
  const [price, setPrice] = useState(2500)
  const [priceRange] = useState({ min: 1500, max: 5000 })
  const [priceLabelPosition, setPriceLabelPosition] = useState(
    calculateInitialPositions(2500, { min: 1500, max: 5000 }).labelPosition
  )
  const priceInputRef = useRef<HTMLInputElement>(null)

  const overall = (consultation * days * price).toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })

  useEffect(() => {
    if (priceInputRef.current) {
      const trackWidth = priceInputRef.current.offsetWidth || 100
      const { thumbPosition, labelPosition } = calculateInitialPositions(
        price,
        priceRange,
        trackWidth
      )
      priceInputRef.current.style.setProperty('--thumb-position', thumbPosition)
      setPriceLabelPosition(labelPosition)
    }
  }, [])

  const handleRangeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (value: number) => void,
    range: { min: number; max: number },
    setLabelPosition: (position: string) => void
  ) => {
    const value = Number(e.target.value)
    setState(value)
    const trackWidth = e.target.offsetWidth || 100
    const thumbWidth = typeof window !== 'undefined' && window.innerWidth <= 768 ? 11 : 25
    const position = range.max === range.min ? 0 : (value - range.min) / (range.max - range.min)
    const thumbPosition = position * 100
    const labelPosition =
      ((position * (trackWidth - thumbWidth) + thumbWidth / 2 - 10) / trackWidth) * 100 // Смещение -2px
    e.target.style.setProperty('--thumb-position', `${thumbPosition}%`)
    setLabelPosition(`${labelPosition}%`)
  }

  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleRangeChange(e, setPrice, priceRange, setPriceLabelPosition)
  }

  const incrementConsultation = () => {
    if (consultation < consultationsRange.max) {
      setConsultation(consultation + 1)
    }
  }

  const decrementConsultation = () => {
    if (consultation > consultationsRange.min) {
      setConsultation(consultation - 1)
    }
  }

  const incrementDays = () => {
    if (days < daysRange.max) {
      setDays(days + 1)
    }
  }

  const decrementDays = () => {
    if (days > daysRange.min) {
      setDays(days - 1)
    }
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.columns}>
          <div className={stls.column}>
            <h2 className={stls.title}>
              Посчитаем, <span className={stls.violet}>сколько может зарабатывать</span> психолог?
            </h2>
            <div className={stls.inp}>
              <label className={stls.inputLabel}>Стоимость одной консультации</label>
              <div className={stls.inputWithLabel}>
                <input
                  ref={priceInputRef}
                  className={stls.range}
                  step={100}
                  min={priceRange.min}
                  max={priceRange.max}
                  type='range'
                  value={price}
                  onChange={priceHandler}
                  onInput={priceHandler}
                  aria-label='Стоимость консультации'
                  aria-valuenow={price}
                />
                <span style={{ left: priceLabelPosition }} className={stls.label}>
                  {price.toLocaleString('ru-RU')} ₽
                </span>
              </div>
              <div className={stls.minmax}>
                <p>{priceRange.min} ₽</p>
                <p>{priceRange.max} ₽</p>
              </div>
            </div>
          </div>
          <div className={stls.column}>
            <div className={stls.inp}>
              <label className={stls.inputCounter}>Количество консультаций в день</label>
              <div className={stls.counter}>
                <button
                  className={stls.counterButton}
                  onClick={decrementConsultation}
                  aria-label='Уменьшить количество консультаций'>
                  −
                </button>
                <span className={stls.counterValue}>{consultation}</span>
                <button
                  className={stls.counterButton}
                  onClick={incrementConsultation}
                  aria-label='Увеличить количество консультаций'>
                  +
                </button>
              </div>
            </div>
            <div className={stls.inp}>
              <label className={stls.inputCounter}>Количество рабочих дней в месяц</label>
              <div className={stls.counter}>
                <button
                  className={stls.counterButton}
                  onClick={decrementDays}
                  aria-label='Уменьшить количество дней'>
                  −
                </button>
                <span className={stls.counterValue}>{days}</span>
                <button
                  className={stls.counterButton}
                  onClick={incrementDays}
                  aria-label='Увеличить количество дней'>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={stls.result}>
          <Image src={pattern} alt='' className={stls.pattern} aria-hidden='true' />
          <p>Вы сможете зарабатывать в месяц на психологических консультациях</p>
          <p className={stls.overall}>{overall} ₽</p>
        </div>
        <div className={stls.buttonPopup}>
          <PopupTrigger btn='alpha' cta='beginEarn' />
        </div>
      </Wrapper>
    </section>
  )
}

export default SalaryCalculatorNew
