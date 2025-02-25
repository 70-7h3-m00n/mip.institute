import stls from '@/styles/components/imgs/corporateClients/ImgRZHD.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/corporateClients/rZHD.jpg'

const ImgRZHD = ({ name, width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt={name}
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgRZHD
