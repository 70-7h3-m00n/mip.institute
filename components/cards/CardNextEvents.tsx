import stls from '@/styles/components/cards/CardNextEvents.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  seminar: Lectorium
}

const CardNextEvents = ({ seminar }: Props) => {
  if (!seminar) return null
  const date = new Date(seminar.targetDate)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = date.getUTCFullYear()
  const formattedDate = `${day}/${month}/${year}`

  return (
    <Link passHref href={seminar.slug}>
      <div className={stls.containerLink}>
        <div className={stls.imgCard}>
          <Image
            src={seminar.picture.url}
            width={730}
            height={430}
            alt='Фото программы'
            className={stls.img}
          />
        </div>
        <div className={stls.content}>
          <div className={stls.tags}>
            <span className={stls.type}>{seminar.label}</span>
            <span className={stls.type}>Сертификат</span>
          </div>
          <p className={stls.title}>{seminar.title.replace(/:$/, '')}</p>
          {seminar.date && <div className={stls.duration}>{formattedDate}</div>}
        </div>
      </div>
    </Link>
  )
}

export default CardNextEvents
