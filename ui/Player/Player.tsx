'use client' // 💡 Указываем, что код выполняется только на клиенте

import React, { useState, useEffect, RefObject, useRef } from 'react'
import KinescopePlayer, { PlayerPropsTypes } from '@kinescope/react-kinescope-player'

type Props = PlayerPropsTypes & {
  forwardRef?: RefObject<KinescopePlayer>
}

export default function Player({ forwardRef, ...props }: Props) {
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // 💡 Флаг загрузки

  const playerRef = useRef<KinescopePlayer>(null)

  useEffect(() => {
    setIsClient(true) // Запускается только на клиенте
  }, [])

  return (
    <div className="player-container">
      {/* Показываем Skeleton, пока плеер загружается */}
      {(!isClient || isLoading) && (
        <div className="skeleton">
          <p>Загружаем видео...</p>
        </div>
      )}

      {isClient && (
        <KinescopePlayer
          {...props}
          ref={forwardRef}
          onWaiting={() => console.log('wait...')}
          onReady={() => setIsLoading(false)} // 🔥 Убираем Skeleton, когда плеер загружен
        />
      )}
    </div>
  )
}
