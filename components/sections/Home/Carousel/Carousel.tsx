import stls from './Carousel.module.sass'
import Wrapper from '@/ui/Wrapper'
import imageUrl from '@/public/assets/imgs/home/hero/Herobg.jpeg'
import Image from 'next/image';
import classNames from 'classnames';

const imageList = [
  {
    id: 0,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1738833628/Foto_zaglushka_c6286bb454.jpg'
  },
  {
    id: 1,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7256_a6af690446.jpg'
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_7936_f1275458dd.jpg'
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_8025_9c13b3030b.jpg'
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9356_5500f80eaa.jpg'
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9275_3422189b9a.jpg'
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1739873918/IMG_9360_d807f6f92d.jpg'
  }
]

const Carousel = () => {
  
  return (
    <section className={stls.container}>
          <h1>asfasfasfas</h1>
          <ul className={stls.horizontalmediascroller}>
              {imageList.map((el,i) => (
                <li>
                  <picture>
                    <Image src={el.url}
                    alt=''
                    className={classNames({
                      [stls.img]: true,
                      [stls.activeSlide]: imageList?.[2].id === el.id
                    })}
                    width={400}
                    height={400}/>
                  </picture>
                </li>
              ))}
             </ul>
          {/* </Wrapper> */}
    </section>
  )
}

export default Carousel
