import stls from '@/styles/components/cards/CardQuizResult.module.sass'
import IconLogo from '@/components/icons/IconLogo'
import Link from 'next/link'

interface Props {
  portrait: string
  title: string
  studyHours: number
  studyMonths: number
  link?: string
}

const CardQuizResult = ({ portrait, title, studyHours, studyMonths, link }: Props) => {
  const content = (
    <div className={stls.container}>
      {portrait && <div className={stls.portrait}>{portrait}</div>}
      <div className={stls.innerContainer}>
        <p className={stls.title}>{title}</p>
        <p className={stls.subtitle}>Программа профессиональной переподготовки</p>
        <div className={stls.cardFooter}>
          <p className={stls.duration}>
            {studyMonths} месяцев / {studyHours} часов
          </p>
          <div className={stls.logoWrapper}>
            <span className={stls.logo}>
              <IconLogo withTitle />
            </span>
            <p className={stls.logoText}>
              Московский <br />
              Институт <br />
              Психологии
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return link ? (
    <Link href={link} passHref target='_blank' className={stls.link}>
      {content}
    </Link>
  ) : (
    content
  )
}

export default CardQuizResult
