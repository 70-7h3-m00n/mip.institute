import React from 'react'
import Wrapper from '@/ui/Wrapper'
import styles from './SliderWithImg.module.sass'
import Image from 'next/image'

type ArticleAuthorsType = {
  props: SliderProps
}
type SlideType = {
  id: number
  title: string
  body: string
}

type Image = {
  url: string
  width: number
  height: number
}

type SliderProps = {
  title: string
  img: Image
  slide: SlideType[]
}

const SliderWithImg = ({ props }: ArticleAuthorsType) => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.containerTwoColumns}>
          <div className={styles.container_slides}>
            {props.slide.map((slide, index) => (
              <div key={slide.id} className={styles.slide}>
                <div className={styles.containerIndex}>
                  <p className={styles.index}>
                    {index + 1} / {props.slide.length}
                  </p>
                </div>
                <h3 className={styles.subtitle}>{slide.title}</h3>
                <p className={styles.description}>{slide.body}</p>
              </div>
            ))}
          </div>
          <Image
            className={styles.chatImage}
            alt='фотография чата'
            src={props.img.url}
            width={570}
            height={props.img.height}
            style={{ height: '100%' }}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SliderWithImg
