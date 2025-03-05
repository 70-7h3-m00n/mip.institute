import Image from 'next/image'
import pic from '@/public/assets/imgs/programs/courses/license.png'

const License = ({ width = 180, height = 240 }) => {
  return (
    <div>
      <Image
        src={pic}
        alt='Курс 2'
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
      />
    </div>
  )
}

export default License
