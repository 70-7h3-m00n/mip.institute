import stls from './Benefits.module.sass'
import Wrapper from '@/ui/Wrapper'
import { VacanciesCommonCardProps } from '@/types/page/vacancies/TypePageVacanciesPropsQuery'

type Props = {
  props: VacanciesCommonCardProps
}

const Benefits = ({ props: { title, quote } }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        <div className={stls.cards}>
          {quote.map(({ title, body }, index) => (
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

export default Benefits
