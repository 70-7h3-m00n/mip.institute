import React from 'react'
import stls from './SliderNavigation.module.sass'

interface Props {
  onPrev: () => void
  onNext: () => void
}

const SliderNavigation = ({ onPrev, onNext }: Props) => {
  return (
    <div className={stls.navigationContainer}>
      <button onClick={onPrev} className={stls.btnPrev}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'>
          <rect width='40' height='40' rx='20' fill='white' />
          <path
            d='M14.5 20.866C13.8333 20.4811 13.8333 19.5189 14.5 19.134L22 14.8038C22.6667 14.4189 23.5 14.9001 23.5 15.6699L23.5 24.3301C23.5 25.0999 22.6667 25.5811 22 25.1962L14.5 20.866Z'
            fill='#6F01C6'
          />
        </svg>
      </button>
      <button onClick={onNext} className={stls.btnNext}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'>
          <rect
            x='40'
            y='40'
            width='40'
            height='40'
            rx='20'
            transform='rotate(-180 40 40)'
            fill='white'
          />
          <path
            d='M25.5 19.134C26.1667 19.5189 26.1667 20.4811 25.5 20.866L18 25.1962C17.3333 25.5811 16.5 25.0999 16.5 24.3301L16.5 15.6699C16.5 14.9001 17.3333 14.4189 18 14.8038L25.5 19.134Z'
            fill='#6F01C6'
          />
        </svg>
      </button>
    </div>
  )
}

export default SliderNavigation
