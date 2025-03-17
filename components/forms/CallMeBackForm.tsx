import BtnAlpha from '@/components/btns/BtnAlpha'
import BtnBeta from '@/components/btns/BtnBeta'
import routes from '@/config/routes'
import stls from '@/styles/components/forms/NewForm.module.sass'
import { useMutation, useQuery } from '@apollo/client'
import axios from 'axios'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Popup from 'reactjs-popup'
import CHECK_TOKENS from '@/lib/graphQL/CHECK_TOKENS'
import UPDATE_TOKEN from '@/lib/graphQL/UPDATE_TOKENS'
import dynamic from 'next/dynamic'

const PopupThankyou = dynamic(() => import('@/components/popups/PopupThankyou'), {
  ssr: false
})

type FormValues = {
  name: string
  phone: string
  email: string
  promocode: string
  question: string
  leadPage: string
}

type Props = {
  cta?: string
  blockForAmo?: string
  question?: boolean
  popup?: boolean
  atFooter?: boolean
  agreement?: boolean
}

const CallMeBackForm = ({
  cta = 'Подобрать программу',
  blockForAmo = 'Подобрать программу',
  question = false,
  popup = false,
  atFooter = false,
  agreement = false
}: Props) => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors }
  } = useForm<FormValues>()

  const [isDisabled, setIsDisabled] = useState(false)
  const [thanksIsOpen, setThanksIsOpen] = useState(false)

  useEffect(() => {
    popup && setFocus('name')
  }, [setFocus, popup])

  const router = useRouter()

  const { error, data } = useQuery(CHECK_TOKENS, {
    variables: { title: 'amo' }
  })

  const tokenId = data?.amos[0]?.id
  const expireTime = data?.amos[0]?.expired_in
  const access_token = data?.amos[0]?.access
  const refresh_token = data?.amos[0]?.refresh
  const nowUNIXtime = dayjs().unix()
  const differenceInTime = expireTime - nowUNIXtime

  const [updateTokens] = useMutation(UPDATE_TOKEN)

  const [serverErrorMeassage, setServerErrorMeassage] = useState('')

  const onSubmit = async formData => {
    setServerErrorMeassage('')

    const utms = JSON.parse(sessionStorage.getItem('utms') ?? '{}')
    formData.utms = utms
    sessionStorage.removeItem('utms')
    formData.leadPage = router.asPath

    const referer = JSON.parse(sessionStorage.getItem('referer') ?? '')
    formData.referer = referer
    formData.differenceInTime = differenceInTime
    sessionStorage.removeItem('referer')

    const ymUid = JSON.parse(localStorage.getItem('_ym_uid') ?? '')
    formData.ymUid = ymUid
    const clickId = getCookie('utm')

    formData.blockForAmo = blockForAmo

    if (typeof clickId === 'string') {
      formData.utm = JSON.parse(clickId)
    } else {
      formData.utm = null // или какое-то другое значение по умолчанию
    }

    if (differenceInTime < 1800) {
      try {
        // отправляем запрос на обновление токенов, нам нужен из базы рефреш токен
        const exchangeTokensResponse = await axios.post(
          `${routes.front.root}/api/amoCRMexchangeToken`,
          data?.amos[0]
        )
        if (exchangeTokensResponse.status === 200) {
          // update token as time close to end
          console.log('Обновляем токен')
          const { data } = await updateTokens({
            variables: {
              input: {
                where: { id: tokenId },
                data: {
                  access: exchangeTokensResponse.data.access_token,
                  refresh: exchangeTokensResponse.data.refresh_token,
                  expired_in: nowUNIXtime + 84400
                }
              }
            }
          })
          console.log('Токены обновлены для записи Amo:', data.updateAmo)
          if (data.updateAmo.amo) {
            formData.access = data.updateAmo.amo.access
            console.log('используем новые токены', data.updateAmo.amo.access)
            try {
              const responseNewLead = await axios.post(
                `${routes.front.root}/api/checkAndCreateLead`,
                formData
              )
              if (responseNewLead.status === 200) {
                // создали юзера
                console.log('user created')
              }
            } catch (error) {
              if (error.response.status === 400) {
                setServerErrorMeassage('400 Ошибка при создании новой заявки')
              } else {
                setServerErrorMeassage(
                  `Другая ошибка при запросе на обмен токенов ${error.response.status}`
                )
                console.error('Не удалось обновить токены для записи Amo:', error)
              }
            }
          }
        }
      } catch (error) {
        if (error.response.status === 400) {
          setServerErrorMeassage('400 ошибка при запросе на обмен токенов')
          console.log('400 ошибка, отправляем через смтп')
        } else {
          setServerErrorMeassage(
            `Другая ошибка при запросе на обмен токенов ${error.response.status}`
          )
          console.error('Не удалось обновить токены для записи Amo:', error)
        }
      }
    } else {
      try {
        formData.access = access_token
        const responseNewLead = await axios.post(
          `${routes.front.root}/api/checkAndCreateLead`,
          formData
        )
      } catch (error) {
        setServerErrorMeassage(
          'Не удалось создать лид, но время истечения токена удовлетворяет условиям'
        )
        console.error('Не удалось создать или обновить лид', error)
      }
    }
  }

  return (
    <>
      <Popup open={thanksIsOpen} closeOnDocumentClick onClose={() => setThanksIsOpen(false)}>
        <PopupThankyou close={() => setThanksIsOpen(false)} />
      </Popup>
      <form
        method='post'
        className={classNames({
          [stls.containet]: true,
          [stls.atFooter]: atFooter
        })}
        onSubmit={handleSubmit(data => onSubmit(data))}>
        <div className={stls.group}>
          <div className={classNames(stls.inpt, stls.name)}>
            <input
              type='text'
              aria-label='Ваше имя'
              placeholder='Ваше имя'
              disabled={isDisabled}
              {...register('name', {
                maxLength: {
                  value: 32,
                  message: `*Не больше 32 символов`
                }
              })}
            />
            <p className={stls.err}>{errors.name && errors.name.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.phone)}>
            <input
              type='tel'
              aria-label='Ваш номер телефона'
              placeholder='Ваш телефон'
              disabled={isDisabled}
              {...register('phone', {
                required: `*Номер телефона обязателен`,
                minLength: {
                  value: 5,
                  message: `*Минимум 5 цифр`
                }
              })}
            />
            <p className={stls.err}>{errors.phone && errors.phone.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша электронная почта'
              placeholder='Введите email'
              disabled={isDisabled}
              {...register('email', {
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message: 'Пожалуйста, введите корректный адрес электронной почты'
                }
              })}
            />
            <p className={stls.err}>{errors.email && errors.email.message}</p>
          </div>
          {question && (
            <div className={classNames(stls.inpt, stls.question)}>
              <textarea
                aria-label='Задайте Ваш вопрос'
                placeholder='Задайте Ваш вопрос'
                disabled={isDisabled}
                {...register('question', {
                  maxLength: {
                    value: 320,
                    message: `*Максимальная длинна вопроса 320 символов`
                  }
                })}></textarea>
              <p className={stls.err}>{errors.question && errors.question.message}</p>
            </div>
          )}

          <div className={stls.btn}>
            {atFooter ? (
              <BtnBeta text={cta} isDisabled={isDisabled} />
            ) : (
              <BtnAlpha text={cta} isDisabled={isDisabled} />
            )}
          </div>

          {agreement && (
            <p className={stls.agreement}>
              Нажимая кнопки на сайте Вы даете свое согласие на обработку Ваших персональных данных
            </p>
          )}
        </div>
        <p>{serverErrorMeassage}</p>
      </form>
    </>
  )
}

export default CallMeBackForm
