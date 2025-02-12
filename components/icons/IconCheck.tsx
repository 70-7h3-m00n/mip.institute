import stls from '@/styles/components/icons/IconCheck.module.sass'

export default function IconCheck({ noBackground = false }) {
  return noBackground ? (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='12'
        viewBox='0 0 14 12'
        fill='none'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.11531 8.48459L12.4773 0L14 1.76056L5.11531 12L0 6.10468L1.52271 4.34416L5.11531 8.48459Z'
          fill='#FF8F52'
        />
      </svg>
    </span>
  ) : (
    <span className={stls.container}>
      <svg
        className={stls.svg}
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect width='20' height='20' rx='10' fill='none' />
        <path
          d='M13.3158 8L9.10526 12.2106L7 10.1053'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}
