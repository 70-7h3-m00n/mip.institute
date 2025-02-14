import stls from './ValueCard.module.sass'

interface Props {
  title: string
  description: string
}

const ValueCard = (card: Props) => {
  return (
    <div className={stls.card}>
      <div className={stls.cardHeader}>
        <span className={stls.cardTitle}>{card.title}</span>
      </div>
      <span className={stls.cardDescription}>{card.description}</span>
    </div>
  )
}

export default ValueCard
