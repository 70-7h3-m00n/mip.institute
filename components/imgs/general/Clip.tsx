import stls from '@/styles/components/imgs/general/Clip.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/clip.png'

const Clip = ({ width = 51, height = 110 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='clip'
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
        quality={100}
      />
    </div>
  )
}

export default Clip