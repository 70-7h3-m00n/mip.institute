import JournalMIPList from './JournalMIPList/JournalMIPList'
import styles from './JournalMIP.module.sass'
import Wrapper from '@/ui/Wrapper'
import { routes } from '@/config/index'
import Link from 'next/link'
import { TBlog } from '@/types/index'
interface JournalMIPProps {
  data: TBlog[]
}

const JournalMIP = ({ data }: JournalMIPProps) => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>Наш журнал</h2>
        <p className={styles.description}>
          Приглашаем вас в блог о психологии, где разбираем интересные и важные темы простым языком
        </p>
        <JournalMIPList data={data} />
        <div className={styles.buttonContainer}>
          <Link href={routes.front.journals} className={styles.text} passHref>
            Читать все статьи
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}

export default JournalMIP
