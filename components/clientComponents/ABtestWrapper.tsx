'use client'
import { getCookie } from 'cookies-next'
import { useSearchParams } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import PopupCta from '../popups/PopupCta'

interface WrapperProps {
  clientComponent: React.ReactNode // Клиентский компонент (старая главная страница)
  serverComponent: React.ReactNode // Серверный компонент
}

const ABtestWrapper: React.FC<WrapperProps> = ({ clientComponent, serverComponent }) => {
  const [layout, setLayout] = useState<'old' | 'new'>('old')
  const homePageAB = getCookie('homePageAB')?.toString() || ''

  useEffect(() => {
    setLayout(homePageAB as 'old' | 'new')
  }, [homePageAB])

  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams() 
  useEffect(() => {
      // Проверяем utm_source через useSearchParams
      if (searchParams?.get('utm_source') === 'direct_link') {
        setOpen(true)
      }
    }, [searchParams])

    const desc = (
      <>
        У Вас есть вопросы? Оставьте заявку! <br /> И сотрудник приемной комиссии свяжется с вами,
        чтобы рассказать все подробности
      </>
    )

  // Рендерим серверный компонент, если AB === "new", иначе клиентский
  return (
    <>
    <Popup open={open} modal nested>
            {
              ((close: () => void) => (
                <PopupCta
                  title='Задать вопрос'
                  desc={desc}
                  cta='Задать вопрос'
                  question
                  close={close}
                  blockForAmo='Переход по ссылке'
                />
              )) as unknown as ReactNode
            }
          </Popup>
    {layout === 'new' ? serverComponent : clientComponent}
    </>
  )
}

export default ABtestWrapper
