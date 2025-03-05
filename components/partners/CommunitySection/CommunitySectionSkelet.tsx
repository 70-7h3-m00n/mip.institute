'use client'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import styles from './CommunitySectionSkelet.module.sass'
import Wrapper from '@/ui/Wrapper'

const CommunitySectionSkelet = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <div className={styles.skeleton}>
      <Wrapper>
        {/* Верхний блок с картинками (скелетоны) */}
        <div className={styles.imagesWrapper}>
          {isMobileAndTabletLayout && (
            <>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonImage}></div>
            </>
          )}
        </div>

        {/* Верхние теги */}
        <div className={styles.topTags}>
          <div className={styles.skeletonTag}></div>
          <div className={styles.skeletonTag}></div>
          {!isMobileAndTabletLayout && (
            <>
              <div className={styles.skeletonImageRight}></div>
            </>
          )}
        </div>

        {/* Центральный контент */}
        <div className={styles.skeletonContent}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonButton}></div>
        </div>

        {/* Нижние теги */}
        <div className={styles.bottomTags}>
          <div className={styles.skeletonTagBottom}></div>
          <div className={styles.skeletonTagBottom}></div>
          {!isMobileAndTabletLayout && (
            <>
              <div className={styles.skeletonImageLeft}></div>
            </>
          )}
        </div>
      </Wrapper>
    </div>
  )
}

export default CommunitySectionSkelet
