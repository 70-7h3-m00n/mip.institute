import stls from '@/ui/LinkComponent/LinkComponent.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import IconArrowLeft from '@/components/icons/IconArrowLeft'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  background1?: {
    src: string
  }
  background2?: {
    src: string
  }
  tag?: string
  title?: ReactNode
  backButton?: boolean
}

const LinkComponent = ({
  children,
  background1,
  background2,
  tag,
  title,
  backButton = false
}: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        {backButton && (
          <div
            className={stls.toHome}
            onClick={() => {
              window.location.href = '/'
            }}>
            <div className={stls.icon}>
              <IconArrowLeft />
            </div>
            <span className={stls.homespanage}>вернуться на главную</span>
          </div>
        )}
        <div className={stls.header}>
          <div className={stls.tag}>
            <span>{tag}</span>
          </div>
          <h2 className={stls.title}>{title}</h2>
        </div>
        <div className={stls.columns}>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.purpleLight]: true
            })}
            style={{
              backgroundImage: `url(${background1?.src})`,
              backgroundSize: 'cover'
            }}>
            {children?.[0]}
          </div>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.orange]: true
            })}
            style={{
              backgroundImage: `url(${background2?.src})`,
              backgroundSize: 'cover'
            }}>
            {children?.[1]}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default LinkComponent
