import Wrapper from '@/ui/Wrapper'
import styles from './BlockGladSeeTeam.module.sass'
import { parseRichTextData, RichTextParagraph } from './const'
import { useRef } from 'react'
import { KinescopePlayer } from '@/ui/Player/Player'

type PropsType = {
  props: {
    __component: string
    id: number
    text: RichTextParagraph[]
    img?: string | null
  }
}

const BlockGladSeeTeam = ({ props }: PropsType) => {
  const parsedData = parseRichTextData(props)
  const playerRef = useRef<any>(null)

  const VIDEO_ID = 'osX9Xixs4ok8jRx9Vs6QN3'

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
    <section className={styles.container}>
      <Wrapper>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>{parsedData.title}</h2>
            <p className={styles.description}>{parsedData.description}</p>
            <div className={styles.mobVideoBlock}>
              <div className={styles.playerWrapper}>
                <KinescopePlayer
                  ref={playerRef}
                  title='Glad to See Team Video'
                  videoId={VIDEO_ID}
                  autoPlay={true}
                  preload={true}
                  loop={false}
                  muted={true}
                  controls={false}
                  className={styles.iframe}
                  onReady={handleReady}
                  onEnded={handleRestart} // Запуск видео заново при завершении
                />
              </div>
            </div>
            {parsedData.link && (
              <a
                href={parsedData.link}
                className={styles.button}
                target='_blank'
                rel='noopener noreferrer'>
                {parsedData.linkText}
              </a>
            )}
          </div>

          <div className={styles.videoBlock}>
            <div className={styles.playerWrapper}>
              <KinescopePlayer
                ref={playerRef}
                title='Glad to See Team Video'
                videoId={VIDEO_ID}
                autoPlay={true}
                preload={true}
                loop={false}
                muted={true}
                controls={false}
                className={styles.iframe}
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

export default BlockGladSeeTeam
