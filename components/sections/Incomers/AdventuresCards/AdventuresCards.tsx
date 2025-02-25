import Wrapper from '@/ui/Wrapper'
import React from 'react'
import stls from './AdventuresCards.module.sass'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const AdventuresCards = ({ data }: any) => {
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const isMobileOrTablet = useBetterMediaQuery('(max-width: 1024px)')

  const presetSizes = [
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

  const images = data.map((item, index) => {
    const presetSize = presetSizes[index]
    return {
      url: item.carousel.slide.files[isMobile ? 1 : 0].url,
      width: isMobile ? 353 : presetSize?.width,
      height: isMobile ? 322 : presetSize?.height
    }
  })

  const firstBlock = images.slice(0, 2)
  const secondBlock = images.slice(2, 4)
  const thirdBlock = images.slice(4, 6)
  const fourthBlock = images.slice(6)

  const renderImageBlock = (blockImages, className) => (
    <div className={`${stls.block} ${className}`}>
      {blockImages.map((item, index) => (
        <div key={index} className={stls.imageContainer}>
          <Image
            src={item.url}
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
              src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739393511/MIP_648849f5c7.png'
              width={900}
              height={350}
              alt='Мип'
              className={stls.imageMip}
            />
          </div>
        )}

        <div className={stls.blockMain}>
          {!isMobile ? (
            <>
              {renderImageBlock(firstBlock, stls.blockTopLeft)}
              {renderImageBlock(secondBlock, stls.blockBottomRight)}
              {renderImageBlock(thirdBlock, stls.blockSpaceBetween)}
              {renderImageBlock(fourthBlock, stls.blockFlex)}
            </>
          ) : (
            images.map((item, index) => (
              <div key={index} className={stls.imageContainer}>
                <Image
                  src={item.url}
                  width={item.width}
                  height={item.height}
                  alt='Образовательный процесс'
                  className={stls.image}
                />
              </div>
            ))
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default AdventuresCards
