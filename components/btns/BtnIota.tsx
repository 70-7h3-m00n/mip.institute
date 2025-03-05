import stls from '@/styles/components/btns/BtnIota.module.sass'
import classNames from 'classnames'

const BtnIota = ({ text, isDisabled = false, href = null, target = null }) => {
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
            [stls.isDisabled]: isDisabled
          })}
          disabled={isDisabled}>
          {text}
        </button>
      )}
    </>
  )
}

export default BtnIota
