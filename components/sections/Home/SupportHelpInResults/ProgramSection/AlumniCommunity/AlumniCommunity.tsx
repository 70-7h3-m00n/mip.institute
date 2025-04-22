import React from 'react'
import stls from './AlumniCommunity.module.sass'
import Image from 'next/image'
import StarIcon from '../StarIcon/StarIcon'

const AlumniCommunity = () => {
  const image = {
    imageUrl: '/assets/imgs/home/SupportHelpInResults/image3.jpg',
    imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob3.jpg',
    imageAlt: 'Сообщество выпускников'
  }

  const cards = [
    {
      highlight: 'Здесь можно обмениваться опытом,',
      text: ' инсайтами и находить партнеров для совместных проектов.'
    },
    {
      highlight: 'Это безопасное пространство',
      text: ' для обмена личным опытом и эмоциональной поддержкой'
    },
    {
      highlight: 'Наши специалисты с радостью делятся актуальными событиями из жизни ',
      text: 'института и новостями из мира психологии. Они всегда готовы к обсуждению и с удовольствием ответят на любые вопросы'
    }
  ]

  return (
    <div className={stls.container}>
      <div className={stls.left}>
        <p className={stls.title}>
          Сообщество выпускников Института является местом, позволяющим оставаться на связи с
          коллегами
        </p>
        <div className={stls.imageWrapperDesc}>
          <Image
            className={stls.img}
            src={image.imageUrl}
            width={564}
            height={350}
            alt={image.imageAlt}
          />
        </div>
      </div>
      <div className={stls.right}>
        {cards.map((card, i) => (
          <div key={i} className={stls.card}>
            <div className={stls.icon}>
              <StarIcon />
            </div>
            <div className={stls.cardTitle}>
              <span className={stls.color}>{card.highlight}</span>
              <span>{card.text}</span>
            </div>
          </div>
        ))}
        <div className={stls.imageWrapperMob}>
          <Image
            className={stls.img}
            src={image.imageMobUrl}
            width={347}
            height={217}
            alt={image.imageAlt}
          />
        </div>
      </div>
    </div>
  )
}

export default AlumniCommunity
