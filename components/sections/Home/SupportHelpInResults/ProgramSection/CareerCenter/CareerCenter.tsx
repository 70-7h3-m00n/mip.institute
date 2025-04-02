import React from 'react'
import stls from './CareerCenter.module.sass'
import Image from 'next/image'
import StarIcon from '../StarIcon/StarIcon'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const CareerCenter = () => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const image = {
    imageUrl: '/assets/imgs/home/SupportHelpInResults/image2.png',
    imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob2.png',
    imageAlt: 'Центр карьеры'
  }
  return (
    <div className={stls.container}>
      <div className={stls.left}>
        <p className={stls.title}>
          Мы ценим системный подход и стремимся создать условия, в которых каждый студент сможет
          полностью раскрыть свои способности и достичь поставленных целей
        </p>

        <p className={stls.description}>
          Наша команда готова поддержать вас на каждом <br className={stls.lineBreak} /> этапе
          развития, помогая достичь карьерных успехов
        </p>

        <div className={stls.textCard}>
          <div className={stls.icon}>
            <StarIcon />
          </div>
          <span>
            <span className={stls.color}>Вас ждет встреча с карьерным консультантом,</span> который
            поможет определиться с направлением в психологии. Специалист проанализирует ваши навыки,
            интересы, даст ценные советы и рекомендации
          </span>
        </div>
      </div>
      <div className={stls.right}>
        <Image
          className={stls.img}
          src={isMobile ? image.imageMobUrl : image.imageUrl}
          width={570}
          height={427}
          alt={image.imageAlt}
        />
      </div>
    </div>
  )
}

export default CareerCenter
