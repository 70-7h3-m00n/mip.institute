import stls from './StepBlocks.module.sass'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

const StepBlocks = ({ currentIndex, setCurrentIndex, animateSteps }) => {
  const [filledBlocks, setFilledBlocks] = useState([true, false, false])

  useEffect(() => {
    let intervalId

    if (animateSteps) {
      const animate = () => {
        filledBlocks.forEach((_, index) => {
          setTimeout(() => {
            setFilledBlocks(prev => {
              const newFilled = [...prev]
              newFilled[index] = true
              return newFilled
            })
            setCurrentIndex(index)
          }, index * 1500)
        })
      }

      animate()
    } else {
      setFilledBlocks(prev => {
        const newFilledBlocks = [...prev]
        for (let i = 0; i < newFilledBlocks.length; i++) {
          newFilledBlocks[i] = i <= currentIndex
        }
        return newFilledBlocks
      })
    }

    return () => clearInterval(intervalId)
  }, [animateSteps, setCurrentIndex])

  const handleStepClick = index => {
    setCurrentIndex(index)
  }

  const blocks = [{ id: 0 }, { id: 1 }, { id: 2 }]

  return (
    <div className={stls.container}>
      {blocks.map(el => (
        <div
          key={el.id}
          className={classNames(stls.stepBlock, {
            [stls.active]: filledBlocks[el.id]
          })}
          onClick={() => handleStepClick(el.id)}>
          <span
            className={classNames(stls.number, {
              [stls.completed]: filledBlocks[el.id]
            })}>
            {el.id + 1}
          </span>
          <div
            className={stls.fill}
            style={{
              height: `${filledBlocks[el.id] ? '100%' : '0%'}`,
              transition: 'height 0.8s linear'
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default StepBlocks
