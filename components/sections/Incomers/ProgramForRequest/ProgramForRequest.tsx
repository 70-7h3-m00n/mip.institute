import stls from './ProgramForRequest.module.sass'
import Wrapper from '@/ui/Wrapper'
import { useRef } from 'react'
import BtnGamma from '@/components/btns/BtnGamma'
import { KinescopePlayer } from '@/ui/Player/Player'

type TextItemType = {
  children: Array<{ text: string }>
}

type ItemType = {
  id: number
  text: TextItemType[]
}

type Props = {
  data: ItemType
}

const ProgramForRequest = ({ data }: Props) => {
  const playerRef = useRef<any>(null)

  const VIDEO_ID = '7b39ee7e-288d-431d-b1b7-f83336ce9ce6'

  const handleRestart = () => {
    if (playerRef.current) {
      playerRef.current.play()
    }
  }

  const handleReady = async data => {
    const player = playerRef.current
    console.log('handleReady', data)
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.textBlock}>
            <h2 className={stls.title}>{data?.[0]?.children?.[0]?.text}</h2>
            <p className={stls.description}>{data?.[1]?.children?.[0]?.text}</p>
            <div className={stls.mobVideoBlock}>
              <div className={stls.playerWrapper}>
                <KinescopePlayer
                  ref={playerRef}
                  title='Подберем программу под ваш запрос'
                  videoId={VIDEO_ID}
                  autoPlay={true}
                  preload={true}
                  loop={false}
                  muted={true}
                  controls={false}
                  className={stls.iframe}
                  onReady={handleReady}
                  onEnded={handleRestart}
                />
              </div>
            </div>
            <BtnGamma text='Оставить заявку' />
          </div>

          <div className={stls.videoBlock}>
            <div className={stls.playerWrapper}>
              <KinescopePlayer
                ref={playerRef}
                title='Подберем программу под ваш запрос'
                videoId={VIDEO_ID}
                autoPlay={true}
                preload={true}
                loop={false}
                muted={true}
                controls={false}
                className={stls.iframe}
                onReady={handleReady}
                onEnded={handleRestart}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramForRequest
