import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './CardForWhom.module.sass'
import { CldImage } from 'next-cloudinary'

type Props = {
  imageSrc: string
  title: string
  description: string
  text?: string
}

const CardForWhom = ({ imageSrc, title, description, text }: Props) => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')

  return (
    <div className={stls.card}>
      <div className={stls.textContent}>
        <span className={stls.title}>{title}</span>
        <span className={stls.description}>{description}</span>
        {text && <span className={stls.text}>{text}</span>}
      </div>
      <div className={stls.image}>
        <CldImage
          src={imageSrc}
          alt='фото'
          height={isMobileLayout ? 220 : 250}
          width={170}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </div>
    </div>
  )
}

export default CardForWhom
