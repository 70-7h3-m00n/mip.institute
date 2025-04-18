import stls from '@/styles/components/imgs/reviews/ImgReview.module.sass'
import Image from 'next/image'
import { base64pixel } from '@/config/index'

const ImgReview = ({ src, alt, width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={src}
        alt={alt}
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
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

export default ImgReview
