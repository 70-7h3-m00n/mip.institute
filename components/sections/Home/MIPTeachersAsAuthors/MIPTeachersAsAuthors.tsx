'use client'

import React, { useState } from 'react'
import stls from './MIPTeachersAsAuthors.module.sass'
import Wrapper from '@/ui/Wrapper'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Image from 'next/image'
import { authorCards } from './const'

const MIPTeachersAsAuthors = () => {
  const isMobile = useBetterMediaQuery('(max-width: 480px)')
  const isTabletOrLaptop = useBetterMediaQuery('(max-width: 1024px)')

  const getCardsPerSlide = () => {
    if (isMobile) return 1
    if (isTabletOrLaptop) return 2
    return 3
  }

  const cardsPerSlide = getCardsPerSlide()
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    if (startIndex + cardsPerSlide < authorCards.length) {
      setStartIndex(prev => prev + cardsPerSlide)
    }
  }

  const handlePrev = () => {
    if (startIndex - cardsPerSlide >= 0) {
      setStartIndex(prev => prev - cardsPerSlide)
    }
  }

  const endIndex = startIndex + cardsPerSlide
  const visibleCards = authorCards.slice(startIndex, endIndex)

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
            disabledNext={endIndex >= authorCards.length}
            size='medium'
          />
        </div>

        <div className={stls.cards}>
          {visibleCards.map(card => (
            <div key={card.id} className={stls.card}>
              <Image
                src={card.image}
                alt={card.alt}
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
            disabledNext={endIndex >= authorCards.length}
            size='medium'
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default MIPTeachersAsAuthors
