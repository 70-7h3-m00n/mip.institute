import React from 'react'
import stls from './AlumniCommunity.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const AlumniCommunity = ({ data }) => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const image = {
    imageUrl: '/assets/imgs/home/SupportHelpInResults/image3.jpg',
    imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob3.jpg',
    imageAlt: 'Сообщество выпускников'
  }
  return (
    <div className={stls.container}>
      <div className={stls.left}>
        <p className={stls.title}>
          Сообщество выпускников МИП является местом, позволяющим оставаться на связи с коллегами
        </p>
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
            <div className={stls.cardTitle}>
              <span className={stls.color}>Здесь можно обмениваться опытом,</span>
              <span> инсайтами и находить партнеров для совместных проектов.</span>
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
            <div className={stls.cardTitle}>
              <span className={stls.color}>Это безопасное пространство</span>
              <span> для обмена личным опытом и эмоциональной поддержкой</span>
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
            <div className={stls.cardTitle}>
              <span className={stls.color}>
                Наши специалисты с радостью делятся актуальными событиями из жизни
              </span>
              <span>
                института и новостями из мира психологии. Они всегда готовы к обсуждению и с
                удовольствием ответят на любые вопросы
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniCommunity
