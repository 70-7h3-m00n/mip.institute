'use client'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface MediaQueryState {
  isMobileLayout: boolean | undefined // До 435px
  isMobileAndTabletLayout: boolean | undefined // До 768px
}

// Создаём контекст
const MediaQueryContext = createContext<MediaQueryState | undefined>(undefined)

const useBetterMediaQuery = (mediaQueryString: string): boolean | undefined => {
  const [matches, setMatches] = useState<boolean | undefined>()

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)
    const listener = () => setMatches(mediaQueryList.matches)
    listener() // Устанавливаем начальное значение
    mediaQueryList.addEventListener('change', listener)
    return () => mediaQueryList.removeEventListener('change', listener)
  }, [mediaQueryString])

  return matches
}

// Провайдер контекста
export const MediaQueryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 435px)')
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const value: MediaQueryState = {
    isMobileLayout,
    isMobileAndTabletLayout
  }

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>
}

export const useMediaQuery = (): MediaQueryState => {
  const context = useContext(MediaQueryContext)
  if (context === undefined) {
    throw new Error('useMediaQuery must be used within a MediaQueryProvider')
  }
  return context
}
