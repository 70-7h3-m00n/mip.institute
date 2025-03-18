import React, { forwardRef } from 'react'
import KinescopePlayer, { PlayerPropsTypes } from '@kinescope/react-kinescope-player'
export { KinescopePlayer }

type Props = PlayerPropsTypes

// Проверка на серверное окружение
const isServer = () => typeof window === 'undefined'

// Используем forwardRef для передачи рефа родителю
const Player = forwardRef<KinescopePlayer, Props>((props, ref) => {
  if (isServer()) {
    return null
  }
  return <KinescopePlayer {...props} ref={ref} />
})

// Добавляем displayName для ESLint
Player.displayName = 'Player'

export default Player
