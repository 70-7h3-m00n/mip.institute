import React from 'react'
import stls from './Practice.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const Practice = ({ data }) => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const image = {
    imageUrl: '/assets/imgs/home/SupportHelpInResults/image4.png',
    imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob4.png',
    imageAlt: 'Практика'
  }
  return (
    <div className={stls.container}>
      <div className={stls.top}>
        <p className={stls.title}>
          Практика помогает студентам лучше понять теоретические концепции, увидев их реальное
          применение в контексте разных ситуаций
        </p>
        <div className={stls.description}>
          <p>
            <a href=''>Программы практической подготовки</a>{' '}
            <span className={stls.color}>
              идеально подходят для начинающих специалистов и студентов,
            </span>{' '}
            которые стремятся развить реальные навыки и уверенно работать с клиентами
          </p>
          <p>
            Студенты учатся развивать эмоциональную устойчивость, работать с собственными эмоциями и{' '}
            <span className={stls.color}>
              получают обратную связь от наших экспертных педагогов для личностного роста
            </span>
          </p>
        </div>
      </div>
      <div className={stls.bottom}>
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

export default Practice
