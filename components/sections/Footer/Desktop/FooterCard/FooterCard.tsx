import stls from './FooterCard.module.sass'

interface Props {
  title: string
  description: string
}

const FooterCard = ({ title, description }: Props) => {
  return (
    <div className={stls.containerCard}>
      <span className={stls.title}>{title}</span>
      <span className={stls.desc}>{description}</span>
    </div>
  )
}

export default FooterCard
