'use client'
import stls from './ProgramForRequest.module.sass'
import Wrapper from '@/ui/Wrapper'
import PopupTrigger from '@/ui/PopupTrigger'

import dynamic from 'next/dynamic'

// Динамически импортируем плеер, отключая SSR
const Player = dynamic(() => import('@/ui/Player/Player'), { ssr: false })

type TextItemType = {
  children: Array<{ text: string }>
}

type ItemType = {
  id: number
  text: TextItemType[]
}

type Props = {
  data?: ItemType
}

const defaultData = {
  title: 'Подберем программу\nпод ваш запрос',
  videoId: '7b39ee7e-288d-431d-b1b7-f83336ce9ce6',
  description:
    'Остались вопросы или не можете определиться с курсом? Оставьте свои контакты, сотрудник приёмной комиссии с вами свяжется и проконсультирует'
}

const ProgramForRequest = ({ data }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.textBlock}>
            <h2 className={stls.title}>
              {data?.[0]?.children.map((el, index) =>
                el.code && el.text === '/n' ? (
                  <br key={index} />
                ) : (
                  !el.code && <span key={index}>{el.text}</span>
                )
              ) ?? defaultData.title}
            </h2>
            <p className={stls.description}>
              {data?.[1]?.children?.[0]?.text ?? defaultData.description}
            </p>
            <PopupTrigger btn='gamma' cta='submitApplication' />
          </div>
          <div className={stls.videoBlock}>
            <Player
              title='Подберем программу под ваш запрос'
              videoId={defaultData.videoId}
              autoPlay={true}
              loop={true}
              muted={true}
              autoPause={false}
              controls={false}
              playsInline={true}
              className={stls.iframe}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramForRequest
