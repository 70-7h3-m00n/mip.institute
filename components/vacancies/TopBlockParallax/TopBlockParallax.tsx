import React, { useState } from 'react'
import styles from './TopBlockParallax.module.sass'
import Image from 'next/image'
import { images, parseTopBlockData, TopBlockDataType } from './const'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import classNames from 'classnames'

type PropsType = {
  props: TopBlockDataType
}

const TopBlockParallax = ({ props }: PropsType) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const parsedData = parseTopBlockData(props)
  if (!parsedData) return null

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { width, height, left, top } = currentTarget.getBoundingClientRect()

    const x = (clientX - left - width / 2) / width
    const y = (clientY - top - height / 2) / height

    setMouseX(x)
    setMouseY(y)
  }
  const getImageClass = (id: number) =>
    classNames(styles.parallaxImage, {
      [styles.specialImageFoto]: id === 1 || id === 4,
      [styles.specialImageChat]: id === 3,
      [styles.specialImageMip]: id === 2,
      [styles.specialImagePointer]: id === 5
    })
  return (
    <section className={styles.container} onMouseMove={handleMouseMove}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <div className={styles.vacancyTag}>
            <h1 className={styles.vacancyTitle}>Вакансии МИП</h1>
          </div>
          <h2 className={styles.title}>{parsedData.title}</h2>
          <p className={styles.description}>{parsedData.description}</p>
          {parsedData.link && (
            <a
              href={parsedData.link}
              className={styles.button}
              target='_blank'
              rel='noopener noreferrer'>
              {parsedData.linkText}
            </a>
          )}
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.svgBackgroundDes}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='669'
                height='540'
                viewBox='0 0 669 540'
                fill='none'>
                <path
                  d='M278.246 173.526C235.517 210.631 75.4655 73.6228 0.780605 0.481113C52.452 56.8519 158.803 184.319 170.836 243.217C182.871 302.115 63.0099 386.139 1.57503 420.787C75.3171 395.09 231.773 348.296 267.661 366.702C303.549 385.109 316.029 456.92 317.783 490.525C320.796 462.946 337.612 403.917 380.767 388.424C423.921 372.932 566.344 482.553 632.158 539.299C583.386 485.393 485.064 363.487 481.971 307.126C478.877 250.765 605.184 169.856 668.723 136.447C606.283 163.497 466.913 212.928 408.953 194.251C350.993 175.574 337.823 91.0087 338.482 51.0605C336.207 76.4228 320.975 136.422 278.246 173.526Z'
                  fill='#DCC8FF'
                />
              </svg>
            </div>
            {isMobileAndTabletLayout && (
              <div className={styles.svgBackgroundMob}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='375'
                  height='410'
                  viewBox='0 0 375 410'
                  fill='none'>
                  <path
                    d='M112.424 162.428C100.261 199.88 -44.3181 175.619 -115.087 158.807C-64.0558 173.877 45.0835 211.716 73.3894 242.514C101.696 273.312 60.3803 366.411 36.1839 409.11C70.9295 367.332 147.42 283.3 175.421 281.398C203.421 279.496 236.626 317.832 249.728 337.238C241.631 319.715 230.478 278.488 250.648 253.768C270.819 229.049 395.061 243.307 454.659 253.526C406.241 238.885 303.883 201.481 281.818 168.988C259.752 136.495 306.028 42.9412 331.924 0.225635C304.402 38.7553 239.044 118.23 197.787 127.889C156.531 137.548 118.338 91.8557 104.398 67.8019C112.142 83.7392 124.586 124.976 112.424 162.428Z'
                    fill='#DCC8FF'
                  />
                </svg>
              </div>
            )}

            {images.map(img => (
              <Image
                key={img.id}
                className={getImageClass(img.id)}
                alt='Параллакс изображение'
                src={img.src}
                width={img.width}
                height={img.height}
                quality={100}
                data-id={img.id}
                style={{
                  transform: `translate(${mouseX * img.xFactor}px, ${mouseY * img.yFactor}px) ${isMobileAndTabletLayout ? `scale(${img.scaleMobile})` : `scale(${img.scale})`}`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopBlockParallax
