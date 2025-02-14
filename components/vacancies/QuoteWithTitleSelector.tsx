import Benefits from '@/components/sections/Vacancies/Benefits/Benefits'
import Values from '@/components/sections/Vacancies/Values/Values'
import HowBecomeaPart from '@/components/sections/Vacancies/HowBecomeaPart/HowBecomeaPart'

export default function QuoteWithTitleSelector({ props }) {
  switch (props.title) {
    case 'Преимущества':
      return <Benefits props={props} />
    case 'Наши ценности':
      return <Values props={props} />
    case 'Как стать частью команды МИП?':
      return <HowBecomeaPart props={props} />
    default:
      break
  }
}
