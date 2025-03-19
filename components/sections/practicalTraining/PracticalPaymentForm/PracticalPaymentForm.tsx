import routes from '@/config/routes'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import stls from './PracticalPaymentForm.module.sass'
import classNames from 'classnames'
import formList from 'constants/practicalPaymentForm'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import Popup from 'reactjs-popup'
import Button from '@/components/btns/Button'
import genezis from '@/helpers/funcs/genezis'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical/TwoColumnsPractical'
import Wrapper from '@/ui/Wrapper'
import PopupLoading from '@/components/popups/PopupLoading'
import getNextFriday from '@/helpers/getNextFriday'
import { CldImage } from 'next-cloudinary'
import 'react-phone-input-2/lib/style.css'

type Props = {
  price: number
}

type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
}

const PracticalPaymentForm = ({ price }: Props) => {
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

  const onSubmit = async (data: FormValues) => {
    setIsDisabled(true)
    setIsLoading(true)

    const roistatAB = localStorage.getItem('AB')
    const leadPage = router.asPath
    const utms = JSON.parse(sessionStorage.getItem('utms') ?? '{}')
    const referer = JSON.parse(sessionStorage.getItem('referer') ?? '')
    const ymUid = JSON.parse(localStorage.getItem('_ym_uid') ?? '')
    const clickId = getCookie('utm')
    const roistat_visit = getCookie('roistat_visit')
    const advcake_track_id = getCookie('advcake_track_id')
    const advcake_track_url = getCookie('advcake_track_url')

    const reqData = {
      ...data,
      roistatAB,
      leadPage,
      utms,
      referer,
      ymUid,
      price: finalPrice,
      blockForAmo: 'Поступить',
      utm: typeof clickId === 'string' ? JSON.parse(decodeURIComponent(clickId)) : null,
      advcake_track_id,
      advcake_track_url,
      roistat_visit
    }

    const req = await genezis(reqData)

    if (req === 200) {
      window.open(`${routes.front.gratefull}?email=${data.email}&name=${data.name}`, '_blank')
      setIsLoading(false)
      setIsIpCheckFailed(false)
    } else {
      setIsLoading(false)
      setIsIpCheckFailed(true)
    }
  }

  const disabled =
    !dirtyFields.email ||
    !dirtyFields.name ||
    !dirtyFields.phone ||
    !dirtyFields.surname ||
    !isAgree ||
    isDisabled

  const [selectedValue, setSelectedValue] = useState(formList[0].value)
  const [finalPrice, setFinalPrice] = useState(price)
  const [oldPrice, setOldPrice] = useState<null | number>(null)
  const [animatePrice, setAnimatePrice] = useState(false)

  const prices = {
    one: price,
    onePlusProf: [25000, 30000],
    all: [80000, 95000],
    two: 30000,
    twoPlusProf: [25000, 30000],
    three: 35000,
    threePlusProf: [30000, 35000]
  }

  const handleRadioChange = e => {
    const value = e.target.value
    setSelectedValue(value)
    setAnimatePrice(true) // Начинаем анимацию

    // Завершаем анимацию через CSS
    setTimeout(() => {
      const price = prices[value]
      setFinalPrice(Array.isArray(price) ? price[0] : price)
      setOldPrice(Array.isArray(price) ? price[1] : null)
      setAnimatePrice(false) // Завершаем анимацию
    }, 300) // Время должно совпадать с продолжительностью анимации в Sass
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.colouredTitle}>Оплата </span>
          обучения
        </h2>
        <TwoColumnsPractical bigLeft rightViolet>
          <div className={stls.leftBlock}>
            <p className={stls.leftBlockTitle}>
              Можете выбрать наиболее подходящий для вас вариант:
            </p>
            <div className={stls.leftContent}>
              <div className={stls.radioGroup}>
                {formList.map(({ label, value }, idx) => (
                  <div key={value} className={stls.radioItem}>
                    <input
                      type='radio'
                      value={value}
                      id={`radio-${idx}`}
                      className={stls.radio}
                      name='payment'
                      onChange={handleRadioChange}
                      checked={selectedValue === value}
                    />
                    <label htmlFor={`radio-${idx}`} className={stls.radioLabel}>
                      {label}
                    </label>
                  </div>
                ))}
                <p className={stls.remark}>
                  *При одновременном поступлении на программу проф. переподготовки
                </p>
              </div>

              <div className={stls.violetLine}></div>

              <div className={stls.giftBlock}>
                <p className={stls.giftTitle}>ИТОГО:</p>
                <p className={stls.giftSubtitle}>(стоимость программы практики)</p>
                {oldPrice && <p className={stls.oldPrice}>{toNumberWithSpaces(oldPrice)} ₽</p>}
                <p
                  className={classNames({
                    [stls.newPrice]: true,
                    [stls.fadeOut]: animatePrice,
                    [stls.fadeIn]: !animatePrice
                  })}>
                  {toNumberWithSpaces(finalPrice)} ₽
                </p>
                <div className={stls.giftImage}>
                  <CldImage
                    src='podarok_korobka_4a747c14bf'
                    width={170}
                    height={170}
                    alt='Подарок'
                    restore
                  />
                </div>
                <p className={stls.giftText}>
                  При оплате до {getNextFriday(new Date())} курс
                  <br />
                  “Жизнь, свободная от обид”
                  <br />
                  <span className={stls.giftTextBold}>в подарок</span>
                </p>
              </div>
            </div>
          </div>

          <div className={stls.formContainer}>
            <p className={stls.formTitle}>
              Заполни заявку, чтобы узнать детали и купить на лучших условиях
            </p>
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
                <div className={classNames(stls.inpt, stls.name)}>
                  <input
                    type='text'
                    aria-label='Ваша фамилия'
                    placeholder='Ваша фамилия'
                    disabled={isDisabled}
                    {...register('surname', {
                      required: `*Введите вашу фамилию`,
                      minLength: {
                        value: 2,
                        message: `*Введите вашу фамилию`
                      },
                      maxLength: {
                        value: 32,
                        message: `*Не больше 32 символов`
                      }
                    })}
                  />
                  <p className={stls.err}>{errors.surname && errors.surname.message}</p>
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
                  {errors.phone && (
                    <p className={stls.err}>{errors.phone && errors.phone.message}</p>
                  )}
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
              <div className={stls.footer} style={{ flexBasis: '100%' }}>
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
                    <span>
                      Согласен(-а) с условиями
                      <a
                        href={routes.front.policiesOferta}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={stls.link}>
                        <span className={stls.text}> договора оферты</span>
                      </a>
                    </span>
                  </label>
                </div>
              </div>
            </form>
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
                text='Записаться'
                onClick={handleSubmit(data => onSubmit(data))}
                isDisabled={disabled}
              />
            </div>
            <Popup open={isLoading} onClose={() => setIsLoading(false)}>
              <PopupLoading />
            </Popup>
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default PracticalPaymentForm
