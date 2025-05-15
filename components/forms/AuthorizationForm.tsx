import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import stls from '@/styles/components/forms/AuthorizationForm.module.sass'

interface FormData {
  login: string
  password: string
}

interface AuthorizationFormProps {
  className?: string
}

const AuthorizationForm = ({ className }: AuthorizationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      login: '',
      password: ''
    }
  })

  // const onSubmit = async (data: FormData) => {
  //   setIsSubmitting(true)
  //   setError(null)
  //
  //   try {
  //     const result = await signIn('credentials', {
  //       redirect: false,
  //       email: data.login,
  //       password: data.password
  //     })
  //
  //     if (result?.error) {
  //       setError('Неверный логин или пароль')
  //     } else if (result?.ok) {
  //       router.push('/promocodes')
  //     }
  //   } catch (err) {
  //     setError('Произошла ошибка при авторизации. Попробуйте снова.')
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  return (
    <div className={classNames(stls.container, className)}>
      <div className={stls.formContainer}>
        <h2 className={stls.title}>Авторизация</h2>

        {error && <div className={stls.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit(() => {})} className={stls.form}>
          <div className={stls.formGroup}>
            <label htmlFor='login' className={stls.label}>
              Email
            </label>
            <input
              id='login'
              type='email'
              placeholder='Введите email'
              className={classNames(stls.input, {
                [stls.inputError]: errors.login
              })}
              disabled={isSubmitting}
              {...register('login', {
                required: 'Email обязателен',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Введите валидный email'
                }
              })}
            />
            {errors.login && <div className={stls.errorMessage}>{errors.login.message}</div>}
          </div>

          <div className={stls.formGroup}>
            <label htmlFor='password' className={stls.label}>
              Пароль
            </label>
            <input
              id='password'
              type='password'
              placeholder='Введите пароль'
              className={classNames(stls.input, {
                [stls.inputError]: errors.password
              })}
              disabled={isSubmitting}
              {...register('password', {
                required: 'Пароль обязателен',
                minLength: {
                  value: 6,
                  message: 'Пароль должен быть не короче 6 символов'
                }
              })}
            />
            {errors.password && <div className={stls.errorMessage}>{errors.password.message}</div>}
          </div>

          <button type='submit' className={stls.button} disabled={isSubmitting}>
            {isSubmitting ? 'Авторизация...' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthorizationForm
