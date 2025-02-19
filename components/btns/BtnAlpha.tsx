import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import classNames from 'classnames'

interface Props {
  text?: string
  isDisabled?: boolean
  href?: null | string
  target?: null | string
  isLiveCourse?: boolean
  onClick?: () => void
  isViolet?: boolean
}

const BtnAlpha = ({
  text,
  isDisabled = false,
  href = null,
  target = null,
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
          // @ts-ignore
          target={target}
          // @ts-ignore
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
          onClick={onClick}>
          {text}
        </button>
      )}
    </>
  )
}

export default BtnAlpha
