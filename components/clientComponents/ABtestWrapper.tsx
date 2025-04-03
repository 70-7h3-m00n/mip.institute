'use client'
import { useEffect, useState } from 'react'

interface WrapperProps {
  clientComponent: React.ReactNode // Клиентский компонент (старая главная страница)
  serverComponent: React.ReactNode // Серверный компонент
}

const ABtestWrapper: React.FC<WrapperProps> = ({ clientComponent, serverComponent }) => {
  const [layout, setLayout] = useState<'old' | 'new'>('old')

  useEffect(() => {
    const abTestKey = localStorage.getItem('AB') || 'old'
    setLayout(abTestKey as 'old' | 'new')
  }, [])

  // Рендерим серверный компонент, если AB === "new", иначе клиентский
  return layout === 'new' ? serverComponent : clientComponent
}

export default ABtestWrapper
