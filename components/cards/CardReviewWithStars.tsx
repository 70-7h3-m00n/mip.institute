import stls from '@/styles/components/cards/CardReviewWithStars.module.sass'
import classNames from 'classnames'
import IconStarRatingCard from '../icons/IconStarRatingCard'
import Image from 'next/image'

type Props = {
  number: number
  review: {
    name: string
    date: string
    text: string
    picture: {
      url: string
      width: number
      height: number
      src?: string
    }
  }
}

const CardReviewWithStars = ({ number, review }: Props) => {
  const date = new Date(review.date)
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)

  return (
    <div
      className={classNames(stls.container, { [stls.violetBg]: number === 2 })}>
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
          <Image
          // @ts-ignore
            src={review.picture.url ? review.picture.url : review.picture.src}
            width={32}
            height={32}
            alt='Автор'
          />
        </div>
        <p className={stls.name}>{review.name}</p>
      </div>
    </div>
  )
}

export default CardReviewWithStars
