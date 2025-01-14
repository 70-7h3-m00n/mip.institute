import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/diplomaNew.jpg'

const ImgDiploma = ({ width = null, height = null }) => {
  return (
    <span>
      <Image
        src={pic}
        alt='Диплом'
        width={width}
        height={height}
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
