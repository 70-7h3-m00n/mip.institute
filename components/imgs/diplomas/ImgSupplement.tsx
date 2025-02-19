import stls from '@/styles/components/imgs/diplomas/ImgSupplement.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/supplement.jpg'

const ImgSupplement = ({ width = null, height = null }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Диплом'
        className={stls.img}
        width={width || undefined}
        height={height || undefined}
        placeholder='blur'
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </div>
  )
}

export default ImgSupplement
