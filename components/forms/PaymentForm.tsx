import stls from '@/styles/components/forms/PaymentForm.module.sass'
import classNames from 'classnames'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import BtnClose from '@/components/btns/BtnClose'
import routes from '@/config/routes'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import payment from '@/helpers/funcs/payment'

type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
}

type Props = {
  onClose: () => void
  program: {
    price
    lmsId
  }
}

const PaymentForm = ({ onClose, program }: Props) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields }
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: ''
    }
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isAgree, setIsAgree] = useState(false)

  const onSubmit = async data => {
    data.leadPage = router.asPath
    // @ts-ignore
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    data.referer = referer
    data.price = program.price
    data.lmsId = program.lmsId
    const utm = getCookie('utm')
    if (typeof utm === 'string') {
      data.utm = JSON.parse(utm)
    } else {
      data.utm = null // или какое-то другое значение по умолчанию
    }
    const resp = await payment(data)
    if (resp && resp.url) {
      window.open(resp.url, '_blank')
    } else {
      console.error('No URL found in response')
    }
  }

  const isDisabled =
    !dirtyFields.email ||
    !dirtyFields.name ||
    !dirtyFields.phone ||
    !dirtyFields.surname ||
    !isAgree

  return (
    <div className={stls.container}>
      <span className={stls.closeButton}>
        <BtnClose onClick={onClose} />
      </span>

      <form
        method='post'
        className={stls.form}
        onSubmit={handleSubmit(data => onSubmit(data))}>
        <div className={stls.group}>
          <div className={classNames(stls.inpt, stls.name)}>
            <input
              type='text'
              aria-label='Ваше имя'
              placeholder='Ваше имя'
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
          <div className={classNames(stls.inpt, stls.name)}>
            <input
              type='text'
              aria-label='Ваша фамилия'
              placeholder='Ваша фамилия'
              {...register('surname', {
                required: `*Введите вашу фамилию`,
                minLength: {
                  value: 2,
                  message: `*Введите вашу фамилию`
                },
                maxLength: {
                  value: 32,
                  message: `*Не больше 32 символов`
                }
              })}
            />
            <p className={stls.err}>
              {errors.surname && errors.surname.message}
            </p>
          </div>

          <div className={classNames(stls.inpt, stls.phone)}>
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
            {errors.phone && (
              <p className={stls.err}>{errors.phone && errors.phone.message}</p>
            )}
          </div>
          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша электронная почта'
              placeholder='Ваша электронная почта'
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
        <div className={stls.footer}>
          <div className={stls.checkboxBlock}>
            <label htmlFor='agreement'>
              <input
                aria-label='Согласие об оферте'
                type='checkbox'
                checked={isAgree}
                onChange={() => setIsAgree(!isAgree)}
                name='agreement'
                className={stls.checkbox}
              />
              Согласен(-а) с условиями
              <a
                href={routes.front.policiesOferta}
                target='_blank'
                rel='noopener noreferrer'
                className={stls.link}>
                <span className={stls.text}> договора оферты</span>
              </a>
            </label>
          </div>
          <div className={stls.price}>
            <span>Сумма к оплате: </span>
            <span>{program.price} руб.</span>
          </div>
          <div className={stls.btnBlock}>
            <button className={stls.btn} disabled={isDisabled}>
              Оплатить
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
