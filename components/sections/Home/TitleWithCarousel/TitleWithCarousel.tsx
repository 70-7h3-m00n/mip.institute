import stls from './TitleWithCarousel.module.sass'
import Title from './Title/Title'
import Carousel from './Carousel/Carousel'

const TitleWithCarousel = ({ heroCarousel }) => {
  return (
    <section className={stls.section}>
      <Title />
      <Carousel heroCarousel={heroCarousel} />
    </section>
  )
}

export default TitleWithCarousel
