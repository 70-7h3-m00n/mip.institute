import stls from '@/styles/components/sections/YouTubeVideo.module.sass'
import dynamic from 'next/dynamic'
import { IconClock } from '../icons'
import Wrapper from '../layout/Wrapper'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const YouTubeVideo = ({ videoId }) => {
  return (
    <section>
      <Wrapper>
        <h2 className={stls.title}>Знакомство с институтом</h2>
        <div className={stls.time}>
          <IconClock colorCode='#DADADA' />
          <p>Длительность 2 минуты</p>
        </div>

        <div className={stls.playerWrapper}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default YouTubeVideo
