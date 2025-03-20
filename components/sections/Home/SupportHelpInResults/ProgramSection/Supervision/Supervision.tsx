import React from 'react'
import stls from './Supervision.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const Supervision = ({ data }) => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const image = {
    imageUrl: '/assets/imgs/home/SupportHelpInResults/image5.png',
    imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob5.png',
    imageAlt: 'Супервизии'
  }
  return (
    <div className={stls.container}>
      <div className={stls.left}>
        <h2 className={stls.title}>
          Обсуждение и анализ клиентских случаев в кругу единомышленников под руководством более
          опытного коллеги (супервизора)
        </h2>
        <Image
          className={stls.img}
          src={isMobile ? image.imageMobUrl : image.imageUrl}
          width={564}
          height={350}
          alt={image.imageAlt}
        />
      </div>
      <div className={stls.right}>
        <div className={stls.cards}>
          <div className={stls.card}>
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
            <div>
              <span className={stls.cardDescription}> Начинающие и практикующие специалисты </span>
              <span className={stls.color}>получают качественное развитие и поддержку</span>
            </div>
          </div>
          <div className={stls.card}>
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
            <div>
              <span className={stls.color}>Вы расширите профессиональный кругозор </span>
              <span className={stls.cardDescription}>
                {' '}
                за счет анализа различных проблемных ситуаций и подходов к их решению
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Supervision
