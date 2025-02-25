import Link from 'next/link'
import React from 'react'
import styles from './PartnersNavigation.module.sass'
import classNames from 'classnames'

export default function PartnersNavigation({ types, currentType }) {
  return (
    <nav
      className={classNames({
        [styles.navigation]: true
      })}>
      {types
        .slice()
        .reverse()
        .map(t => (
          <p
          className={classNames(styles.link, {
            [styles.active]: t === currentType
          })}
            key={t}>
            <Link prefetch={true} href={`/partners/${t}`}>
              {t}
            </Link>
          </p>
        ))}
    </nav>
  )
}
