import stls from './TitleWithCarousel.module.sass'
import Title from './Title/Title'
import Carousel from './Carousel/Carousel'
import { THeroCarousel } from '@/types/index'

interface TCarousel  {
  heroCarousel: THeroCarousel
}

const TitleWithCarousel: React.FC<TCarousel>  = ({ heroCarousel }) => {

  const a = heroCarousel[0].img
  return (
    <section className={stls.section}>
      <Title />
      <Carousel heroCarousel={heroCarousel} />
    </section>
  )
}

export default TitleWithCarousel
