import stls from '@/styles/components/imgs/webinars/ImgWebinar.module.sass'
import Image from 'next/image'
import { base64pixel } from '@/config/index'

const ImgWebinar = ({ src, alt, width = 0, height = 0 }) => {
  return (
    <span className={stls.container}>
      <Image
        src={src}
        alt={alt}
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
        blurDataURL={base64pixel}
      />
    </span>
  )
}

export default ImgWebinar
