import React from 'react'
import stls from './Supervision.module.sass'
import Image from 'next/image'
import StarIcon from '../StarIcon/StarIcon'
import {routes } from '@/config/index'

const Supervision = () => {
  const image = {
    imageUrl: '/assets/imgs/home/SupportHelpInResults/image5.png',
    imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob5.png',
    imageAlt: 'Супервизии'
  }
  return (
    <div className={stls.container}>
      <div className={stls.left}>
        <p className={stls.title}>
          Обсуждение и анализ <br className={stls.lineBreak} /> клиентских случаев в кругу
          единомышленников под руководством более опытного коллеги (супервизора)
        </p>
        <div className={stls.imageWrapperDesc}>
          <Image
            className={stls.img}
            src={image.imageUrl}
            width={564}
            height={325}
            alt={image.imageAlt}
          />
        </div>
      </div>
      <div className={stls.right}>
        <div className={stls.card}>
          <div className={stls.icon}>
            <StarIcon />
          </div>
          <span className={stls.cardDescription}>
            Участники <a href={`${routes.front.supervision}`}>групповой супервизии</a> в теплой <br className={stls.lineBreak} />{' '}
            и безопасной атмосфере смогут{' '}
            <span className={stls.color}>
              проработать трудности, возникающие в работе с клиентами
            </span>
          </span>
        </div>
        <div className={stls.card}>
          <div className={stls.icon}>
            <StarIcon />
          </div>
          <span className={stls.cardDescription}>
            Начинающие и практикующие специалисты
            <span className={stls.color}> получают качественное развитие и поддержку</span>
          </span>
        </div>
        <div className={stls.card}>
          <div className={stls.icon}>
            <StarIcon />
          </div>
          <span className={stls.cardDescription}>
            <span className={stls.color}>Вы расширите профессиональный кругозор </span>{' '}
            <br className={stls.lineBreak} />
            за счет анализа различных проблемных ситуаций и подходов к их решению
          </span>
        </div>
      </div>
      <div className={stls.imageWrapperMob}>
        <Image
          className={stls.img}
          src={image.imageMobUrl}
          width={564}
          height={325}
          alt={image.imageAlt}
        />
      </div>
    </div>
  )
}

export default Supervision
