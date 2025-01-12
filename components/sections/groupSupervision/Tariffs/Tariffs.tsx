import styles from './Tariffs.module.sass'
import classNames from 'classnames'
import tariffs from 'constants/GroupSupervision/tariffs'
import stls from '@/components/sections/groupSupervision/Hero/GroupSupervisionHero/GroupSupervisionHero.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CldImage } from 'next-cloudinary'

const Tariffs = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')

  const card = (tariff: (typeof tariffs)[number]) => (
    <li
      className={classNames(styles.card, {
        [styles.disabled]: tariff.isDisabled
      })}
      key={tariff.title}>
      <CldImage
        src={tariff.image}
        alt='Тариф'
        className={styles.img}
        style={{ width: '100%', height: 'auto' }}
        width='350'
        height='250'
        crop='fit'
      />
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.category}>тариф</span>
          <span className={styles.value}>{tariff.title}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.category}>количество участников</span>
          <span className={styles.value}>{tariff.people} ЧЕЛ.</span>
        </li>
        <li className={styles.item}>
          <span className={styles.category}>стоимость</span>
          <span className={classNames(styles.value, styles.bold)}>
            {tariff.isDisabled ? 'В разработке' : `${tariff.price} ₽`}
          </span>
        </li>
      </ul>
    </li>
  )

  return (
    <section>
      <h2 className={styles.title}>Тарифы</h2>
      {isMobileAndTabletLayout ? (
        <Swiper
          slidesPerView={isMobileLayout ? 1.1 : 1.4}
          spaceBetween={isMobileLayout ? 10 : 25}>
          {tariffs.map(tariff => (
            <SwiperSlide key={tariff.title}>
              <div className={stls.cards}>{card(tariff)}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className={styles.cards}>{tariffs.map(tariff => card(tariff))}</ul>
      )}
      <div className={stls.btn}>
        <PopupTrigger btn='alpha' cta='takePart' />
      </div>
    </section>
  )
}

export default Tariffs
