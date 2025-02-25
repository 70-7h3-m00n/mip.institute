'use client'
import Wrapper from '@/ui/Wrapper'
import styles from './Loading.module.sass'

export default function Loading() {
  return (
    <Wrapper>
      <section className={styles.containerBlock}>
        <div className={styles.container}>
          {/* Заголовок */}
          <div className={styles.skeletonTitle}></div>

          {/* Навигация */}
          <div className={styles.skeletonNav}>
            <div className={styles.skeletonButton}></div>
            <div className={styles.skeletonButton}></div>
            <div className={styles.skeletonButton}></div>
          </div>

          {/* Список партнеров (две карточки) */}
          <div className={styles.skeletonGrid}>
            <div className={styles.skeletonCard}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonText}></div>
              <div className={`${styles.skeletonText} ${styles.short}`}></div>
            </div>
            <div className={styles.skeletonCard}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonText}></div>
              <div className={`${styles.skeletonText} ${styles.short}`}></div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
