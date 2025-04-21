import IconCheck from '@/components/icons/IconCheck'
import IconTyping from '@/components/icons/IconTyping'
import styles from '@/styles/components/sections/WhoIsOurSpeakers/WhoIsOurSpeakers.module.sass'

export default function HowWeChooseSpeakers() {
  return (
    <div className={styles.chooseContainer}>
      <h2>Мы тщательно подходим к выбору спикеров</h2>
      <p className={styles.first}>
        <span>
          <IconCheck />
        </span>
        Практикующие спикеры
      </p>
      <p className={styles.second}>
        <span>
          <IconCheck />
        </span>
        Члены престижных российских и международных профессиональных объединений
        и ассоциаций
      </p>
      <p className={styles.third}>
        <span>
          <IconCheck />
        </span>
        Спикеры имеют научные степени
      </p>
      <span className={styles.dotIcon}>
      <IconTyping />
      </span>
    </div>
  )
}
