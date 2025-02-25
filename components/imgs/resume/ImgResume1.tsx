import stls from '@/styles/components/imgs/resume/ImgResume1.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/resume/resume1.jpg'

const ImgResume1 = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Семейный психолог'
        className={stls.img}
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </div>
  )
}

export default ImgResume1
