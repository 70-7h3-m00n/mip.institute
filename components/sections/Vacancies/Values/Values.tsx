import stls from './Values.module.sass'
import Wrapper from '@/ui/Wrapper'
import ValueCard from '@/components/sections/Vacancies/Values/ValueCard/ValueCard'
import ValuesIcons from '@/components/sections/Vacancies/Values/ValuesIcons/ValuesIcons'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import classNames from 'classnames'
import { VacanciesCommonCardProps } from '@/types/page/vacancies/TypePageVacanciesPropsQuery'

type Props = {
  props: VacanciesCommonCardProps
}

const Values = ({ props: { title, quote } }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const uniqueQuotes = quote.filter(
    (item, index, self) => index === self.findIndex(q => q.title === item.title)
  )

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        <div className={stls.cards}>
          {isMobileAndTabletLayout
            ? uniqueQuotes.flatMap(({ body, title }, index) => {
                if (index === 2) {
                  return [
                    <div className={classNames(stls.mobImages, stls.skipNumber)} key={index}>
                      <ValuesIcons likeJob />
                      <ValuesIcons />
                    </div>,
                    <ValueCard key={index} description={body} title={title} />
                  ]
                }
                if (index === 4) {
                  return [null, <ValueCard key={index} description={body} title={title} />]
                }
                return <ValueCard key={index} description={body} title={title} />
              })
            : uniqueQuotes.flatMap(({ body, title }, index) => {
                if (index === 2) {
                  return [
                    <div
                      className={classNames(stls.cardImage, stls.skipNumber)}
                      key={`icon-${index}`}>
                      <ValuesIcons likeJob />
                    </div>,
                    <ValueCard key={index} description={body} title={title} />
                  ]
                }

                if (index === 3) {
                  return [
                    <div
                      className={classNames(stls.cardImage, stls.skipNumber)}
                      key={`icon-${index}`}>
                      <ValuesIcons />
                    </div>,
                    <ValueCard key={index} description={body} title={title} />
                  ]
                }

                return <ValueCard key={index} description={body} title={title} />
              })}
        </div>
      </Wrapper>
    </section>
  )
}

export default Values
