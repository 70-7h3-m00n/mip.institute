import stls from './MissionBlockCards.module.sass'
import Wrapper from '@/ui/Wrapper'
import { values } from 'constants/about/values'

const MissionBlockCards = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.cards}>
          {values.map(({ title, body }, index) => (
            <div key={title + index} className={stls.card}>
              <span className={stls.cardTitle}>{title}</span>
              <span className={stls.cardDescription}>{body}</span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default MissionBlockCards
