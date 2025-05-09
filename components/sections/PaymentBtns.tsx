import stls from '@/styles/components/sections/PaymentBtns.module.sass'
import Wrapper from '@/ui/Wrapper'
import BtnAlpha from '@/components/btns/BtnAlpha'
import PopupTrigger from '@/ui/PopupTrigger'

const PaymentBtns = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.btns}>
          <div className={stls.btn}>
            <BtnAlpha
              text='Оплата банковской картой'
              href='https://securepayments.sberbank.ru/shortlink/MAViQpOW'
              target='_blank'
            />
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='delta' cta='help' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PaymentBtns
