'use client'
import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

interface WrapperProps {
  clientComponent: React.ReactNode // Клиентский компонент (старая главная страница)
  serverComponent: React.ReactNode // Серверный компонент
}

const ABtestWrapper: React.FC<WrapperProps> = ({ clientComponent, serverComponent }) => {
  const [layout, setLayout] = useState<'old' | 'new'>('new')
  const homePageAB = getCookie('homePageAB')?.toString() || ''

  useEffect(() => {
    setLayout(homePageAB as 'old' | 'new')
  }, [homePageAB])

  // Рендерим серверный компонент, если AB === "new", иначе клиентский
  return layout === 'new' ? serverComponent : clientComponent
}

export default ABtestWrapper
