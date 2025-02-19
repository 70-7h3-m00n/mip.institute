import { base64pixel } from '@/config/index'
import stls from '@/styles/components/imgs/general/ForPopup.module.sass'
import Image from 'next/image'

const ForPopup = ({ src, alt, width = 135, height = 117 }) => {
  return (
    // <div className={stls.container}>
    <Image
      src={src}
      alt={alt}
      className={stls.img}
      width={width !== 0 && width || undefined}
      height={height !== 0 && height || undefined}
      placeholder='blur'
      blurDataURL={base64pixel}
      quality={100}
    />
    // {/* </div> */}
  )
}

export default ForPopup
