import stls from '@/components/sections/practicalTraining/RequirementsInProfession/RequirementsInProfession.module.sass'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

const RequirementsWithProgress = ({
  targetProgress,
  isActive,
  onComplete = null,
  id,
  text,
  onClick,
  card
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isActive) {
      let currentProgress = 0
      const interval = setInterval(() => {
        currentProgress += 1
        setProgress(currentProgress)
        if (currentProgress >= targetProgress) {
          clearInterval(interval)
          // @ts-ignore
          onComplete?.() // Оповещаем, что анимация завершена
        }
      }, 25) // Скорость анимации (в миллисекундах)
    }
  }, [isActive, targetProgress, onComplete])

  return (
    <>
      <div className={stls.progressContainer} onClick={onClick}>
        <div
          className={stls.progressFill}
          style={{ width: `${progress}%` }}></div>
        <div className={stls.textWrapper}>
          <div className={stls.withId}>
            <p className={stls.id}>{id + 1}</p>
            <span
              className={classNames({
                [stls.spanActive]: isActive
              })}>
              {' '}
              {text}
            </span>
          </div>

          {progress > 0 && (
            <span className={stls.progressText}>{progress} %</span>
          )}
        </div>
        <div
          className={classNames({
            [stls.arrowMob]: true,
            [stls.isShown]: isActive
          })}>
          ▲
        </div>
      </div>
      <div
        className={classNames({
          [stls.mobileCard]: true,
          [stls.isShown]: isActive
        })}>
        <div className={stls.hiddenBlock}>
          <p className={stls.num}>{id + 1}</p>
          <p className={stls.title}>{card.title}</p>
          <p className={stls.subtitle}>{card.subtitle}</p>
        </div>
      </div>
    </>
  )
}

export default RequirementsWithProgress
