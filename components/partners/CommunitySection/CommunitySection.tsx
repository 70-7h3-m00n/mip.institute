'use client'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import styles from './CommunitySection.module.sass'
import Image from 'next/image'
import Wrapper from '@/ui/Wrapper'
import PopupTrigger from '@/ui/PopupTrigger'

// Компонент для SVG звездочки
const StarIcon = () => (
  <svg
    className={styles.starIcon}
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 21'
    fill='none'>
    <path
      d='M9.73314 0.701905C9.77067 0.385823 10.2293 0.385823 10.2669 0.701905L10.5815 3.35355C10.9878 6.77753 13.6873 9.47708 17.1113 9.88335L19.7629 10.198C20.079 10.2355 20.079 10.6942 19.7629 10.7317L17.1113 11.0463C13.6873 11.4526 10.9878 14.1522 10.5815 17.5761L10.2669 20.2278C10.2293 20.5439 9.77067 20.5439 9.73314 20.2278L9.41851 17.5761C9.01224 14.1522 6.31269 11.4526 2.8887 11.0463L0.237062 10.7317C-0.0790205 10.6942 -0.0790205 10.2355 0.237062 10.198L2.8887 9.88335C6.31269 9.47708 9.01224 6.77753 9.41851 3.35355L9.73314 0.701905Z'
      fill='#A78CFF'
    />
  </svg>
)

const CommunitySection = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={styles.container}>
      <Wrapper>
        {/* Верхний блок с картинками (для мобилки и десктопа) */}
        <div className={styles.imagesWrapper}>
          {isMobileAndTabletLayout && (
            <>
              <Image
                src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1740565729/telegram_mob_1_71ac4c8f9f.jpg'
                alt='Студенты держат сертификаты'
                className={styles.image}
                width={108}
                height={108}
              />
              <Image
                src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1740565729/3d_naklejka_mob_1_edf25c72c8.png'
                alt='Логотип института'
                className={styles.image}
                width={108}
                height={108}
              />
            </>
          )}
        </div>

        {/* Верхние теги */}
        <div className={styles.topTags}>
          <div className={styles.tagContainer}>
            <StarIcon />
            <span className={styles.tag}>членство в АППП и ОППЛ</span>
          </div>
          <div className={styles.tagContainer}>
            <StarIcon />
            <span className={styles.tag}>
              практика, круглые столы, экскурсии по центру занятости
            </span>
          </div>
          {/* Правое изображение (логотип) */}
          {!isMobileAndTabletLayout && (
            <Image
              src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1740565729/3d_naklejka_mob_1_edf25c72c8.png'
              alt='Логотип института'
              className={styles.imageRight}
              width={168}
              height={168}
            />
          )}
        </div>
        {/* Центральный контент */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Сильное сообщество — <span className={styles.highlight}>больше возможностей</span> для
            студентов
          </h2>
          <p className={styles.description}>
            Мы создаем партнерства, которые помогают нашим студентам развиваться, набираться опыта и
            строить карьеру.
          </p>
          {/* <PopupTrigger btn='alpha' cta='submitApplication' /> */}
            <button className={styles.button_base}>Оставить заявку</button>
        </div>
        {/* Нижние теги */}
        <div className={styles.bottomTags}>
          <div className={styles.tagContainer}>
            <StarIcon />
            <span className={styles.tag}>участие в совместных проектах</span>
          </div>
          <div className={styles.tagContainer}>
            <StarIcon />
            <span className={styles.tag}>
              {isMobileAndTabletLayout
                ? 'участие в совместных проектах, обмен опытом'
                : 'бесплатные лекции для всех желающих в рамках проекта «Психология добрых дел»'}
            </span>
          </div>
          {/* Левое изображение (студенты) */}
          {!isMobileAndTabletLayout && (
            <Image
              src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1740565729/telegram_mob_1_71ac4c8f9f.jpg'
              alt='Студенты'
              className={styles.imageLeft}
              width={270}
              height={326}
            />
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default CommunitySection
