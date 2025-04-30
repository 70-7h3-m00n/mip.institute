import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './CubicBlockThreeSide.module.sass'
import PopupTrainSteps from '@/components/popups/PopupTrainSteps'
import { CldImage } from 'next-cloudinary'
import classNames from 'classnames'
import Link from 'next/link'

interface Props {
  title: string
  subtitle: string
  src: string
  mobHeight: number
  fullText: any
  isActive?: boolean
  link: string
  onClick?: () => void
}

const CubicBlockThreeSide = ({
  title,
  subtitle,
  src,
  mobHeight,
  fullText,
  isActive,
  onClick,
  link
}: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <div className={classNames(stls.scene, { [stls.active]: isActive })} onClick={onClick}>
      <div
        className={stls.card}
        style={isMobileAndTabletLayout ? { height: `${mobHeight}px` } : {}}>
        <div className={stls.icon}>
          <PopupTrainSteps title={title} text={fullText} />
        </div>
        <div className={stls.text}>
          <Link href={link} target='_blank' className={stls.title}>
            {title}
            <span className={stls.licenseLink}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 10 10'
                fill='black'>
                <path opacity='1' d='M1 7L7 1M7 1H1M7 1V7' stroke='black' strokeWidth='1' />
              </svg>
            </span>
          </Link>
          <p className={stls.subtitle}>{subtitle}</p>
        </div>
        <div className={stls.image}>
          <CldImage src={src} unoptimized alt='Шаги' width={191} height={305} />
        </div>
      </div>
    </div>
  )
}

export default CubicBlockThreeSide
