import stls from './ArrowButton.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'

const Icon = () => {
  return (
    <span className={stls.iconContainer}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='29'
        height='29'
        viewBox='0 0 29 29'
        fill='none'>
        <path
          d='M9.66927 19.3346L19.3359 9.66797M19.3359 9.66797V16.918M19.3359 9.66797H12.0859'
          stroke='#212121'
          strokeWidth='1.36707'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

interface Props {
  href: string
}

const ArrowButton = ({ href }: Props) => {
  return (
    <Link className={stls.btn} href={routes.front[href] || ''} target={'_blank'} passHref>
      <Icon />
    </Link>
  )
}

export default ArrowButton
