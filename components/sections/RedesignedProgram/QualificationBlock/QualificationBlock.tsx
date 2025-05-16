import PopupTrigger from '@/ui/PopupTrigger'
import stls from './QualificationBlock.module.sass'
import Image from 'next/image'
import classNames from 'classnames'
import diploma from '@/public/assets/imgs/diplomas/diplomHolo.svg'
import { programForWhom, vciom } from 'constants/redesignedProgram/qualificationBlock'

type Props = {
  programDetails?: {
    specialization: string
    name: string
  } | null
  bgcolor?: string
  isVciom?: boolean
  isStatic?: boolean
}

const QualificationBlock = ({
  programDetails = null,
  bgcolor = 'white',
  isVciom = false,
  isStatic = false
}: Props) => {
  const mainText = isVciom ? vciom : programForWhom
  const imageSrc = isVciom ? vciom.img : diploma

  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className={classNames(stls.container, {
        [stls.staticContainer]: isStatic
      })}>
      {isStatic ? (
        <>
          <p
            className={classNames(stls.title, {
              [stls.largeText]: isStatic
            })}>
            {mainText.title}
          </p>
          <p
            className={classNames(stls.extra, {
              [stls.underlined]: mainText.underlined
            })}>
            {mainText.extraInfo}
          </p>
        </>
      ) : (
        <p className={stls.title}>
          Квалификация <span>«{programDetails?.name || 'Название программы'}»</span>с дополнительной
          специализацией
          <span>«{programDetails?.specialization || 'Специализация'}»</span>
        </p>
      )}

      {!isStatic && (
        <div className={stls.buttonBlock}>
          <PopupTrigger btn='gamma' cta='beginStudy' />
        </div>
      )}

      <Image
        src={imageSrc}
        alt='diploma'
        width={60}
        height={140}
        className={classNames(stls.imgLeft, {
          [stls.imgLeftStatic]: isStatic
        })}
      />
      <Image
        src={imageSrc}
        alt='diploma'
        width={60}
        height={100}
        className={classNames(stls.imgRight, {
          [stls.imgRightStatic]: isStatic
        })}
      />
    </div>
  )
}

export default QualificationBlock
