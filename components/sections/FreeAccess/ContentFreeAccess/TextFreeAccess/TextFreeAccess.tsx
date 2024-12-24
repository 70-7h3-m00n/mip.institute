import React from 'react'
import styles from './TextFreeAccess.module.sass'
import Image from 'next/image'

export const TextFreeAccess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          Для этого
          <span className={styles.violetTitle}> нужно ввести свои данные,</span>
          {' '}и в течение трёх дней вы сможете без ограничений смотреть расписание и
          вебинары
        </p>
      </div>
      {/* <div className={styles.imageContainer}> */}
        <div className={styles.giftBox}>
          <Image
            src='https://res.cloudinary.com/mipinstitute/image/upload/v1734972237/podarok_korobka_4a747c14bf.png'
            alt='Gift Box'
            width={172}
            height={172}
          />
        </div>
        <div className={styles.star}>
          <Image
            src='https://res.cloudinary.com/mipinstitute/image/upload/v1734972236/zvezda_8d91d8d40f.png'
            alt='Star'
            width={28}
            height={28}
          />
        </div>
      {/* </div> */}
    </div>
  )
}
