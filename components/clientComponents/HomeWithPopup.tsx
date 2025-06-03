'use client'
import { useSearchParams } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import PopupCta from '../popups/PopupCta'

const HomeWithPopup = () => {
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

  return (
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
  )
}

export default HomeWithPopup
