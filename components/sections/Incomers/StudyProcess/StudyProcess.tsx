import React, { useEffect, useRef, useState } from 'react'
import stls from './StudyProcess.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import monitor from './images/monitor.png'
import slide1 from './images/1.png'
import slide2 from './images/2.png'
import slide3 from './images/3.png'
import slide4 from './images/4.png'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import positionsByBreakpoint from '@/components/sections/Incomers/StudyProcess/constants'

const images = [slide1, slide2, slide3, slide4]

const StudyProcess = () => {
  const isMobile = useBetterMediaQuery('(max-width: 480px)')
  const isTablet = useBetterMediaQuery('(max-width: 768px)')
  const isLaptop = useBetterMediaQuery('(max-width: 1200px)')

  let currentBreakpoint: keyof typeof positionsByBreakpoint = 'desktop'

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
        <h2 className={stls.title}>Учебный процесс</h2>
        <div className={stls.textBlock}>
          <p>
            <span className={stls.bold}>
              На нашей образовательной платформе СДО размещены все необходимые материалы
            </span>
            — лекции, дополнительная литература, расписание различных онлайн и очных мероприятий,
            важные интересные новости.
          </p>
          <p>
            <span className={stls.bold}>А самое главное</span> — учебные планы с исчерпывающими
            модулями по необходимым дисциплинам, оценками с обратной связью и исключительными
            дополнительными материалами.
          </p>
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

          {images.map((item, index) => {
            const { top, left, rotate, scale } =
              scrollProgress < 0.9
                ? positionsByBreakpoint[currentBreakpoint].start[index]
                : positionsByBreakpoint[currentBreakpoint].final[index]

            return (
              <Image
                src={item}
                key={`Слайд-${index}`}
                alt={`Слайд-${index}`}
                width={250}
                height={150}
                className={stls.slide}
                style={{
                  position: 'absolute',
                  transition: 'all 1s ease-out',
                  top,
                  left,
                  transform: `rotate(${rotate}) scale(${scale})`
                }}
              />
            )
          })}
        </div>
      </Wrapper>
    </section>
  )
}

export default StudyProcess
