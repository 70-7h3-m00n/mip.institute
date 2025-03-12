import stls from '@/styles/components/btns/BtnIota.module.sass'
import classNames from 'classnames'

interface BtnIotaProps {
  text: string
  isDisabled?: boolean
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top' | undefined
}

const BtnIota = ({ text, isDisabled = false, href, target }: BtnIotaProps) => {
  return (
    <>
      {href ? (
        <a
          className={classNames(stls.container)}
          href={href}
          target={target || undefined}
          rel={target ? 'noopener noreferrer' : undefined}>
          {text}
        </a>
      ) : (
        <button
          className={classNames(stls.container, { [stls.isDisabled]: isDisabled })}
          disabled={isDisabled}>
          {text}
        </button>
      )}
    </>
  )
}

export default BtnIota
