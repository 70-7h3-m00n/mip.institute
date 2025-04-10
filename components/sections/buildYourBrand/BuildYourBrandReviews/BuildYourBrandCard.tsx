import IconStarRatingCard from '@/components/icons/IconStarRatingCard'
import stls from './BuildYourBrandCard.module.sass'
import classNames from 'classnames'
import Image from 'next/image'

type Props = {
  number: number
  review: {
    name: string
    date: string
    text: string
    picture: {
      url: string
      width?: number
      height?: number
      src?: string
    }
  }
}

const BuildYourBrandCard = ({ number, review }: Props) => {
  const date = new Date(review.date)
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)

  return (
    <div className={classNames(stls.container, { [stls.violetBg]: number === 2 })}>
      <div>
        <p className={stls.date}>{formattedDate}</p>
        <div className={stls.stars}>
          {Array.from({ length: 5 }, (_, i) => (
            <IconStarRatingCard key={i} />
          ))}
        </div>
        <p className={stls.text}>{review.text}</p>
      </div>
      <div className={stls.author}>
        <div className={stls.image}>
          {(review.picture.src || review.picture.url) && (
            <Image
              src={review.picture.src ? review.picture.src : review.picture.url}
              width={32}
              height={32}
              alt='Автор отзыва'
            />
          )}
        </div>
        <p className={stls.name}>{review.name}</p>
      </div>
    </div>
  )
}

export default BuildYourBrandCard
