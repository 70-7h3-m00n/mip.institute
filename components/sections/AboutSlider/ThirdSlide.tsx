import stls from '@/styles/components/sections/AboutSlider/ThirdSlide.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/LeftSlide.jpg'

const ThirdSlide = () => {
  return (
    <div className={stls.container}>
      <p className={stls.first}>
        <span className={stls.bold}>Московский Институт Психологии</span> — это команда практикующих
        экспертов, отзывчивых кураторов и наставников, которые будут
        сопровождать вас от начала до конца и обеспечат старт вашей успешной
        карьеры.
      </p>
      <div className={stls.filterImg}>
        <span className={stls.filter}></span>
        <Image 
          src={pic} 
          alt='Лекция' 
          className={stls.img} 
          placeholder='blur'
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </div>
    </div>
  )
}

export default ThirdSlide
