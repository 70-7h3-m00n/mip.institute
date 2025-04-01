'use client'
import stls from './EducationalProgramsCard.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import React, { useState } from 'react'
import { EducationalProgram, ProgramGeneralType, Tag } from '@/types/page/home/homeGeneralTypes'
import {
  getDurationText,
  getProgramCategory,
  getProgramLink
} from '@/components/sections/Home/EducationalPrograms/helpers'
import { useMediaQuery } from '@/context/MediaQueryContext'

interface Props {
  card: EducationalProgram
}

const isProgramGeneral = (program: EducationalProgram): program is ProgramGeneralType => {
  return program.__typename === 'Program'
}

const EducationalProgramsCard = ({ card }: Props) => {
  const category = getProgramCategory(card)
  const link = getProgramLink(card)

  const [isFlipped, setIsFlipped] = useState(false)
  const { isMobileAndTabletLayout } = useMediaQuery()

  return (
    <li
      className={classNames({ [stls.card]: true, [stls.flipped]: isFlipped })}
      onMouseEnter={() => !isMobileAndTabletLayout && setIsFlipped(true)}
      onMouseLeave={() => !isMobileAndTabletLayout && setIsFlipped(false)}>
      <Link href={link} passHref>
        <div className={stls.header}>
          <span className={stls.category}>{category}</span>
          {isProgramGeneral(card) && card.tag && (
            <span
              className={classNames({
                [stls.tag]: true,
                [stls.popular]: card.tag === Tag.Popular
              })}>
              {card.tag === Tag.Popular ? 'Популярно' : 'Обновлен в 2025'}
            </span>
          )}
        </div>

        <p className={stls.title}>{card.title}</p>
        {isFlipped && (
          <div className={stls.contentWrapper}>
            <p className={stls.flippedDescription}>
              {card.shortDescription ||
                'Получите специальность на стыке психологии, педагогики и воспитания, чтобы проводить\n' +
                  'качественное обучение учащихся и оказывать им необходимую психологическую поддержку.'}
            </p>
          </div>
        )}

        <p className={stls.mobileDescription}>
          {card.shortDescription ??
            'Получите специальность на стыке психологии, педагогики и воспитания, чтобы проводить качественное обучение учащихся и оказывать им необходимую психологическую поддержку.'}
        </p>

        {!isFlipped && <p className={stls.studyHours}>{getDurationText(card) ?? ''}</p>}
      </Link>
    </li>
  )
}

export default EducationalProgramsCard
