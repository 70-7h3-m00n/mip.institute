import React from 'react'
import stls from './Practice.module.sass'
import Image from 'next/image'

const Practice = () => {
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
              идеально <br className={stls.lineBreak} /> подходят для начинающих специалистов и
              студентов,
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

      <Image
        className={stls.img}
        src={image.imageUrl}
        width={1170}
        height={417}
        alt={image.imageAlt}
      />
    </div>
  )
}

export default Practice
