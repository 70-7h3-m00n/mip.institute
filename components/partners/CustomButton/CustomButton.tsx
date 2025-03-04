import React from 'react'
import classNames from 'classnames'
import styles from './CustomButton.module.sass'

interface CustomButtonProps {
  text: string
  onClick: () => void
  className?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={classNames(styles.button, className && styles[className])}
      onClick={onClick}>
      {text}
    </button>
  )
}

export default CustomButton
