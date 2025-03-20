import React from 'react'
import stls from './AlumniCommunity.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import StarIcon from '../StarIcon/StarIcon'

const AlumniCommunity = () => {
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
        {!isMobile && (
          <Image
            className={stls.img}
            src={isMobile ? image.imageMobUrl : image.imageUrl}
            width={564}
            height={350}
            alt={image.imageAlt}
          />
        )}
      </div>
      <div className={stls.right}>
        {/* <div className={stls.cards}> */}
          <div className={stls.card}>
            <div className={stls.icon}>
              <StarIcon />
            </div>
            <div className={stls.cardTitle}>
              <span className={stls.color}>Здесь можно обмениваться опытом,</span>
              <span> инсайтами и находить партнеров для совместных проектов.</span>
            </div>
          </div>
          <div className={stls.card}>
            <div className={stls.icon}>
              <StarIcon />
            </div>
            <div className={stls.cardTitle}>
              <span className={stls.color}>Это безопасное пространство</span>
              <span> для обмена личным опытом и эмоциональной поддержкой</span>
            </div>
          </div>
          <div className={stls.card}>
            <div className={stls.icon}>
              <StarIcon />
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
          {isMobile && (
            <Image
              className={stls.img}
              src={isMobile ? image.imageMobUrl : image.imageUrl}
              width={564}
              height={350}
              alt={image.imageAlt}
            />
          )}
        </div>
      {/* </div> */}
    </div>
  )
}

export default AlumniCommunity
