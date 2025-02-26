import Link from 'next/link'
import React from 'react'
import styles from './PartnersNavigation.module.sass'
import classNames from 'classnames'

export default function PartnersNavigation({ types, currentType }) {
  return (
    <nav className={styles.navigation}>
      {types
        .slice()
        .reverse()
        .map(t => (
          <Link prefetch={true} href={`/partners/${t}`} key={t} passHref>
            <p
              className={classNames(styles.link, {
                [styles.active]: t === currentType
              })}>
              {t}
            </p>
          </Link>
        ))}
    </nav>
  )
}
