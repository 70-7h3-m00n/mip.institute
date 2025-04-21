'use client'
import { useState } from 'react'
import styles from './PartnersCard.module.sass'
import Image from 'next/image'
import { PropsCard } from '../../type'

const PartnersCard: React.FC<PropsCard> = ({ partner }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={partner.image.url}
          alt={partner.title}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>
      <p className={styles.title}>{partner.title}</p>
      <p className={styles.description}>
        {expanded ? partner.subtitle : `${partner.subtitle.substring(0, 136)}...`}
      </p>
      <button className={styles.button} onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Скрыть' : 'Подробнее'}
      </button>
    </div>
  )
}

export default PartnersCard
