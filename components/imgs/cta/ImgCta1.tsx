import Image from 'next/image'
import pic from '@/public/assets/imgs/cta/cta1.png'

const ImgCta1 = ({ width = 0, height = 0 }) => {
  return (
    <div>
      <Image
        src={pic}
        alt='Девушка в очках и с книгой'
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgCta1
