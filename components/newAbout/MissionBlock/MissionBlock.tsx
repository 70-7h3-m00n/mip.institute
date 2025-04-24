import React from 'react'
import stls from './MissionBlock.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'

const MissionBlock: React.FC = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.textBlock}>
            <h2 className={stls.title}>Миссия и ценности Московского Института Психологии</h2>
            <p className={stls.description}>
              Мы стремимся к высоким целям, делая образование не только источником знаний, но и
              пространством для творчества и самореализации
            </p>
          </div>
          <div className={stls.imageBlock}>
            <Image
              className={stls.image}
              width={569}
              height={268}
              src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1745483655/Frame_7590_d68fec85ea.jpg'
              alt='Сова'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default MissionBlock
