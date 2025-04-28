import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/certificate-ktp.jpeg'

const ImgDiplomaAlt = ({ width = null, height = null }) => {
  return (
    <span>
      <Image
        src={pic}
        alt='Диплом'
        width={width || undefined}
        height={height || undefined}
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

export default ImgDiplomaAlt
