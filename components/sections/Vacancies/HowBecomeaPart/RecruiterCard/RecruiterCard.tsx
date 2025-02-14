import { useState } from 'react'
import stls from './RecruiterCard.module.sass'
import IconQuote from '@/components/sections/Vacancies/HowBecomeaPart/RecruiterCard/IconQuote'
import classNames from 'classnames'
import Image from 'next/image'
import { Recruiter } from '@/types/page/vacancies/TypePageVacanciesPropsQuery'

interface Props {
  recruiter: Recruiter
}

const RecruiterCard = ({ recruiter: { name, quote, position, image } }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={classNames(stls.card, { [stls.back]: isFlipped })}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}>
      {isFlipped ? (
        <div className={stls.frontSide}>
          <div className={stls.cardHeader}>
            <span className={stls.name}>{name}</span>
            <span className={stls.position}>{position}</span>
          </div>
          <span className={stls.quote}>{quote}</span>
          <span className={stls.icon}>
            <IconQuote />
          </span>
        </div>
      ) : (
        <div className={stls.frontSide}>
          <Image
            src={image.url}
            alt={'Рекрутер'}
            width={300}
            height={300}
            style={{ width: '100%', height: '100%' }}
            className={stls.image}
          />
        </div>
      )}
    </div>
  )
}

export default RecruiterCard
