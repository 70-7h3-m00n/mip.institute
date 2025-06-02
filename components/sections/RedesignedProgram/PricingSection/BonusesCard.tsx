import stls from './BonusesCard.module.sass'
import { bonusesData } from './bonusesData'

const BonusesCard = () => {
  return (
    <div className={stls.card}>
      <div className={stls.containerTitle}>
        <p className={stls.title}>{bonusesData.title}</p>
        <p className={stls.subtitle}>({bonusesData.subtitle})</p>
        <div className={stls.tags}>
          <span className={`${stls.tag} ${stls.hashTag}`}>#</span>
          {bonusesData.tags.map((tag, i) => (
            <span className={stls.tag} key={i}>
              {tag}
            </span>
          ))}
          <span className={`${stls.tag} ${stls.hashTag}`}>#</span>
        </div>
      </div>

      <ul className={stls.list}>
        {bonusesData.items.map((item, i) => (
          <li key={i}>
            {item.split('\n').map((line, j) => (
              <span key={j}>
                {line}
                <br />
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BonusesCard
