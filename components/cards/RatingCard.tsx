import React from 'react'
import stls from '@/styles/components/cards/RatingCard.module.sass'
import Image, { StaticImageData } from 'next/image'
import IconRatingStar from '../icons/IconRatingStar'

type Props = {
  rating: number
  quantity: number
  img: StaticImageData
  link: string
}

const RatingCard = ({ rating, quantity, img, link }: Props) => {
  return (
    <div className={stls.container}>
      <p className={stls.title}>рейтинг</p>
      <div className={stls.ratingBlock}>
        <div className={stls.icon}>
          <IconRatingStar />
        </div>
        <div className={stls.rating}>
          <span className={stls.stars}>{rating.toFixed(1)}</span>
          {/* {quantity > 0 ? (
            <div className={stls.count}>
              оценок: <span>{quantity}+</span>
            </div>
          ) : (
            <div className={stls.count}>пока нет оценок</div>
          )} */}
        </div>
      </div>
      <a href={link} className={stls.link} target='_blank' rel='noreferrer'>
        <Image className={stls.image} src={img} alt='Лого' width={140} height={100} />
      </a>
    </div>
  )
}

export default RatingCard
