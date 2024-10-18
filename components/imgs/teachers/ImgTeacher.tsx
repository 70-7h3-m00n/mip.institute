import stls from '@/styles/components/imgs/teachers/ImgTeacher.module.sass'
import Image from 'next/image'
import { base64pixel } from '@/config/index'

const ImgTeacher = ({ src, alt, width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={src}
        alt={alt}
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
        blurDataURL={base64pixel}
        style={{
          width: '100%'
        }}
      />
    </div>
  )
}

export default ImgTeacher
