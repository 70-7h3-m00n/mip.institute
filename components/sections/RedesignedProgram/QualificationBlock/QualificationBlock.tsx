import PopupTrigger from '@/ui/PopupTrigger'
import stls from './QualificationBlock.module.sass'
import Image from 'next/image'
import classNames from 'classnames'
import diploma from '@/public/assets/imgs/diplomas/diplomHolo.svg'
import { programForWhom, vciom } from 'constants/redesignedProgram/qualificationBlock'
import Wrapper from '@/ui/Wrapper'

type Variant = 'default' | 'vciom' | 'static'

type Props = {
  programDetails?: {
    specialization: string
    name: string
  } | null
  bgcolor?: string
  variant?: Variant
}

const QualificationBlock = ({
  programDetails = null,
  bgcolor = 'white',
  variant = 'default'
}: Props) => {
  const isStatic = variant === 'static'
  const isVciom = variant === 'vciom'
  const mainText = isVciom ? vciom : programForWhom
  const imageSrc = isVciom ? vciom.img : diploma

  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className={classNames(stls.container, {
        [stls.staticContainer]: isStatic
      })}>
      <Wrapper>
        {isStatic || isVciom ? (
          <>
            <p className={classNames(stls.title, stls.largeText)}>{mainText.title}</p>
            {mainText.href ? (
              <div className={stls.link}>
                <a
                  className={classNames(stls.extra, stls.underlined)}
                  href={mainText.href}
                  target={'_blank'}>
                  {mainText.extraInfo}
                </a>
              </div>
            ) : (
              <p className={stls.extra}>{mainText.extraInfo}</p>
            )}
          </>
        ) : (
          <p className={stls.title}>
            Квалификация <span>«{programDetails?.name || 'Название программы'}»</span> с
            дополнительной специализацией
            <span> «{programDetails?.specialization || 'Специализация'}»</span>
          </p>
        )}

        {variant === 'default' && (
          <div className={stls.buttonBlock}>
            <PopupTrigger btn='gamma' cta='beginStudy' />
          </div>
        )}

        <div className={stls.imagesWrapper}>
          <Image
            src={imageSrc}
            alt='diploma'
            width={isVciom ? 115 : 60}
            height={isVciom ? 95 : 100}
            className={classNames(
              stls.imgLeft,
              { [stls.imgLeftStatic]: isStatic },
              { [stls.vciomIconLeft]: isVciom }
            )}
          />
          <Image
            src={imageSrc}
            alt='diploma'
            width={isVciom ? 100 : 60}
            height={isVciom ? 100 : 100}
            className={classNames(
              stls.imgRight,
              { [stls.imgRightStatic]: isStatic },
              { [stls.vciomIconRight]: isVciom }
            )}
          />
        </div>
      </Wrapper>
    </div>
  )
}

export default QualificationBlock
