'use client'
import Wrapper from '@/ui/Wrapper'
import ru from 'react-phone-input-2/lang/ru.json'
import Button from '@/components/btns/Button'
import stls from './HelpWithChoice.module.sass'
import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'

type FormValues = {
  name: string
  phone: string
  email: string
}

interface Props {
  startHandler: () => void
}

const HelpWithChoice = ({ startHandler }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [_success, setSuccess] = useState<string | null>(null)
  const [_error, setError] = useState<string | null>(null)
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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setError(null)
    setSuccess(null)
    console.log(data)

    // try {
    // const response = await axios.post(`${routes.front.root}/api/sendEmailToHR`, data)
    //   if (response.status === 200) {
    //     reset()
    //     setSuccess('Форма успешно отправлено!')
    //     alert(success)
    //   } else {
    //     setError('Ошибка! Попробуйте позже.')
    //     alert(error)
    //   }
    // } catch (err) {
    //   setError('Ошибка! Попробуйте позже.')
    //   alert(error)
    // } finally {
    //   setIsSubmitting(false)
    // }
  }

  const disabled = !dirtyFields.email || !dirtyFields.name || !dirtyFields.phone || isSubmitting

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Помощь с выбором</h2>
        <div className={stls.blocks}>
          <div className={stls.testBlock}>
            <p className={stls.header}>
              Пройдите опрос и узнайте,
              <br /> какая программа вам подойдет
            </p>
            <Button text='Пройти тест' onClick={startHandler} />
          </div>

          <div className={stls.formBlock}>
            <p className={stls.header}>
              Ответим на все ваши вопросы
              <br /> и поможем подобрать профессию
            </p>
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
                  {errors.phone && (
                    <p className={stls.err}>{errors.phone && errors.phone.message}</p>
                  )}
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
              </div>
              <Button text='Отправить' isDisabled={disabled} />
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HelpWithChoice
