import Link from 'next/link'
import React from 'react'
import styles from './PartnersNavigation.module.sass'
import classNames from 'classnames'

interface PartnersNavigationProps {
  types: string[]
  currentType: string
}

export default function PartnersNavigation({ types, currentType }: PartnersNavigationProps) {
  const translations: Record<string, string> = {
    association: 'Ассоциации',
    fund: 'Фонды',
    park: 'Парки'
  }

  return (
    <nav className={styles.navigation}>
      {types
        .slice() // Создаем копию массива
        .sort((a, b) => a.localeCompare(b)) // Сортируем в алфавитном порядке
        .map(t => (
          <Link prefetch={true} href={`/partners/${t}`} key={t} passHref>
            <p
              className={classNames(styles.link, {
                [styles.active]: t === currentType
              })}
            >
              {translations[t] || t}
            </p>
          </Link>
        ))}
    </nav>
  )
}
