import React from 'react'
import stls from './CareerCenter.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const CareerCenter = ({ data }) => {
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
          Наша команда готова поддержать вас на каждом этапе развития, помогая достичь карьерных
          успехов
        </p>

        <div className={stls.textCard}>
          <div className={stls.icon}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'>
              <path
                d='M15.7256 8.96662C10.3189 10.2314 9.39291 12.7335 8.20367 15.9468C5.83634 10.3976 5.81051 10.7643 0.939972 8.3723C8.47446 4.91727 4.87541 4.33652 9.68439 0.000291824C7.91239 2.32182 11.3332 7.49083 15.7256 8.96662Z'
                fill='#855EDF'
              />
            </svg>
          </div>
          <span className={stls.color}>Вас ждет встреча с карьерным консультантом,</span> который
          поможет определиться с направлением в психологии. Специалист проанализирует ваши навыки,
          интересы, даст ценные советы и рекомендации
        </div>
      </div>
      <div className={stls.right}>
        <Image
          className={stls.img}
          src={isMobile ? image.imageMobUrl : image.imageUrl}
          width={570}
          height={309}
          alt={image.imageAlt}
        />
      </div>
    </div>
  )
}

export default CareerCenter
