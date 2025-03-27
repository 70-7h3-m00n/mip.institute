import Image from 'next/image'
import styles from './JournalMIPList.module.sass'
import { TBlog } from '@/types/index'

interface JournalMIPListProps {
  data: TBlog[]
}
const JournalMIPList = ({ data }: JournalMIPListProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long'
    })
  }

  return (
    <div className={styles.containerList}>
      {data.map((el, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={el.picture.url}
              alt='Журнал'
              width={570}
              height={343}
              className={styles.image}
            />
          </div>
          <p className={styles.title}>{el.title}</p>
          <p className={styles.date}>{formatDate(el.date)}</p>
        </div>
      ))}
    </div>
  )
}

export default JournalMIPList
