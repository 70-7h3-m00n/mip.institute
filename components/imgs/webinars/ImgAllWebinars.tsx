import stls from '@/styles/components/imgs/webinars/ImgAllWebinars.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/webinars/all-webinars.jpg'

const ImgAllWebinars = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Портрет 1'
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        objectFit='cover'
        placeholder='blur'
      />
    </div>
  )
}

export default ImgAllWebinars
