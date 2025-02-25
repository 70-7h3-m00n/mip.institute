import stls from '@/styles/components/imgs/general/Horn.module.sass'
import Image, { StaticImageData } from 'next/image'

interface Props {
  url: StaticImageData
  width?: number
  height?: number
}

const Horn = ({ url, width = 569, height = 317 }: Props) => {
  return (
    <div className={stls.container}>
      <Image
        src={url}
        alt='Горн'
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
      />
    </div>
  )
}

export default Horn
