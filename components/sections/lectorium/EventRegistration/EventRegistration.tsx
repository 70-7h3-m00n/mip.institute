import stls from './EventRegistration.module.sass'
import TwoBlocks from '@/ui/TwoBlocks'
import Countdown from '../Countdown/Countdown'
import EventPaymentForm from '@/components/forms/EventPaymentForm'
import Wrapper from '@/ui/Wrapper'

type Props = {
  targetDate: string
  timepadHref: string
}

const EventRegistration = ({ targetDate, timepadHref }: Props) => {
  return (
    <section className={stls.section}>
      <Wrapper>
        <TwoBlocks>
          <div className={stls.form}>
            <EventPaymentForm timepadHref={timepadHref} />
          </div>
          <Countdown targetDate={targetDate} />
        </TwoBlocks>
      </Wrapper>
    </section>
  )
}

export default EventRegistration
