import IconWorld from './icons/IconWorld'
import IconLinkedin from './icons/IconLinkedin'
import IconWhatsapp from './icons/IconWhatsapp'
import stls from './ProfileCard.module.sass'
import Image from 'next/image'
import classNames from 'classnames'

const ProfileCard = () => (
  <div className={stls.profile}>
    <div className={stls.avatarSection}>
      <Image
        src='/assets/imgs/redesignedProgram/Portfolio/Avatar.png'
        alt='Дарья'
        width={166}
        height={166}
        className={stls.avatar}
      />

      <div className={stls.socials}>
        <IconWorld />
        <IconLinkedin />
        <IconWhatsapp />
      </div>
    </div>
    <div className={stls.description}>
      <p className={stls.name}>Дарья, 30 лет</p>

      <p className={stls.label}>
        Профессия: <span className={classNames(stls.value, stls.valueAccent)}>Психолог</span>
      </p>

      <p className={stls.label}>
        Специальность: <span className={stls.value}>Психолог–консультант</span>
      </p>

      <p className={stls.label}>
        Зарплата: <span className={stls.value}>от 90.000 руб.</span>
      </p>
    </div>
  </div>
)

export default ProfileCard
