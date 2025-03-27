'use client'

import React, { useState, useEffect } from 'react'
import stls from './MIPTeachersAsAuthors.module.sass'
import Wrapper from '@/ui/Wrapper'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Image from 'next/image'
import { TImage } from '@/types/index'
interface MIPTeachersAsAuthorsProps {
  imgs: TImage[]
}

const MIPTeachersAsAuthors = ({ imgs }: MIPTeachersAsAuthorsProps) => {
  const isMobile = useBetterMediaQuery('(max-width: 480px)')
  const isTabletOrLaptop = useBetterMediaQuery('(max-width: 1024px)')

  const [startIndex, setStartIndex] = useState(0)
  const [cardsPerSlide, setCardsPerSlide] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const newCardsPerSlide = isMobile ? 1 : isTabletOrLaptop ? 2 : 3
    setCardsPerSlide(newCardsPerSlide)
    setStartIndex(0)
  }, [isMobile, isTabletOrLaptop])

  const handleNext = () => {
    if (startIndex + cardsPerSlide < imgs.length) {
      setIsAnimating(true)
      setTimeout(() => {
        setStartIndex(prev => prev + cardsPerSlide)
        setIsAnimating(false)
      }, 100)
    }
  }

  const handlePrev = () => {
    if (startIndex - cardsPerSlide >= 0) {
      setStartIndex(prev => prev - cardsPerSlide)
    }
  }

  const endIndex = startIndex + cardsPerSlide
  const visibleCards = imgs.slice(startIndex, endIndex)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span>Преподаватели МИП выступают в качестве авторов статей и экспертов в СМИ</span>
        </h2>

        <div className={stls.navigation}>
          <div className={stls.text}>
            Подкасты и публикации от преподавателей института регулярно появляются в крупных
            изданиях
          </div>
          <ArrowNavigation
            onPrev={handlePrev}
            onNext={handleNext}
            bgColor='#FFF'
            arrowColor='#212121'
            disabledPrev={startIndex === 0}
            disabledNext={endIndex >= imgs.length}
            size='medium'
          />
        </div>

        <div className={`${stls.cards} ${isAnimating ? stls.fade : ''}`}>
          {visibleCards.map(card => (
            <div key={card.id} className={stls.card}>
              <Image
                src={card.url}
                alt='Публикации журналов'
                className={stls.image}
                width={isMobile ? 345 : 370}
                height={isMobile ? 382 : 407}
              />
            </div>
          ))}
        </div>

        <div className={stls.navigationMob}>
          <ArrowNavigation
            onPrev={handlePrev}
            onNext={handleNext}
            bgColor='#FFF'
            arrowColor='#212121'
            disabledPrev={startIndex === 0}
            disabledNext={endIndex >= imgs.length}
            size='medium'
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default MIPTeachersAsAuthors
