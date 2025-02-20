import stls from './ProgramForRequest.module.sass'
import Wrapper from '@/ui/Wrapper'
import { useRef, useEffect } from 'react'
import { KinescopePlayer } from '@/ui/Player/Player'
import PopupTrigger from '@/ui/PopupTrigger'
import Player from '@kinescope/react-kinescope-player'

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
  const playerRefDesktop = useRef<Player | null>(null)
  const playerRefMobile = useRef<Player | null>(null)

  const VIDEO_ID = '7b39ee7e-288d-431d-b1b7-f83336ce9ce6'

  // Автоматически запускаем видео после загрузки
  useEffect(() => {
    const playVideo = (playerRef: React.MutableRefObject<Player | null>) => {
      if (playerRef.current) {
        playerRef.current.play().catch(() => {
          console.warn('Автоплей заблокирован браузером')
        })
      }
    }

    playVideo(playerRefDesktop)
    playVideo(playerRefMobile)
  }, [])

  // Повторяем видео после окончания
  const handleRestart = (playerRef: React.MutableRefObject<Player | null>) => {
    if (playerRef.current) {
      playerRef.current.play()
    }
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
                  ref={playerRefMobile}
                  title="Подберем программу под ваш запрос"
                  videoId={VIDEO_ID}
                  autoPlay={true}
                  preload={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  controls={false}
                  className={stls.iframe}
                  // onReady={() => console.log('Мобильное видео готово')}
                  onEnded={() => handleRestart(playerRefMobile)}
                />
              </div>
            </div>
            <PopupTrigger btn="gamma" cta="submitApplication" />
          </div>

          <div className={stls.videoBlock}>
            <div className={stls.playerWrapper}>
              <KinescopePlayer
                ref={playerRefDesktop}
                title="Подберем программу под ваш запрос"
                videoId={VIDEO_ID}
                autoPlay={true}
                preload={true}
                loop={true}
                muted={true}
                playsInline={true}
                controls={false}
                className={stls.iframe}
                // onReady={() => console.log('Десктопное видео готово')}
                onEnded={() => handleRestart(playerRefDesktop)}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramForRequest
