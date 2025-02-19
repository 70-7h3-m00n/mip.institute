import stls from '@/styles/components/imgs/general/Dzen.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/dzen.png'

const Dzen = ({ width = 22, height = 22 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='dzen icon'
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        quality={100}
      />
    </div>
  )
}

export default Dzen