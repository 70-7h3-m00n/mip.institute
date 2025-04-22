'use client'

import React, { useState } from 'react'
import stls from './AuthorsShowcase.module.sass'
import ArrowNavigation from '@/ui/ArrowsNavigation/ArrowsNavigation'
import { authors } from './const'
import Image from 'next/image'
import ListStarIcon from './ListStarIcon'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const AuthorsShowcase = () => {
  const [index, setIndex] = useState(0)
  const isMobileAndTablet = useBetterMediaQuery('(max-width: 780px)')

  const handleNext = () => {
    setIndex(prev => (prev + 1) % authors.length)
  }

  const handlePrev = () => {
    setIndex(prev => (prev - 1 + authors.length) % authors.length)
  }

  const { name, list, image, imageMob, experience } = authors[index]
  const imageSrc = isMobileAndTablet ? imageMob : image
  const imageWidth = isMobileAndTablet ? 317 : 279
  const imageHeight = isMobileAndTablet ? 322 : 450

  const arrowControls = (
    <ArrowNavigation
      onPrev={handlePrev}
      onNext={handleNext}
      bgColor='#8F60FF'
      arrowColor='#FFFFFF'
      disabledPrev={index === 0}
      disabledNext={index === authors.length - 1}
      size='medium'
    />
  )
  return (
    <div className={stls.container}>
      <div className={stls.left}>
        <div className={stls.containerText}>
          <div className={stls.header}>
            <p className={stls.name}>{name}</p>
            <p className={stls.experienceMob}>{experience}</p>
          </div>
          <ul className={stls.list}>
            {list.map((item, i) => (
              <li key={i}>
                <ListStarIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={stls.experience}>{experience}</p>
          <div className={stls.navigation}>{arrowControls}</div>
        </div>
      </div>

      <div className={stls.right}>
        <Image
          src={imageSrc}
          alt={name}
          className={stls.image}
          width={imageWidth}
          height={imageHeight}
        />
        <div className={stls.navigationMob}>{arrowControls}</div>
      </div>
    </div>
  )
}

export default AuthorsShowcase
