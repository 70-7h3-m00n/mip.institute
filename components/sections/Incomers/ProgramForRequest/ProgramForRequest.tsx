import stls from './ProgramForRequest.module.sass'
import Wrapper from '@/ui/Wrapper'
import { KinescopePlayer } from '@/ui/Player/Player'
import PopupTrigger from '@/ui/PopupTrigger'

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
  const VIDEO_ID = '7b39ee7e-288d-431d-b1b7-f83336ce9ce6'

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
                  title="Подберем программу под ваш запрос"
                  videoId={VIDEO_ID}
                  autoPlay={true}
                  muted={true}
                  playsInline={true}
                  className={stls.iframe}
                  autoPause={false}
                  controls={false}
                />
              </div>
            </div>
            <PopupTrigger btn="gamma" cta="submitApplication" />
          </div>

          <div className={stls.videoBlock}>
            <div className={stls.playerWrapper}>
              <KinescopePlayer
                title="Подберем программу под ваш запрос"
                videoId={VIDEO_ID}
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
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramForRequest
