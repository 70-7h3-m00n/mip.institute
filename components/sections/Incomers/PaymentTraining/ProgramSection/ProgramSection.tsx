import React from 'react'
import stls from './ProgramSection.module.sass'
import Image from 'next/image'

type RightContent =
  | {
      type: 'cards'
      cards: { title: string; description: string }[]
    }
  | {
      type: 'list'
      title: string
      description: string
      list: string[]
      imageUrl: string
    }

interface ProgramSectionProps {
  data: {
    title: string
    description: string
    imageUrl: string
    imageAlt: string
    rightContent: RightContent
  }
}
const ProgramSection: React.FC<ProgramSectionProps> = ({ data }) => {
  return (
    <div className={stls.content}>
      <div className={stls.left}>
        <h2 className={stls.title}>{data.title}</h2>
        <p className={stls.description}>{data.description}</p>
        <Image
          className={stls.img}
          src={data.imageUrl}
          width={570}
          height={309}
          alt={data.imageAlt}
        />
      </div>

      {data.rightContent.type === 'cards' ? (
        <div className={stls.right}>
          {data.rightContent.cards.map((card, index) => (
            <div className={stls.card} key={index}>
              <p className={stls.cardTitle}>{card.title}</p>
              <p className={stls.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={stls.rightSection}>
          <div className={stls.rightBlock}>
            <p className={stls.rightTitle}>{data.rightContent.title}</p>
            <p className={stls.rightDescription}>{data.rightContent.description}</p>
            <ul className={stls.rightList}>
              {data.rightContent.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Image
              className={stls.rightImage}
              src={data.rightContent.imageUrl}
              width={490}
              height={169}
              alt='Оплата обучения'
            />
          </div>
        </div>
      )}
    </div>
  )
}
export default ProgramSection
