import routes from '@/config/routes'
import stls from './ProgramPaymentForm.module.sass'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import Popup from 'reactjs-popup'
import BtnClose from '@/components/btns/BtnClose'
import Button from '../../btns/Button'
import PopupLoading from '@/components/popups/PopupLoading'
import genezis from '@/helpers/funcs/genezis'

type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
}

type Props = {
  onClose: () => void
  program: any
  showMore: () => void
}

const ProgramPaymentForm = ({ onClose, program, showMore }: Props) => {
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

  const [isAgree, setIsAgree] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isIpCheckFailed, setIsIpCheckFailed] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const onSubmit = async data => {
    setIsDisabled(true)
    setIsLoading(true)
    const roistatAB = getCookie('homePageAB')?.toString() || ''
    // handle loader
    data.roistatAB = roistatAB
    data.leadPage = router.asPath
    const utms = JSON.parse(sessionStorage.getItem('utms') ?? '{}')
    data.utms = utms
    sessionStorage.removeItem('utms')
    const referer = JSON.parse(sessionStorage.getItem('referer') ?? '')
    data.referer = referer
    sessionStorage.removeItem('referer')
    const ymUid = JSON.parse(localStorage.getItem('_ym_uid') ?? '')
    data.ymUid = ymUid
    const clickId = getCookie('utm')

    const roistat_visit = getCookie('roistat_visit')
    const advcake_track_id = getCookie('advcake_track_id')
    const advcake_track_url = getCookie('advcake_track_url')
    const price = program?.price || program?.offlineFullPrice / 2 || null
    data.price = price

    data.blockForAmo = 'Поступить'

    if (typeof clickId === 'string') {
      data.utm = JSON.parse(clickId)
    } else {
      data.utm = null // или какое-то другое значение по умолчанию
    }

    data.advcake_track_id = advcake_track_id
    data.advcake_track_url = advcake_track_url
    data.roistat_visit = roistat_visit
    const req = await genezis(data)

    if (req === 200) {
      window.open(`${routes.front.gratefull}?email=${data.email}&name=${data.name}`, '_blank')
      setIsLoading(false)
      setIsIpCheckFailed(false)
    } else {
      setIsLoading(false)
      setIsIpCheckFailed(true)
    }
  }

  const renderType = () => {
    const type =
      program.type === 'Profession' || program.type === 'Course' ? program.type : program.__typename

    switch (type) {
      case 'Profession':
        return 'Профессиональная переподготовка'
      case 'Course':
        return 'Повышение квалификации'
      case 'PracticalTraining':
        return 'Практическая подготовка'
      default:
        return 'Высшее образование'
    }
  }

  const disabled =
    !dirtyFields.email || !dirtyFields.name || !dirtyFields.phone || !isAgree || isDisabled

  return (
    <>
      <div className={stls.container}>
        <span className={stls.closeButton}>
          <BtnClose onClick={onClose} />
        </span>
        <div className={stls.header}>
          <h3 className={stls.title}>
            Специальность
            <br />
            &quot;{program.title}&quot;
          </h3>
        </div>
        <form method='post' className={stls.form}>
          <div className={stls.group}>
            <div className={classNames(stls.inpt, stls.name)}>
              <input
                type='text'
                aria-label='Ваше имя'
                disabled={isDisabled}
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
                    disabled={isDisabled}
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
                aria-label='Ваша электронная почта'
                placeholder='Ваша электронная почта'
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
          </div>
        </form>
        {program.studyMounthsDuration && (
          <div className={stls.info}>
            <span>Срок обучения</span>
            <div className={stls.line}></div>
            <span>
              {program.studyMounthsDuration} месяцев / {program.studyHours} часов
            </span>
          </div>
        )}
        <div className={stls.info}>
          <span>Уровень</span>
          <div className={stls.line}></div>
          <span>{renderType()}</span>
        </div>
        <div className={stls.info}>
          <span>Формат</span>
          <div className={stls.line}></div>
          <span>Онлайн</span>
        </div>
        {isIpCheckFailed && (
          <p className={stls.checkError}>
            Невозможно отправить форму.
            <br />
            Пожалуйста, свяжитесь с нами по номеру{' '}
            <a href='tel:+7-499-110-88-19'>+7 (499) 110-88-19</a> или{' '}
            <a
              className={stls.whatsUpNumber}
              target='_blank'
              rel='noopener noreferrer'
              href='https://api.whatsapp.com/send/?phone=%2B74991108819&amp;text&amp;type=phone_number&amp;app_absent=0'>
              Напишите в WhatsApp
            </a>
          </p>
        )}
        <div className={stls.buttons}>
          <Button
            text='Поступить'
            onClick={handleSubmit(data => onSubmit(data))}
            isVioletBg
            isDisabled={disabled}
          />
          <Button text='Подробнее' onClick={showMore} />
        </div>
        <Popup open={isLoading} onClose={() => setIsLoading(false)}>
          <PopupLoading />
        </Popup>
      </div>
    </>
  )
}

export default ProgramPaymentForm
