'use client' // 💡 Указываем, что код выполняется только на клиенте

import React, { useState, useEffect, RefObject, useRef, forwardRef } from 'react'
import KinescopePlayer, { PlayerPropsTypes } from '@kinescope/react-kinescope-player'
export { KinescopePlayer }

type Props = PlayerPropsTypes & {
  forwardRef?: RefObject<KinescopePlayer>
}

const Player = forwardRef<KinescopePlayer, Props>((props, ref) => {
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true) 
  
  useEffect(() => {
    setIsClient(true) // Запускается только на клиенте
  }, [])

  return (
    <>
    {/* {isLoading && (
      <p>Загружаем видео...</p>
    )} */}
      {isClient && (
        <KinescopePlayer
          {...props}
          ref={ref}
          onReady={() => setIsLoading(false)} // 🔥 Убираем Skeleton, когда плеер загружен
        />
      )}
    </>
  )
})

Player.displayName = 'Player'

export default Player


