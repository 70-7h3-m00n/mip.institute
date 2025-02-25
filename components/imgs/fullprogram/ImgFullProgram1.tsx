import Image from 'next/image'
import pic from '@/public/assets/imgs/fullprogram/fullprogram1.jpg'

const ImgFullProgram1 = ({ width = 0, height = 0 }) => {
  return (
    <div>
      <Image
        src={pic}
        alt='Полная программа'
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgFullProgram1
