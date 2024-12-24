import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from './FormFreeAccess.module.sass'
import axios from 'axios'
import PopupAccess from '../PopupAccess/PopupAccess'
import classNames from 'classnames'

type FormValues = {
  firstName: string
  phone: string
  email: string
  lastName: string
}
const FormFreeAccess = () => {
  const [showPopup, setShowPopup] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>()

  useEffect(() => {
    const storedLink = localStorage.getItem('accessLink')
    const storedPassword = localStorage.getItem('accessPassword')
    const storedLogin = localStorage.getItem('accessLogin')

    if (storedLink && storedPassword && storedLogin) {
      setShowPopup(true)
    }
  }, [])

  const onSubmit = async (data) => {
    try {
      if (Object.keys(errors).length > 0) {
        console.log('Form has validation errors', errors)
        return
      }

      const response = await axios.post(
        '/api/FreeAccess/generatingAccessToWebinar',
        data
      )

      const { link, password, login } = response.data

      localStorage.setItem('accessLink', link)
      localStorage.setItem('accessPassword', password)
      localStorage.setItem('accessLogin', login)

      setShowPopup(true)

    } catch (error) {
      console.error('Error generating link:', error)
    }
  }

  return (
    <>
      {showPopup && <PopupAccess />}      
      <form id="formAccess" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <Controller
            name="firstName"
            control={control}
            rules={{ 
              required: '*Имя обязательно',
              minLength: {
                value: 3,
                message: '*Имя должно содержать минимум 3 символа'
              }
            }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Введите имя"
                className={styles.input}
              />
            )}
          />
          {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <Controller
            name="lastName"
            control={control}
            rules={{ 
              required: '*Фамилия обязательно',
              minLength: {
                value: 3,
                message: '*Фамилия должна содержать минимум 3 символа'
              }
            }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Введите фамилию"
                className={styles.input}
              />
            )}
          />
          {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: '*Номера телефона обязательно',
            }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Номер телефона"
                className={styles.input}
              />
            )}
          />
          {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: '*Email обязательно',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: '*Неверный формат Email'
              }
            }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Email"
                type="email"
                className={styles.input}
              />
            )}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <button type="submit" className={classNames(styles.submitBtn, styles.onMobile)}> 
          Получить доступ
        </button>
      </form>
    </>
  )
}

export default FormFreeAccess
