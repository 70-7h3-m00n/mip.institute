import stls from './EducationalProgramsCard.module.sass'
import { TAGS } from '@/components/sections/Home/EducationalPrograms/EducationalPrograms'
import classNames from 'classnames'
import Link from 'next/link'
import { routes } from '@/config/index'

interface Props {
  card: {
    title: string
    category: string
    studyHours: number
    studyMounthsDuration: number
    tag?: TAGS
  }
}

const EducationalProgramsCard = ({ card }: Props) => {
  return (
    <li className={stls.card}>
      <Link href={routes.front.programs}>
        <div className={stls.header}>
          <span className={stls.category}>{card.category}</span>
          {card.tag && (
            <span
              className={classNames({
                [stls.tag]: true,
                [stls.popular]: card.tag === TAGS.Popular
              })}>
              {card.tag}
            </span>
          )}
        </div>

        <p className={stls.title}>{card.title}</p>

        <p className={stls.studyHours}>
          <span>{card.studyMounthsDuration} месяцев </span>
          <span>/ {card.studyHours} часов</span>
        </p>
      </Link>
    </li>
  )
}

export default EducationalProgramsCard
