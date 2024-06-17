import stls from '@/styles/components/imgs/legal/ImgLicence.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/legal/licence.jpg'
import ochuVoMip from '@/public/assets/imgs/legal/ochu_vo_mip_license.png'

type Props = {
  width?: number
  height?: number
  isOchuVoMip?: boolean
}

const ImgLicence = ({ width = 0, height = 0, isOchuVoMip }) => {
  return (
    <span className={stls.container}>
      <Image
        src={isOchuVoMip ? ochuVoMip : pic}
        alt='Лицензия'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </span>
  )
}

export default ImgLicence
