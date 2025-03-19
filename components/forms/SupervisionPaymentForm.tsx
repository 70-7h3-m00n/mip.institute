import routes from '@/config/routes'
import genezis from '@/helpers/funcs/genezis'
import payment from '@/helpers/funcs/payment'
import stls from '@/styles/components/forms/SupervisionPaymentForm.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import PopupThankyouNew from '../popups/PopupThankYouNew'
import Popup from 'reactjs-popup'
import { useState } from 'react'

type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
}

const SupervisionPaymentForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields }
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  })
  const [thanksIsOpen, setThanksIsOpen] = useState(false)

  const onSubmit = async data => {
    data.leadPage = router.asPath
    const referer = JSON.parse(sessionStorage.getItem('referer') ?? '')
    data.referer = referer
    const utm = getCookie('utm')
    if (typeof utm === 'string') {
      data.utm = JSON.parse(utm)
    } else {
      data.utm = null
    }
    const req = await genezis(data)
    if (req === 200) {
      setThanksIsOpen(true)
    } else {
      console.error('No URL found in response')
      setThanksIsOpen(false)
    }
  }

  const isDisabled = !dirtyFields.email || !dirtyFields.name || !dirtyFields.phone

  return (
    <>
      <Popup open={thanksIsOpen} closeOnDocumentClick onClose={() => setThanksIsOpen(false)}>
        <PopupThankyouNew close={() => setThanksIsOpen(false)} />
      </Popup>
      <div className={stls.container}>
        <form method='post' className={stls.form} onSubmit={handleSubmit(data => onSubmit(data))}>
          <div className={stls.group}>
            <div className={classNames(stls.inpt, stls.name)}>
              <p className={stls.placeholder}>Ваше имя</p>
              <input
                type='text'
                aria-label='Ваше имя'
                placeholder='Имя'
                {...register('name', {
                  required: `*Введите ваше имя`,
                  minLength: {
                    value: 2,
                    message: `*Введите ваше имя`
                  },
                  maxLength: {
                    value: 32,
                    message: `*Не больше 32 символов`
                  }
                })}
              />
              <p className={stls.err}>{errors.name && errors.name.message}</p>
            </div>
            <div className={classNames(stls.inpt, stls.phone)}>
              <p className={stls.placeholder}>Ваш номер телефона</p>
              <Controller
                name='phone'
                control={control}
                rules={{
                  minLength: {
                    value: 8,
                    message: `*Минимум 8 цифр`
                  },
                  required: `*Номер телефона обязателен`
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    country='ru'
                    localization={ru}
                    placeholder='Ваш телефон'
                    containerClass={stls.containerInput}
                    inputClass={stls.phoneInput}
                    buttonClass={stls.flagButton}
                    dropdownClass={stls.dropdown}
                    containerStyle={{
                      marginBottom: `${errors.phone ? '5px' : '20px'}`
                    }}
                  />
                )}
              />
              {errors.phone && <p className={stls.err}>{errors.phone && errors.phone.message}</p>}
            </div>

            <div className={classNames(stls.inpt, stls.email)}>
              <p className={stls.placeholder}>Ваша почта</p>
              <input
                type='email'
                aria-label='Ваша почта'
                placeholder='Почта'
                {...register('email', {
                  pattern: {
                    value:
                      /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message:
                      'Пожалуйста, введите корректный адрес электронной почты в формате example@mail.ru'
                  }
                })}
              />
              <p className={stls.err}>{errors.email && errors.email.message}</p>
            </div>
          </div>
          <button className={stls.btn} disabled={isDisabled}>
            Записаться
          </button>
        </form>
      </div>
    </>
  )
}

export default SupervisionPaymentForm
