'use client'
import stls from './EducationalProgramsCard.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { EducationalProgram } from '@/types/page/home/homeGeneralTypes'
import {
  getDurationText,
  getProgramCategory,
  getProgramLink
} from '@/components/sections/Home/EducationalPrograms/helpers'

interface Props {
  card: EducationalProgram
}

const EducationalProgramsCard = ({ card }: Props) => {
  const category = getProgramCategory(card)
  const link = getProgramLink(card)
  const isPopular = 'isPopular' in card && card.isPopular

  return (
    <li className={stls.card}>
      <Link href={link} passHref>
        <div className={stls.header}>
          <span className={stls.category}>{category}</span>
          {isPopular && (
            <span
              className={classNames({
                [stls.tag]: true,
                [stls.popular]: isPopular
              })}>
              Популярно
            </span>
          )}
        </div>

        <p className={stls.title}>{card.title}</p>

        <p className={stls.studyHours}>{getDurationText(card) ?? ''}</p>
      </Link>
    </li>
  )
}

export default EducationalProgramsCard
