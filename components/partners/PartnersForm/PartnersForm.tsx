'use client'
import stls from './PartnersForm.module.sass'
import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import Button from '@/components/btns/Button'
import { useState } from 'react'
import axios from 'axios'
import routes from '@/config/routes'
import BtnClose from '../../btns/BtnClose'

type FormValues = {
  name: string
  message: string
  phone: string
  email: string
  mail_type: string
}
type Props = {
  onClose: () => void
  title: string
}

const PartnersForm = ({ onClose, title }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
    reset
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      mail_type: 'info'
    }
  })
  const description = 'Что бы стать партнером заполните короткую форму'
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      const response = await axios.post(`${routes.back.api}/mails/send`, data)
      if (response.status === 200) {
        reset()
        alert('Форма успешно отправлена!')
        onClose()
      } else {
        alert('Ошибка! Попробуйте позже.')
        onClose()
      }
    } catch (err) {
      alert('Ошибка! Попробуйте позже.')
      onClose()
    } finally {
      setIsSubmitting(false)
    }
  }

  const disabled =
    !dirtyFields.email ||
    !dirtyFields.name ||
    !dirtyFields.phone ||
    !dirtyFields.message ||
    isSubmitting

  return (
    <section className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={onClose} iconCloseCircle />
      </div>
      <h3 className={stls.title}>{title}</h3>
      <p className={stls.desc}>{description}</p>
      <form method='post' className={stls.form} onSubmit={handleSubmit(onSubmit)}>
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
          {errors.name && <p className={stls.err}>{errors.name.message}</p>}
        </div>

        <div className={stls.group}>
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
            {errors.phone && <p className={stls.err}>{errors.phone.message}</p>}
          </div>
          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша почта'
              placeholder='Ваша почта'
              {...register('email', {
                pattern: {
                  value:
                    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message: 'Введите адрес электронной почты в корректном формате'
                }
              })}
            />
            {errors.email && <p className={stls.err}>{errors.email.message}</p>}
          </div>

          <div className={classNames(stls.inpt, stls.messageToHR)}>
            <textarea
              aria-label='Сообщение рекрутеру'
              placeholder='Сообщение'
              {...register('message', {
                required: `*Введите ваше сообщение рекрутеру`,
                maxLength: {
                  value: 300,
                  message: `*Не больше 300 символов`
                }
              })}
            />
            {errors.message && <p className={stls.err}>{errors.message.message}</p>}
          </div>
        </div>
        <Button text='Отправить' isDisabled={disabled} />
      </form>
    </section>
  )
}

export default PartnersForm
