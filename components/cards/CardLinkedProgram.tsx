import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import stls from '@/styles/components/cards/CardLinkedProgram.module.sass'

type Props = {
  portrait: string | StaticImageData | ReactNode // Уточняем тип
  title: string
}

const CardLinkedProgram = ({ portrait, title }: Props) => {
  const text = [
    'Обучение с третьего курса',
    'Включено в стоимость',
    'По окончании обучения второй диплом'
  ]

  return (
    <div className={stls.container}>
      {portrait && (
        <div className={stls.portrait}>
          <span className={stls.filter} />
          {typeof portrait === 'string' ? (
            <Image
              src={portrait}
              alt={title}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          ) : portrait instanceof Object && 'src' in portrait ? (
            <Image
              src={portrait as StaticImageData}
              alt={title}
              sizes='100vw'
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          ) : (
            portrait
          )}
        </div>
      )}
      <div className={stls.innerContainer}>
        <p className={stls.title}>{title}</p>
        <div className={stls.bottomPart}>
          {text.map(el => (
            <p className={stls.subtitle} key={el}>
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardLinkedProgram
