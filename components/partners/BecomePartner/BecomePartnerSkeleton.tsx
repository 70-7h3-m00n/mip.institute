'use client'
import Wrapper from '@/ui/Wrapper'
import styles from './BecomePartnerSkeleton.module.sass'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

export default function BecomePartnerSkeleton() {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 769px)')
  return (
    <section className={styles.skeletonContainer}>
      <Wrapper>
        <div className={styles.skeletonContent}>
          <div className={styles.skeletonLeft}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonText}></div>
            {!isMobileAndTabletLayout && <div className={styles.skeletonButton}></div>}
          </div>
          <div className={styles.skeletonImage}></div>
        </div>
      </Wrapper>
    </section>
  )
}