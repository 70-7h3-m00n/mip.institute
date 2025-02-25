import stls from '@/styles/components/imgs/footerReviews/Otzovic.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/footerReviews/ucheba.png'

const Ucheba = ({ width = 79, height = 18 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='dzen icon'
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        // placeholder='blur'
        quality={100}
      />
    </div>
  )
}

export default Ucheba