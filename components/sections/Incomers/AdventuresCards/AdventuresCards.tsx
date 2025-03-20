'use client'
import Wrapper from '@/ui/Wrapper'
import React from 'react'
import stls from './AdventuresCards.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Link from 'next/link'
interface ImageData {
  src: string
  width: number
  height: number
}
interface ImageBlockProps {
  blockImages: ImageData[]
  className: string
}

interface AdventuresCardsProps {
  showButton?: boolean
}

const AdventuresCards: React.FC<AdventuresCardsProps> = ({ showButton }) => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const isMobileOrTablet = useBetterMediaQuery('(max-width: 1024px)')

  const desktopImages: string[] = Array.from(
    { length: 9 },
    (_, i) => `/assets/imgs/incomers/image${i + 1}.jpg`
  )
  const mobileImages: string[] = Array.from(
    { length: 9 },
    (_, i) => `/assets/imgs/incomers/imageMob${i + 1}.jpg`
  )

  const presetSizes: { width: number; height: number }[] = [
    { width: 370, height: 560 },
    { width: 470, height: 390 },
    { width: 450, height: 390 },
    { width: 370, height: 560 },
    { width: 270, height: 420 },
    { width: 470, height: 420 },
    { width: 350, height: 420 },
    { width: 270, height: 420 },
    { width: 470, height: 420 }
  ]

  const selectedImages = isMobile ? mobileImages : desktopImages

  const images: ImageData[] = selectedImages.map((src, index) => {
    const presetSize = presetSizes[index] || { width: 353, height: 322 }
    return {
      src,
      width: presetSize.width,
      height: presetSize.height
    }
  })

  const firstBlock = images.slice(0, 2)
  const secondBlock = images.slice(2, 4)
  const thirdBlock = images.slice(4, 6)
  const fourthBlock = images.slice(6)

  const renderImageBlock: React.FC<ImageBlockProps> = ({ blockImages, className }) => (
    <div className={`${stls.block} ${className}`}>
      {blockImages.map((item, index) => (
        <div key={index} className={stls.imageContainer}>
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt='Образовательный процесс'
            className={stls.image}
          />
        </div>
      ))}
    </div>
  )

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          {isMobileOrTablet ? (
            <>
              <span className={stls.left}>Представь, что обучение — это путешествие,</span>
              <span className={stls.right}>где каждый шаг приближает тебя к мечте</span>
            </>
          ) : (
            <>
              <p className={stls.left}>Представь, что обучение — это путешествие,</p>
              <p className={stls.right}>где каждый шаг приближает тебя к мечте</p>
            </>
          )}
        </h2>

        {!isMobile && (
          <div className={stls.imageMipContainer}>
            <Image
              src='/assets/imgs/incomers/mip-logo.png'
              width={900}
              height={350}
              alt='МИП'
              className={stls.imageMip}
            />
          </div>
        )}

        <div className={stls.blockMain}>
          {!isMobile ? (
            <>
              {renderImageBlock({ blockImages: firstBlock, className: stls.blockTopLeft })}
              {renderImageBlock({ blockImages: secondBlock, className: stls.blockBottomRight })}
              {renderImageBlock({ blockImages: thirdBlock, className: stls.blockSpaceBetween })}
              {renderImageBlock({ blockImages: fourthBlock, className: stls.blockFlex })}
            </>
          ) : (
            images.map((item, index) => (
              <div key={index} className={stls.imageContainer}>
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt='Образовательный процесс'
                  className={stls.image}
                />
              </div>
            ))
          )}
        </div>
        {showButton && (
          <div className={stls.buttonContainer}>
            <Link href='https://mip.institute/incomers' passHref>
              <p className={stls.text}>Читать подробнее о МИП</p>
            </Link>
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default AdventuresCards
