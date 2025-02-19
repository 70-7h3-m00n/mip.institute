import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/certificateNew.jpg'

const ImgCertificate = ({ width = 0, height = 0 }) => {
  return (
    <span>
      <Image
        src={pic}
        alt='Сертификат'
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </span>
  )
}

export default ImgCertificate
