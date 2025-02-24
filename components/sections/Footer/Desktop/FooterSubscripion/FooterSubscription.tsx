import Button from '@/components/btns/Button'
import stls from './FooterSubscription.module.sass'

const FooterSubscription = () => {
  return (
    <div className={stls.container}>
      <div>
        <span className={stls.header}>Ценные знания от экспертов МИП</span>
        <span className={stls.description}>
          Подписка на рассылку — ваш источник знаний, психологических инсайтов и приглашений на
          образовательные мероприятия
        </span>
      </div>

      <div className={stls.interactive}>
        <div className={stls.inputWrapper}>
          <input className={stls.input} placeholder='Ваша почта' />
          <div className={stls.checkboxBlock}>
            <label htmlFor='agreement'>
              <input
                aria-label='Согласие на получение информационных рассылок'
                type='checkbox'
                name='agreement'
                className={stls.checkbox}
              />
              Даю согласие на получение информационных и маркетинговых рассылок
              <br /> (вы в любой момент можете отказаться от получения писем в личном кабинете)
            </label>
          </div>
        </div>

        <Button text='Подписаться' />
      </div>
    </div>
  )
}

export default FooterSubscription
