import Image from 'next/image'
import stls from './OurOffice.module.sass'
import Wrapper from '@/ui/Wrapper'
import { useState } from 'react'
import classNames from 'classnames'
type OurOfficeType = {
  props: {
    title: string
    img: {
      url: string
      width: number
      height: number
    }
    quote: {
      children: {
        text: string
        type: string
        bold?: boolean
      }[]
    }[]
    slider: {
      files: {
        id: number
        url: string
        width: number
        height: number
      }[]
    }
  }
}
const OurOffice = ({ props }: OurOfficeType) => {
  const images = props?.slider?.files
  const [imageList, setImageList] = useState(images)

  const nextSlide = () => {
    setImageList(prev => [...prev.slice(1), prev[0]])
  }

  const prevSlide = () => {
    setImageList(prev => [prev[prev.length - 1], ...prev.slice(0, -1)])
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.blockWrapper}>
          <div className={stls.officeText}>
            <p className={stls.title}>{props?.title}</p>
            {props?.quote?.map((el, i) => (
              <p key={i}>
                {el.children.map((el, i) => (
                  <span
                    key={i}
                    className={stls.text}
                    style={{ fontWeight: el.bold && 500 }}>
                    {el.text}
                  </span>
                ))}
              </p>
            ))}
          </div>
          <div className={stls.sliderContainer}>
            <div className={stls.slider}>
              {imageList?.map((el, i) => (
                <div className={stls.slide} key={i}>
                  <Image
                    onClick={nextSlide}
                    className={classNames({
                      [stls.img]: true,
                      [stls.activeSlide]: imageList?.[0].id === el.id
                    })}
                    src={el.url}
                    alt=''
                    width={400}
                    height={400}
                  />
                </div>
              ))}
              <button onClick={prevSlide} className={stls.btnPrev}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'>
                  <rect width='40' height='40' rx='20' fill='white' />
                  <path
                    d='M14.5 20.866C13.8333 20.4811 13.8333 19.5189 14.5 19.134L22 14.8038C22.6667 14.4189 23.5 14.9001 23.5 15.6699L23.5 24.3301C23.5 25.0999 22.6667 25.5811 22 25.1962L14.5 20.866Z'
                    fill='#6F01C6'
                  />
                </svg>
              </button>
              <button onClick={nextSlide} className={stls.nextBtn}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'>
                  <rect
                    x='40'
                    y='40'
                    width='40'
                    height='40'
                    rx='20'
                    transform='rotate(-180 40 40)'
                    fill='white'
                  />
                  <path
                    d='M25.5 19.134C26.1667 19.5189 26.1667 20.4811 25.5 20.866L18 25.1962C17.3333 25.5811 16.5 25.0999 16.5 24.3301L16.5 15.6699C16.5 14.9001 17.3333 14.4189 18 14.8038L25.5 19.134Z'
                    fill='#6F01C6'
                  />
                </svg>
              </button>
            </div>
          </div>
          <Image src={props?.img?.url} width={400} height={512} alt='' className={stls.imgLeft} />
        </div>
      </Wrapper>
    </section>
  )
}

export default OurOffice
