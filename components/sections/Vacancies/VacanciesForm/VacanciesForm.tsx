import stls from './VacanciesForm.module.sass'
import FolderIcon from '@/components/sections/Vacancies/VacanciesForm/FolderIcon'
import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import Button from '@/components/btns/Button'
import { useState } from 'react'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import axios from 'axios'
import routes from '@/config/routes'

type FormValues = {
  name: string
  messageToHR: string
  phone: string
  email: string
}

const VacanciesForm = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  console.log(isSubmitting, success, error)
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
      messageToHR: ''
    }
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setError(null)
    setSuccess(null)
    try {
      const response = await axios.post(`${routes.front.root}/api/sendEmailToHR`, data)
      if (response.status === 200) {
        reset()
        setSuccess('Форма успешно отправлено!')
        alert(success)
      } else {
        setError('Ошибка! Попробуйте позже.')
        alert(error)
      }
    } catch (err) {
      setError('Ошибка! Попробуйте позже.')
      alert(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const disabled =
    !dirtyFields.email ||
    !dirtyFields.name ||
    !dirtyFields.phone ||
    !dirtyFields.messageToHR ||
    isSubmitting

  return (
    <section className={stls.container}>
      <div className={stls.columns}>
        <div className={stls.left}>
          <h2 className={stls.title}>Не нашли подходящей для себя вакансии?</h2>
          <p className={stls.description}>
            Мы будем рады познакомиться с талантливыми и целеустремленными соискателями! Заполните форму
            обратной связи, расскажите о себе, даже если не нашли вакансии под свои требования и навыки&nbsp;
            <span className={stls.bold}>
              Поделитесь, почему вы хотите стать частью нашей команды.
            </span>
          </p>
          {!isMobileAndTabletLayout && (
            <div className={stls.icon}>
              <FolderIcon />
            </div>
          )}
        </div>

        <div className={stls.right}>
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
                {errors.phone && <p className={stls.err}>{errors.phone && errors.phone.message}</p>}
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
                  {...register('messageToHR', {
                    required: `*Введите ваше сообщение рекрутеру`,
                    maxLength: {
                      value: 300,
                      message: `*Не больше 300 символов`
                    }
                  })}
                />
                {errors.messageToHR && <p className={stls.err}>{errors.messageToHR.message}</p>}
              </div>
            </div>
            <Button text='Отправить' isDisabled={disabled} />
          </form>
          {isMobileAndTabletLayout && (
            <div className={stls.icon}>
              <FolderIcon />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default VacanciesForm
