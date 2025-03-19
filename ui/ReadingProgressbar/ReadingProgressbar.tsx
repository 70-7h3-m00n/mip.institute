import { useEffect, useRef } from 'react'
import stls from './ReadingProgressbar.module.sass'

const ReadingProgressbar = () => {
  const progressBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const winScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = (winScroll / height) * 100

        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${scrolled}%`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={stls.progressWrapper}>
      <div ref={progressBarRef} className={stls.progressBar}></div>
    </div>
  )
}

export default ReadingProgressbar
