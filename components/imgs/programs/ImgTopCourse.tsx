import stls from '@/styles/components/imgs/programs/ImgTopCourse.module.sass'
import Image from 'next/image'
import { base64pixel } from '@/config/index'
import { FC } from 'react'

interface ImgTopCourseProps {
  src?: string
  alt?: string
  width?: number
  height?: number
}

const ImgTopCourse: FC<ImgTopCourseProps> = ({ src, alt, width = 300, height = 200 }) => {
  const validSrc = src || base64pixel

  return (
    <div className={stls.container}>
      <Image
        src={validSrc}
        alt={alt || 'Изображение курса'}
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
        blurDataURL={base64pixel}
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </div>
  )
}

export default ImgTopCourse
