import BtnAlpha from '@/components/btns/BtnAlpha'
import stls from '@/styles/components/forms/LivePaymentForm.module.sass'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import payment from '@/helpers/funcs/payment'

type FormValues = {
  name: string
  phone: string
  email: string
}

interface Props {
  cta?: string
  isLiveCourse?: boolean
  program: {
    price
    lmsId
  }
}

const LivePaymentForm = ({
  cta = 'И разобраться с обидами',
  isLiveCourse = false,
  program
}: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  })

  const [isDisabled, setIsDisabled] = useState(false)

  const router = useRouter()

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

  return (
    <>
      <form
        method='post'
        className={classNames({
          [stls.containet]: true,
          [stls.inLiveCourses]: isLiveCourse
        })}
        onSubmit={handleSubmit(data => onSubmit(data))}>
        <div className={stls.group}>
          <div className={classNames(stls.inpt, stls.name)}>
            <input
              type='text'
              aria-label='Ваше имя'
              placeholder='Ваше имя'
              disabled={isDisabled}
              {...register('name', {
                required: `*Имя обязательно`,
                minLength: {
                  value: 2,
                  message: `*Не менее 2 символов`
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
                  disabled={isDisabled}
                  value={value}
                  onChange={onChange}
                  country='ru'
                  localization={ru}
                  placeholder='Ваш телефон'
                  containerClass={stls.containerInput}
                  inputClass={stls.phoneInput}
                  buttonClass={stls.flagButton}
                  disableDropdown={true}
                  containerStyle={{
                    marginBottom: `${errors.phone ? '5px' : '7px'}`
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
              aria-label='Email'
              placeholder='Email'
              disabled={isDisabled}
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

          <div className={stls.btn}>
            <BtnAlpha
              text={cta}
              isDisabled={isDisabled}
              isLiveCourse={isLiveCourse}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default LivePaymentForm
