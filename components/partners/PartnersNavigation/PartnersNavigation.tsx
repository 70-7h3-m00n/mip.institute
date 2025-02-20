// 'use client'
import Link from 'next/link';
import React from 'react'
import styles from './PartnersNavigation.module.sass'
import classNames from 'classnames';
import PartnersPlayer from '../Player/PartnersPlayer';
// import dynamic from 'next/dynamic'
// const KinescopePlayer = dynamic(import('@kinescope/react-kinescope-player'), { ssr: false });

export default function PartnersNavigation({types, currentType}) {
  
  return (
    <nav className={classNames({
      [styles.navigation]: true,
      // [styles.active]: el.studyFieldSlug === selectedField.studyFieldSlug
    })}>
      <PartnersPlayer />

        {types.map((t) => (
          <p className={classNames({
            [styles.link]: true,
            [styles.active]: t === currentType
          })} key={t}>
            <Link prefetch={true} href={`/partners/${t}`} >
              {t}
            </Link>
          </p>
        ))}
      </nav>
  )
}
