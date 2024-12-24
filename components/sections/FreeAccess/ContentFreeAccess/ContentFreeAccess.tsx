import React from 'react'
import { TextFreeAccess } from './TextFreeAccess/TextFreeAccess'
import TwoColumns from '@/ui/TwoColumns'
import FormFreeAccess from './FormFreeAccess/FormFreeAccess'
import styles from './ContentFreeAccess.module.sass'
import classNames from 'classnames'

export const ContentFreeAccess = () => {
  return (
    <section>
      <TwoColumns>
        <TextFreeAccess />
        <FormFreeAccess />
      </TwoColumns>
      <button form="formAccess" type="submit" className={classNames(styles.submitBtn, styles.onDesktop)}>
          Получить доступ
      </button>
    </section>
  )
}
