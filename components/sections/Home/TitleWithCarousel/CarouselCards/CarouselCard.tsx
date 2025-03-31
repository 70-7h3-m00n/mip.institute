'use client'
import { useEffect, useRef, useState } from 'react'
import RichTextHome from '@/components/markdown/RichTextHome'
import stls from './CarouselCards.module.sass'
import Image from 'next/image'

const CarouselCardNext = ({ card, isNext, isMobile }) => {
  const translateY = useRef(-138.3)
  const [currentTranslateY, setCurrentTranslateY] = useState(-138.3)

  useEffect(() => {
    let animationFrameId

    // Проверяем, выполняется ли код на клиенте
    if (typeof window !== 'undefined') {
      // При первой загрузке получаем предыдущее значение
      const savedTranslateY = sessionStorage.getItem('translateY')
      if (savedTranslateY !== null) {
        translateY.current = parseFloat(savedTranslateY)
        setCurrentTranslateY(parseFloat(savedTranslateY))
      }

      const handleScroll = () => {
        if (!isNext || isMobile) return // Только для активного слайда

        const scrollTop = window.scrollY
        const newTranslateY = Math.min(0, -138.3 + scrollTop * 0.3)

        if (translateY.current !== newTranslateY) {
          translateY.current = newTranslateY
          sessionStorage.setItem('translateY', String(newTranslateY))
          animationFrameId = requestAnimationFrame(() => {
            setCurrentTranslateY(newTranslateY)
          })
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isNext])

  return (
    <picture>
      <div
        className={isNext ? stls.nextWrap : stls.wrap}
        style={{
          transform: isNext && !isMobile ? `translateY(${currentTranslateY}%)` : 'translateY(0)'
        }}>
        <RichTextHome className={stls.textBlock} stls={stls} data={card.text} />
        <Image
          src={card.img?.url}
          alt=''
          className={isNext && currentTranslateY != 0 ? stls.nextImg : stls.img}
          height={500}
          width={500}
        />
      </div>
    </picture>
  )
}

export default CarouselCardNext
