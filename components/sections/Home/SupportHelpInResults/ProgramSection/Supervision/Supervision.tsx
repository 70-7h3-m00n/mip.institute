import React from 'react'
import stls from './Supervision.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import StarIcon from '../StarIcon/StarIcon'

const Supervision = () => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const image = {
    imageUrl: '/assets/imgs/home/SupportHelpInResults/image5.png',
    imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob5.png',
    imageAlt: 'Супервизии'
  }
  return (
    <div className={stls.container}>
      <div className={stls.left}>
        <p className={stls.title}>
          Обсуждение и анализ клиентских случаев в кругу единомышленников под руководством более
          опытного коллеги (супервизора)
        </p>
        {!isMobile && (
          <Image
            className={stls.img}
            src={isMobile ? image.imageMobUrl : image.imageUrl}
            width={564}
            height={325}
            alt={image.imageAlt}
          />
        )}
      </div>
      <div className={stls.right}>
        <div className={stls.card}>
          <div className={stls.icon}>
            <StarIcon />
          </div>
          <div>
            <span className={stls.cardDescription}>
              Участники <a href=''>групповой супервизии</a> в теплой и безопасной атмосфере смогут{' '}
              <span className={stls.color}>
                проработать трудности, возникающие в работе с клиентами
              </span>
            </span>
          </div>
        </div>
        <div className={stls.card}>
          <div className={stls.icon}>
            <StarIcon />
          </div>
          <div>
            <span className={stls.cardDescription}>
              {' '}
              Начинающие и практикующие специалисты
              <span className={stls.color}>получают качественное развитие и поддержку</span>
            </span>
          </div>
        </div>
        <div className={stls.card}>
          <div className={stls.icon}>
            <StarIcon />
          </div>
          <div>
            <span className={stls.cardDescription}>
              <span className={stls.color}>Вы расширите профессиональный кругозор </span> за счет
              анализа различных проблемных ситуаций и подходов к их решению
            </span>
          </div>
        </div>
      </div>

      {isMobile && (
        <Image
          className={stls.img}
          src={isMobile ? image.imageMobUrl : image.imageUrl}
          width={564}
          height={325}
          alt={image.imageAlt}
        />
      )}
    </div>
  )
}

export default Supervision
