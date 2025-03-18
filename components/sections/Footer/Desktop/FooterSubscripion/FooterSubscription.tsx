import { useState, useCallback } from 'react'
import axios from 'axios'
import Button from '@/components/btns/Button'
import stls from './FooterSubscription.module.sass'

const FooterSubscription = () => {
  const [form, setForm] = useState({
    email: '',
    agreed: false,
    loading: false,
    message: { text: '', type: '' }
  })

  const validateForm = () => {
    if (!form.email) {
      setForm(prev => ({ ...prev, message: { text: 'Введите ваш email', type: 'error' } }))
      return false
    }
    if (!validateEmail(form.email)) {
      setForm(prev => ({ ...prev, message: { text: 'Введите корректный email', type: 'error' } }))
      return false
    }
    if (!form.agreed) {
      setForm(prev => ({
        ...prev,
        message: { text: 'Вы должны дать согласие на рассылку', type: 'error' }
      }))
      return false
    }
    return true
  }

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = useCallback(e => {
    setForm(prev => ({
      ...prev,
      email: e.target.value,
      message: { text: '', type: '' }
    }))
  }, [])

  const handleCheckbox = useCallback(() => {
    setForm(prev => ({
      ...prev,
      agreed: !prev.agreed,
      message: { text: '', type: '' }
    }))
  }, [])

  const showServerMessage = (text, type) => {
    setForm(prev => {
      const updatedForm = {
        ...prev,
        loading: false,
        message: { text, type }
      }

      if (type === 'success') {
        updatedForm.email = ''
        updatedForm.agreed = false
      }

      return updatedForm
    })

    setTimeout(() => {
      setForm(prev => ({ ...prev, message: { text: '', type: '' } }))
    }, 3000)
  }

  const handleSubscribe = async () => {
    if (!validateForm()) return

    setForm(prev => ({ ...prev, loading: true, message: { text: '', type: '' } }))

    try {
      const response = await axios.post('/api/subscribe', { email: form.email })

      if (response.data.success) {
        showServerMessage('Вы успешно подписаны!', 'success')
      } else {
        showServerMessage('Ошибка при подписке, попробуйте позже', 'error')
      }
    } catch (error) {
      showServerMessage('Ошибка сети, попробуйте позже', 'error')
    }
  }

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
          <input
            className={stls.input}
            placeholder='Ваша почта'
            value={form.email}
            onChange={handleChange}
          />
          {form.message.text && (
            <div
              className={`${stls.message} ${form.message.type === 'success' ? stls.success : stls.error}`}>
              {form.message.text}
            </div>
          )}
          <div className={stls.checkboxBlock}>
            <label htmlFor='agreement'>
              <input
                aria-label='Согласие на получение информационных рассылок'
                type='checkbox'
                name='agreement'
                className={stls.checkbox}
                checked={form.agreed}
                onChange={handleCheckbox}
              />
              Даю согласие на получение информационных и маркетинговых рассылок <br />
              (вы в любой момент можете отказаться от получения писем в личном кабинете)
            </label>
          </div>
        </div>

        <Button
          text={form.loading ? 'Отправка...' : 'Подписаться'}
          onClick={handleSubscribe}
          isDisabled={form.loading}
        />
      </div>
    </div>
  )
}

export default FooterSubscription
