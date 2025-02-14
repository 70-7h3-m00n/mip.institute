import stls from '@/styles/components/btns/Button.module.sass'
import classNames from 'classnames'

interface Props {
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  isDisabled?: boolean
  isVioletBg?: boolean
}

const Button = ({ text, isDisabled = false, onClick, isVioletBg }: Props) => {
  return (
    <button
      className={classNames({
        [stls.button]: true,
        [stls.violet]: isVioletBg
      })}
      disabled={isDisabled}
      onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
