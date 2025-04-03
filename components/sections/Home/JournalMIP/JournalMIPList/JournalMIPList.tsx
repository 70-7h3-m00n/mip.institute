import Image from 'next/image'
import styles from './JournalMIPList.module.sass'
import { TBlog } from '@/types/index'
import Link from 'next/link'
import { routes } from '@/config/index'

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
        <Link
          key={index}
          href={`${routes.front.journals}/${el.slug}`}
          className={styles.buttonContainer}
          passHref>
          <div className={styles.card}>
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
        </Link>
      ))}
    </div>
  )
}

export default JournalMIPList
