import Image from 'next/image'
import pic from '@/public/assets/imgs/general/handsForGratefull.png'

const HandsForGratefull = ({ width = 300, height = 400 }) => {
  return (
    <div>
      <Image
        src={pic}
        alt='Девушка за ноутбуком обучается'
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
      />
    </div>
  )
}

export default HandsForGratefull
