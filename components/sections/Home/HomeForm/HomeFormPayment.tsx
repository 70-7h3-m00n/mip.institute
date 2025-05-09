import classNames from 'classnames'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import Popup from 'reactjs-popup'
import { useContext, useEffect, useState } from 'react'
import PopupThankyouNew from '@/components/popups/PopupThankYouNew'
import { usePathname } from 'next/navigation'
import { ContextStaticProps } from '@/context/index'
import stls from './HomeFormPayment.module.sass'
import { getCookie } from 'cookies-next'
import genezis from '@/helpers/funcs/genezis'
import getTicket from '@/helpers/funcs/getTicket'
import { segmentsObject } from '@/ui/FortuneWheel/constants'
import dev from '@/config/dev'
import PopupLoading from '@/components/popups/PopupLoading'

type FormValues = {
  name: string
  phone: string
  email: string
  promocode: string
  gift: string
  question: string
  leadPage: string
  isActivePromocode?: string
}

interface Props {
  cta?: string
  blockForAmo?: string
  question?: boolean
  popup?: boolean
  atFooter?: boolean
  agreement?: boolean
  promo?: boolean
  inProfessions?: boolean
  isLiveCourse?: boolean
  isActivePromocode?: string
  isViolet?: boolean
  withGift?: boolean
}

