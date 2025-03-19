import React, { ReactNode, useState } from 'react'
import Popup from 'reactjs-popup'

// Компонент первого шага - ввод почты
function Step1({ onNext }) {
  const [email, setEmail] = useState('')

  const handleNext = () => {
    // Валидация и обработка данных почты, если необходимо
    onNext()
  }

  return (
    <div>
      <input
        type='email'
        placeholder='Введите почту'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleNext}>Далее</button>
    </div>
  )
}

// Компонент второго шага - ввод имени
function Step2({ onNext }) {
  const [name, setName] = useState('')

  const handleNext = () => {
    // Валидация и обработка данных имени, если необходимо
    onNext()
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Введите имя'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleNext}>Далее</button>
    </div>
  )
}

// Компонент третьего шага - создание пароля
function Step3({ onComplete }) {
  const [password, setPassword] = useState('')

  const handleComplete = () => {
    // Валидация и обработка данных пароля, если необходимо
    onComplete()
  }

  return (
    <div>
      <input
        type='password'
        placeholder='Придумайте пароль'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleComplete}>Завершить регистрацию</button>
    </div>
  )
}

function RegistrationFlow() {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  return (
    <Popup open={true} modal closeOnDocumentClick={false}>
      {
        ((close: () => void) => (
          <div>
            {step === 1 && <Step1 onNext={handleNextStep} />}
            {step === 2 && <Step2 onNext={handleNextStep} />}
            {step === 3 && <Step3 onComplete={() => close()} />}
          </div>
        )) as unknown as ReactNode
      }
    </Popup>
  )
}

export default RegistrationFlow
