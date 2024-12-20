import PopupTrigger from '@/ui/PopupTrigger'
import stls from './NoteBlock.module.sass'
import Image, { StaticImageData } from 'next/image'

type Props = {
  imageSrc: string | StaticImageData
  title: any
  description: string
  marginTop?: number
  marginBottom?: number
}

const NoteBlock = ({
  imageSrc,
  title,
  description,
  marginTop = 0,
  marginBottom = 0
}: Props) => {
  return (
    <div style={{ marginTop, marginBottom }} className={stls.container}>
      <div className={stls.image}>
        <Image src={imageSrc} alt='Изображение' />
      </div>
      <div className={stls.text}>
        <div className={stls.title}>{title}</div>
        <div className={stls.description}>{description}</div>
      </div>
      <div className={stls.buttonBlock}>
        <PopupTrigger btn='gamma' cta='knowRequirement' />
      </div>
    </div>
  )
}

export default NoteBlock
