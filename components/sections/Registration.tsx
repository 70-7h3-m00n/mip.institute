import REGISTER_USER from '@/lib/graphQL/REGISTER_USER'
import { useMutation } from '@apollo/client'
import { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [registerUser] = useMutation(REGISTER_USER)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const { data } = await registerUser({
        variables: {
          input: {
            username: formData.username,
            email: formData.email,
            password: formData.password
          }
        }
      })
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Имя пользователя'
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Пароль'
          value={formData.password}
          onChange={handleChange}
        />
        <button type='submit'>Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Register
