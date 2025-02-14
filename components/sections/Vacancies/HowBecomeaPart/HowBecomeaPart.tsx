import stls from './HowBecomeaPart.module.sass'
import Wrapper from '@/ui/Wrapper'
import ValueCard from '@/components/sections/Vacancies/Values/ValueCard/ValueCard'
import { CldImage } from 'next-cloudinary'
import { VacanciesCommonCardProps } from '@/types/page/vacancies/TypePageVacanciesPropsQuery'

type Props = {
  props: VacanciesCommonCardProps
}

const HowBecomeaPart = ({ props: { title, quote } }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.cards}>
          <h2 className={stls.title}>{title}</h2>
          {quote?.map(({ body, title }, index) => (
            <ValueCard key={index} description={body} title={title} />
          ))}

          <CldImage
            src='skrepka_fa00963609'
            alt='Принять'
            width={300}
            height={350}
            style={{ width: '100%' }}
            className={stls.image}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default HowBecomeaPart
