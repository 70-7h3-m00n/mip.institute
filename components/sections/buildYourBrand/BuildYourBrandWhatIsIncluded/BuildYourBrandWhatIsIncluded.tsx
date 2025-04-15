import styles from './BuildYourBrandWhatIsIncluded.module.sass'
import classNames from 'classnames'
import stls from '@/components/sections/buildYourBrand/Hero/BuildYourBrandHero/BuildYourBrandHero.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CldImage } from 'next-cloudinary'
import buildYourBrandTariffs from 'constants/buildYourBrand/whatIsIncluded'

const BuildYourBrandWhatIsIncluded = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')

  const card = (tariff: (typeof buildYourBrandTariffs)[number]) => (
    <li className={styles.card} key={tariff.title}>
      <CldImage
        src={tariff.image}
        alt='Тариф'
        className={styles.img}
        style={{ width: '100%' }}
        width={350}
        height={250}
      />
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.category}>тариф</span>
          <span className={styles.value}>{tariff.title}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.category}>кол-во участников</span>
          <span className={styles.value}>{tariff.people}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.category}>стоимость</span>

          <div className={styles.prices}>
            <span className={classNames(styles.oldPrice)}>{tariff.oldPrice} ₽</span>
            <span className={classNames(styles.price)}>{tariff.price} ₽</span>
          </div>
        </li>
      </ul>

      <span className={classNames(styles.category, styles.bold)}>входит:</span>
      <ul className={styles.list}>
        {tariff.included.map(item => (
          <li key={item} className={classNames(styles.category, styles.bolt)}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  )

  return (
    <section>
      <div className={styles.titleBlock}>
        <h2>Что входит в программу:</h2>
      </div>

      {isMobileAndTabletLayout ? (
        <Swiper slidesPerView={isMobileLayout ? 1.1 : 1.4} spaceBetween={isMobileLayout ? 10 : 25}>
          {buildYourBrandTariffs.map(tariff => (
            <SwiperSlide key={tariff.title}>
              <div className={stls.cards}>{card(tariff)}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className={styles.cards}>{buildYourBrandTariffs.map(tariff => card(tariff))}</ul>
      )}
      <div className={classNames(styles.button, stls.btn)}>
        <PopupTrigger
          btn='alpha'
          cta='beginStudy'
          additionalInfo='*скидка действует только до 21 апреля'
        />
      </div>
    </section>
  )
}

export default BuildYourBrandWhatIsIncluded
