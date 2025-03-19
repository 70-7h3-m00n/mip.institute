import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import classNames from 'classnames'

interface Props {
  text?: string
  isDisabled?: boolean
  href?: string
  target?: string
  isLiveCourse?: boolean
  onClick?: () => void
  isViolet?: boolean
}

const BtnAlpha = ({
  text = 'Кнопка',
  isDisabled = false,
  href,
  target,
  isLiveCourse,
  onClick,
  isViolet
}: Props) => {
  return (
    <>
      {href ? (
        <a
          className={classNames({
            [stls.container]: true
          })}
          href={href}
          target={target}
          rel={target && 'noopener noreferrer'}>
          {text}
        </a>
      ) : (
        <button
          className={classNames({
            [stls.container]: true,
            [stls.isDisabled]: isDisabled,
            [stls.liveCourse]: isLiveCourse,
            [stls.violet]: isViolet
          })}
          disabled={isDisabled}
          onClick={isDisabled ? undefined : onClick}>
          {text}
        </button>
      )}
    </>
  )
}

export default BtnAlpha
