'use client'
import Link from 'next/link';
import React from 'react'
import styles from './PartnersPlayer.module.sass'
import classNames from 'classnames';
import dynamic from 'next/dynamic'
import Player from '@/ui/Player/Player';
const KinescopePlayer = dynamic(import('@kinescope/react-kinescope-player'), { ssr: false });

export default function PartnersPlayer() {
  
  return (

      <div className={styles.video}>

      <Player
      // width={100}
      // height={100}
      //           className={styles.kinescope}
      autoPlay
                videoId='mfWdH9ZyV1fDXvxjgxyTjx'
              />
      </div>

  )
}
