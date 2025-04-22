'use client'
import React, { forwardRef, RefObject, useEffect, useState } from 'react'
import KinescopePlayer, { PlayerPropsTypes } from '@kinescope/react-kinescope-player'

export { KinescopePlayer }

type Props = PlayerPropsTypes & {
  forwardRef?: RefObject<KinescopePlayer>
}

const Player = forwardRef<KinescopePlayer, Props>((props, ref) => {
  const [isClient, setIsClient] = useState(false)
  const [_isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsClient(true) // Запускается только на клиенте
  }, [])

  return (
    <>
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
