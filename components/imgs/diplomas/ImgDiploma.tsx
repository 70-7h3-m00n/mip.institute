import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/dyploma-ktp2.jpeg'

const ImgDiploma = ({ width = null, height = null }) => {
  return (
    <span>
      <Image
        src={pic}
        alt='Диплом'
        width={width || undefined}
        height={height || undefined}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto'
        }}
        placeholder='blur'
      />
    </span>
  )
}

export default ImgDiploma
