import routes from '@/config/routes'
import stls from '@/styles/components/cards/PracticalSlugCard.module.sass'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface Step {
  card: PracticalTraining
}

const PracticalSlugCard: FC<Step> = ({ card }) => {
  return (
    <Link
      passHref
      className={stls.oneCard}
      href={`${routes.front.practicalTrainings}/${card?.slug}`}>
      <div className={stls.img}>
        <Image
          className={stls.image}
          // @ts-ignore
          src={card?.heroPicture.url}
          width={740}
          height={480}
          alt='Программа'
        />
      </div>
      <div className={stls.cardText}>
        <p className={stls.cardTitle}>{card?.title}</p>
        <div className={stls.additionalInfo}>
          <p>
            <span>Ближайшие зачисления:</span> ежемесячное
          </p>
          <p>
            <span>Срок обучения:</span> {card?.duration}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default PracticalSlugCard
