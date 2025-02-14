import stls from './VacanciesVideo.module.sass'
import Wrapper from '@/ui/Wrapper'

type Video = {
  text: string
  icon: string
}

type Props = {
  props: Video
}

const VacanciesVideo = ({ props: { text, icon } }: Props) => {
  // TODO: вставить ссылку icon
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>{text}</h2>
        <div className={stls.playerWrapper}>
          <iframe
            src={`https://kinescope.io/embed/2WALhR1ZcszBWNRXQ2kNSB`}
            allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'></iframe>
        </div>
      </Wrapper>
    </section>
  )
}

export default VacanciesVideo
