import routes from '@/config/routes'
import stls from '@/styles/components/cards/BachelorSlugCard.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface Step {
  card: {
    id?: number
    icon?: ReactNode
    title?: string
    educationCode: string
    minTime: number
    maxTime: number
    admissionDate: string
    slug: string
    heroPicture: {
      url: string
      height: number
      width: number
    }
  }
}

const BachelorSlugCard: FC<Step> = ({ card }) => {
  return (
    <Link href={`${routes.front.bachelors}/${card.slug}`} passHref>
      <div className={stls.oneCard}>
        <div className={stls.img}>
          <Image
            className={stls.image}
            src={card.heroPicture.url}
            width={740}
            height={330}
            alt='Программа'
          />
        </div>
        <div className={stls.cardText}>
          <p className={stls.cardTitle}>
            {card.educationCode} {card.title}
          </p>
          <div className={stls.additionalInfo}>
            <p>
              <span>Ближайшие зачисления:</span> {card.admissionDate}
            </p>
            <p>
              <span>Срок обучения:</span> {card.minTime} - {card.maxTime} года
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BachelorSlugCard
