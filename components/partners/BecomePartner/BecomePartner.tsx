'use client'
import Wrapper from '@/ui/Wrapper'
import styles from './BecomePartner.module.sass'
import Image from 'next/image'
import PopupTrigger from '@/ui/PopupTrigger'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

export default function BecomePartner() {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 769px)')
  return (
    <section className={styles.container}>
      <Wrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>Стать партнером – просто!</h2>
            <p className={styles.description}>
              Заполните короткую форму, и мы свяжемся с вами,
              {!isMobileAndTabletLayout && <br />} чтобы обсудить все детали
            </p>
            {/* {!isMobileAndTabletLayout && <PopupTrigger btn='alpha' cta='submitApplication' />} */}
            {!isMobileAndTabletLayout && (
              <button className={styles.buttonDesc}>Присоединиться</button>
            )}
          </div>
          <Image
            src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1740587591/kartochki_gruppa_2_1_2f717ea434.png'
            alt='Карточки'
            className={styles.imageRight}
            width={514}
            height={417}
            priority={true}
          />
          {/* {isMobileAndTabletLayout && <PopupTrigger btn='alpha' cta='submitApplication' />} */}
          {isMobileAndTabletLayout && <button className={styles.buttonMob}>Присоединиться</button>}
        </div>
      </Wrapper>
    </section>
  )
}
