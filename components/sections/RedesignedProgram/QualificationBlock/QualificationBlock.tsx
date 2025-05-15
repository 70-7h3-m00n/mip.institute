import PopupTrigger from '@/ui/PopupTrigger'
import stls from './QualificationBlock.module.sass'
import Image from 'next/image'
import diploma from 'public/assets/imgs/diplomas/diplomHolo.svg'

type Props = {
  title: string
  specialization: string
  buttonText?: string
  bgcolor?: string
}

const QualificationBlock = ({ title, buttonText, bgcolor = 'white', specialization }: Props) => {
  return (
    <div style={{ backgroundColor: bgcolor }} className={stls.container}>
      <p className={stls.title}>
        Квалификация <span>«{title}»</span> с дополнительной специализацией
        <span>«{specialization}»</span>
      </p>
      <div className={stls.buttonBlock}>
        <PopupTrigger btn='gamma' cta='beginStudy' />
      </div>
      <Image
        src={diploma}
        alt='diploma'
        width={70}
        height={140}
        layout='fixed'
        className={stls.imgLeft}
      />
      <Image
        src={diploma}
        alt='diploma'
        width={70}
        height={100}
        layout='fixed'
        className={stls.imgRight}
      />
    </div>
  )
}

export default QualificationBlock
