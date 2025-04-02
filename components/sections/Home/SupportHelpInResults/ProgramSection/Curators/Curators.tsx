import React from 'react'
import stls from './Curators.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const Curators = () => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const image = {
    imageUrl: '/assets/imgs/home/SupportHelpInResults/image1.jpg',
    imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob1.png',
    imageAlt: 'Опытные кураторы'
  }
  return (
    <div className={stls.container}>
      <div className={stls.top}>
        <p className={stls.title}>
          Наш отдел заботы ежедневно создает и развивает поддерживающую атмосферу обучения
        </p>
        <p className={stls.description}>
          <span className={stls.color}>Студенты доверяют нашим кураторам</span> — увлеченным
          специалистам с психологическим образованием, которые всегда готовы поддержать и прийти{' '}
          <br className={stls.lineBreak} /> на помощь
        </p>
      </div>

      <Image
        className={stls.img}
        src={isMobile ? image.imageMobUrl : image.imageUrl}
        width={1170}
        height={352}
        alt={image.imageAlt}
      />
    </div>
  )
}

export default Curators
