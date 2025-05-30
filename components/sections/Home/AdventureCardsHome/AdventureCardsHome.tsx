'use client'
import Wrapper from '@/ui/Wrapper'
import stls from './AdventuresCardsHome.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

interface ImageData {
  src: string
  width: number
  height: number
}

interface AdventuresCardsProps {
  showButton?: boolean
}

function AdventuresCardsHome({ showButton }: AdventuresCardsProps) {
  const desktopImages = Array.from(
    { length: 9 },
    (_, i) => `/assets/imgs/incomers/image${i + 1}.jpg`
  )
  const mobileImages = Array.from(
    { length: 9 },
    (_, i) => `/assets/imgs/incomers/imageMob${i + 1}.jpg`
  )

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

  const desktopData: ImageData[] = desktopImages.map((src, index) => {
    const size = presetSizes[index] || { width: 353, height: 322 }
    return { src, width: size.width, height: size.height }
  })

  const renderImages = (images: string[]) =>
    images.map((src, index) => {
      const size = presetSizes[index] || { width: 353, height: 322 }
      return (
        <div key={index} className={stls.imageContainer}>
          <Image
            src={src}
            width={size.width}
            height={size.height}
            alt='Образовательный процесс'
            className={stls.image}
          />
        </div>
      )
    })

  const renderDesktopBlocks = () => {
    const first = desktopData.slice(0, 2)
    const second = desktopData.slice(2, 4)
    const third = desktopData.slice(4, 6)
    const fourth = desktopData.slice(6)

    const renderBlock = (images: ImageData[], className: string) => (
      <div className={`${stls.block} ${className}`}>
        {images.map((item, index) => (
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
      <>
        {renderBlock(first, stls.blockTopLeft)}
        {renderBlock(second, stls.blockBottomRight)}
        {renderBlock(third, stls.blockSpaceBetween)}
        {renderBlock(fourth, stls.blockFlex)}
      </>
    )
  }

  return (
    <section className={classNames({ [stls.container]: true, [stls.lightColorBg]: showButton })}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.left}>Учёба, которая приводит к делу:  </span>
          <span className={stls.right}>структура и этапы наших программ</span>
        </h2>

        <div className={stls.imageMipContainer}>
          <Image
            src='/assets/imgs/incomers/mip-logo.png'
            width={900}
            height={300}
            alt='МИП'
            className={stls.imageMip}
          />
        </div>

        <div className={`${stls.blockMain} ${stls.desktop}`}>{renderDesktopBlocks()}</div>
        <div className={`${stls.blockMain} ${stls.mobile}`}>{renderImages(mobileImages)}</div>

        {showButton && (
          <div className={stls.buttonContainer}>
            <Link href='https://mip.institute/incomers' passHref>
              <p className={stls.text}>Читать подробнее об Институте</p>
            </Link>
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default AdventuresCardsHome
