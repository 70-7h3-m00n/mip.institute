import React from 'react'
import styles from './PartnersNavigation.module.sass'
import classNames from 'classnames'

interface PartnersNavigationProps {
  types: string[]
  currentType: string
  onClickType: (type: string) => void
}

export default function PartnersNavigation({
  types,
  currentType,
  onClickType
}: PartnersNavigationProps) {
  const translations: Record<string, string> = {
    association: 'Ассоциации',
    fund: 'Фонды',
    park: 'Парки'
  }

  return (
    <nav className={styles.navigation}>
      {types
        .slice()
        .sort((a, b) => a.localeCompare(b))
        .map(t => (
          <button
            key={t}
            onClick={() => onClickType(t)}
            className={classNames(styles.link, {
              [styles.active]: t === currentType
            })}
            type='button'>
            {translations[t] || t}
          </button>
        ))}
    </nav>
  )
}