const BuildYourBrandPaymentForm = ({
  cta = 'Подобрать программу',
  blockForAmo = 'Подобрать программу',
  // question = false,
  popup = false,
  // atFooter = false,
  // agreement = false,
  // promo = false,
  isActivePromocode = '',
  withGift = false
}: Props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [thanksIsOpen, setThanksIsOpen] = useState(false)
  const [isIpCheckFailed, setIsIpCheckFailed] = useState(false)
  const [loading, setLoading] = useState(false)
  const { program, seminar, bachelor } = useContext(ContextStaticProps)
  const [tickets, setTickets] = useState(1)
  const { updateTicketsQuantity } = useContext(ContextStaticProps)

  const getGiftCodeByText = (text: string | null) => {
    const segment = segmentsObject.find(segment => segment.text === text)
    return segment ? segment.giftCode : ''
  }

  const {
    register,
    handleSubmit,
    setFocus,
    control,
    setValue,
    unregister,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      promocode: isActivePromocode ?? isActivePromocode
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && withGift) {
      const storedText = localStorage.getItem('fortuneWheelResult') || null
      const code = getGiftCodeByText(storedText)

      if (code) {
        setValue('gift', code)
      }
    } else {
      unregister('gift') // Убираем поле gift, если withGift = false
    }
  }, [withGift, setValue, unregister])

  useEffect(() => {
    popup && setFocus('name')
  }, [setFocus, popup])
  const [clientReferer, setClientReferer] = useState<string | null>(null)

  const [clientUtms, setClientUtms] = useState<string | null>(null)

  const [yandexMetricaId, setYandexMetricaId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Проверяем, что код выполняется в браузере
      try {
        const storedReferer = sessionStorage.getItem('referrer')
        const storedUTMS = sessionStorage.getItem('utms')
        const ym_uid = localStorage.getItem('ym_uid')

        setClientReferer(storedReferer ? storedReferer : '')
        setClientUtms(storedUTMS ? storedUTMS : '{}')
        setYandexMetricaId(ym_uid ? ym_uid : '')
      } catch (error) {
        console.error('Ошибка парсинга referer:', error)
        setClientReferer(null)
      }
    }
  }, [])

  const pathname = usePathname()
  console.log(pathname, clientReferer)

  const onSubmit = async data => {
    setIsDisabled(true)
    setLoading(true)

    const roistatAB = getCookie('homePageAB')?.toString() || ''

    // handle loader
    data.roistatAB = roistatAB
    data.leadPage = pathname
    const utms = clientUtms
    data.utms = utms
    sessionStorage.removeItem('utms')
    const referer = clientReferer
    data.referer = referer
    sessionStorage.removeItem('referer')
    const ymUid = yandexMetricaId
    data.ymUid = ymUid
    data.program = program?.title || null
    const clickId = getCookie('utm')

    const roistat_visit = getCookie('roistat_visit')
    const advcake_track_id = getCookie('advcake_track_id')
    const advcake_track_url = getCookie('advcake_track_url')
    const price = program?.price || bachelor?.offlineFullPrice / 2 || null
    data.price = price

    data.gift = localStorage.getItem('fortuneWheelResult')

    data.blockForAmo = blockForAmo

    if (typeof clickId === 'string') {
      data.utm = JSON.parse(clickId)
    } else {
      data.utm = null // или какое-то другое значение по умолчанию
    }

    if (cta === 'Выбрать билеты') {
      data.tickets = tickets
      const seminar_date = new Date(seminar.date)
      data.date = seminar_date.getTime()
      data.seminar_id = seminar.id
      data.seminar_tickets_quantity = seminar.tickets_quantity
      data.price = seminar.price * tickets
      data.seminar_title = seminar.title
      const req = await getTicket(data)
      updateTicketsQuantity(req)
    } else {
      data.advcake_track_id = advcake_track_id
      data.advcake_track_url = advcake_track_url
      data.roistat_visit = roistat_visit
      if (dev) {
        const req = await genezis(data)
        setThanksIsOpen(true)
        setLoading(false)
      } else {
        const req = await genezis(data)

        if (req === 200) {
          setLoading(false)
          // window.open(
          //   `${routes.front.gratefull}?email=${data.email}&name=${data.name}`,
          //   '_blank'
          // )
          setIsIpCheckFailed(false)
          setIsDisabled(true)
          setThanksIsOpen(true)
        } else {
          setLoading(false)
          setThanksIsOpen(true)
          setIsIpCheckFailed(true)
        }
      }
    }
  }

  return (
    <>
      <Popup open={thanksIsOpen} closeOnDocumentClick onClose={() => setThanksIsOpen(false)}>
        <PopupThankyouNew close={() => setThanksIsOpen(false)} />
      </Popup>
      <Popup open={loading} onClose={() => setLoading(false)}>
        <PopupLoading />
      </Popup>
      <div className={stls.container}>
        <form method='post' className={stls.form} onSubmit={handleSubmit(data => onSubmit(data))}>
          <div className={stls.group}>
            <div className={classNames(stls.inpt, stls.name)}>
              <p className={stls.placeholder}>Ваше имя</p>
              <input
                type='text'
                aria-label='Ваше имя'
                placeholder='Имя'
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
              {errors.name?.message && <p className={stls.err}>{errors.name.message}</p>}
            </div>
            <div className={classNames(stls.inpt, stls.phone)}>
              <p className={stls.placeholder}>Ваш номер телефона</p>
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
                  />
                )}
              />
              {errors.phone?.message && <p className={stls.err}>{errors.phone.message}</p>}
            </div>

            <div className={classNames(stls.inpt, stls.email)}>
              <p className={stls.placeholder}>Ваша почта</p>
              <input
                type='email'
                aria-label='Ваша почта'
                placeholder='Почта'
                {...register('email', {
                  pattern: {
                    value:
                      /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, // prettier-ignore
                    message:
                      'Пожалуйста, введите корректный адрес электронной почты в формате example@mail.ru'
                  }
                })}
              />
              {errors.email?.message && <p className={stls.err}>{errors.email.message}</p>}
            </div>
          </div>
          <button type='submit' className={stls.btn} disabled={isDisabled}>
            Записаться
          </button>
          {isIpCheckFailed && (
            <p className={stls.checkError}>
              Невозможно отправить форму, пожалуйста, свяжитесь с нами по номеру{' '}
              <a href='tel:+7-499-110-88-19'>+7 (499) 110-88-19</a> или{' '}
              <a
                className={stls.whatsUpNumber}
                target='_blank'
                rel='noopener noreferrer'
                href='https://api.whatsapp.com/send/?phone=%2B74991108819&amp;text&amp;type=phone_number&amp;app_absent=0'>
                Напишите в WhatsApp
              </a>
            </p>
          )}{' '}
        </form>
      </div>
    </>
  )
}

export default BuildYourBrandPaymentForm
