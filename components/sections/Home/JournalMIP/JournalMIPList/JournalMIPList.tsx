import Image from 'next/image'
import styles from './JournalMIPList.module.sass'
import img1 from './journal1.jpg'
import img2 from './journal2.jpg'

const JournalMIPList = () => {
  const data = [
    { image: img2, title: 'Профессия «Психолог»', description: '15 сентября' },
    { image: img1, title: 'Нутрициолог и диетолог: разница', description: '25 сентября' }
  ]

  return (
    <div className={styles.containerList}>
      {data.map((el, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image src={el.image} alt='Журнал' width={570} height={343} className={styles.image} />
          </div>
          <p className={styles.title}>{el.title}</p>
          <p className={styles.description}>{el.description}</p>
        </div>
      ))}
    </div>
  )
}

export default JournalMIPList
