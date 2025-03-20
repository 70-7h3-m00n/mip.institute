import React, { useEffect, useRef, useState } from 'react'
import stls from './StudyProcess.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image, { StaticImageData } from 'next/image'
import monitor from './images/monitor.png'
import slide1 from './images/1.png'
import slide2 from './images/2.png'
import slide3 from './images/3.png'
import slide4 from './images/4.png'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import {
  PositionsByBreakpoint,
  positionsByBreakpoint
} from '@/components/sections/Incomers/StudyProcess/constants'
import Link from 'next/link'

export interface StudyProcessData {
  title?: string
  homePage?: boolean
  text?: {
    bold: string
    normal: string
    reversed?: boolean
    normal2?: string
  }[]
  positions: PositionsByBreakpoint
  images?: StaticImageData[]
  imageSizes: { width: number; height: number }[]
}

interface Props {
  studyProcess?: StudyProcessData
  showButton?: boolean
}

const data: StudyProcessData = {
  title: 'Учебный процесс',
  text: [
    {
      bold: 'На нашей образовательной платформе СДО размещены все необходимые материалы',
      normal:
        '— лекции, дополнительная литература, расписание различных онлайн и очных мероприятий, важные интересные новости.'
    },
    {
      bold: 'А самое главное',
      normal:
        '— учебные планы с исчерпывающими модулями по необходимым дисциплинам, оценками с обратной связью и исключительными дополнительными материалами.'
    }
  ],
  positions: positionsByBreakpoint,
  images: [slide1, slide2, slide3, slide4],
  imageSizes: [
    { width: 250, height: 150 },
    { width: 250, height: 150 },
    { width: 250, height: 150 },
    { width: 250, height: 150 }
  ]
}

const StudyProcess = ({ studyProcess = data, showButton = false }: Props) => {
  const isSmallMobile = useBetterMediaQuery('(max-width: 391px)')
  const isMobile = useBetterMediaQuery('(max-width: 480px)')
  const isTablet = useBetterMediaQuery('(max-width: 768px)')
  const isLaptop = useBetterMediaQuery('(max-width: 1200px)')

  let currentBreakpoint: keyof PositionsByBreakpoint = 'desktop'

  if (isMobile) {
    currentBreakpoint = 'mobile'
  } else if (isTablet) {
    currentBreakpoint = 'tablet'
  } else if (isLaptop) {
    currentBreakpoint = 'laptop'
  }

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>{studyProcess.title}</h2>
        <div className={stls.textBlock}>
          {studyProcess.text?.map(text => {
            return text.reversed ? (
              <p key={text.bold}>
                {text.normal}
                <span className={stls.bold}>{text.bold}</span>
                {text.normal2}
              </p>
            ) : (
              <p key={text.bold}>
                <span className={stls.bold}>{text.bold}</span>
                {text.normal}
              </p>
            )
          })}
        </div>

        <div className={stls.monitorContainer}>
          <Image
            src={monitor}
            alt='Монитор'
            width={700}
            height={400}
            className={stls.monitor}
            style={{ width: '100%', height: '100%' }}
          />

          {studyProcess?.images?.map((item, index) => {
            const { top, left, rotate, scale } =
              scrollProgress < 0.9
                ? studyProcess.positions[currentBreakpoint].start[index]
                : studyProcess.positions[currentBreakpoint].final[index]

            const { width, height } = studyProcess.imageSizes?.[index] ?? {
              width: 100,
              height: 100
            }

            return (
              <Image
                src={item}
                key={`Слайд-${index}`}
                alt={`Слайд-${index}`}
                width={isSmallMobile ? 215 : width}
                height={height}
                className={stls.slide}
                style={{
                  position: 'absolute',
                  transition: 'all 1s ease-out',
                  top,
                  left,
                  borderWidth: studyProcess.homePage ? 0 : 0.5,
                  borderRadius: studyProcess.homePage ? '16px' : '10px',
                  transform: `rotate(${rotate}) scale(${scale})`
                }}
              />
            )
          })}
          {showButton && (
            <div className={stls.buttonContainer}>
              <Link href='https://mip.institute/incomers' passHref>
                <p className={stls.text}>Образовательная лицензия №041221</p>
              </Link>
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default StudyProcess
