'use client'
import stls from '@/styles/components/sections/PsyTest.module.sass'
import { useState } from 'react'
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import quiz from '../../constants/quizQuestions'
import Wrapper from '@/ui/Wrapper'
import dynamic from 'next/dynamic'

const QuizResults = dynamic(() => import('./QuizResults'), { ssr: false })

SwiperCore.use([Navigation, Pagination])

const PsyTest = ({
  fallbackComponent
}: {
  fallbackComponent: React.FC<{ startHandler: () => void }>
}) => {
  const [_, setInputs] = useState('')
  const [result, setResult] = useState<Array<Array<string>>>([])
  const [showResult, setShowResult] = useState(false)
  const [isTestStarted, setIsTestStarted] = useState(false)

  const [category, setCategory] = useState('')

  const handleAnswer = (categories, index) => {
    setInputs(categories)
    setResult(prevRes => [...prevRes, categories])
    setInputs('')
    index === 5 && handleLastSlide()
  }

  const handleBack = e => {
    e.preventDefault()
    setResult(prevRes => [...prevRes].slice(0, prevRes.length - 1))
    setInputs('')
  }

  let maxKey = ''

  const handleLastSlide = () => {
    setShowResult(true)
    let max = 0

    result.forEach(array => {
      array.forEach(word => {
        if (result.filter(array => array.includes(word)).length > max) {
          max = result.filter(array => array.includes(word)).length
          maxKey = word
        }
      })
    })
    setCategory(maxKey)
  }
  if (showResult) {
    console.log('Rendering QuizResults with category:', category)
    return <QuizResults result={category} />
  }

  const handleStart = () => {
    setIsTestStarted(true)
  }
  const FallbackComponent = fallbackComponent
  return (
    <>
      {isTestStarted ? (
        <section className={stls.container}>
          <Wrapper>
            <Swiper
              className={stls.a}
              speed={1000}
              navigation={{
                prevEl: '.back',
                nextEl: '.quiz'
              }}
              swipeHandler='.quiz'>
              {quiz.map(el => (
                <SwiperSlide virtualIndex={el.idx} key={el.idx}>
                  <h3 className={stls.questionTitle}>{el.title}</h3>
                  <div className={stls.card}>
                    <div className={stls.leftBlock}>
                      <div className='quiz' onClick={() => handleAnswer(el.value1, el.idx)}>
                        <input
                          type='radio'
                          className={stls.radioQuiz}
                          name='input'
                          value={el.value1}
                        />
                        <label className={stls.label}>{el.question1}</label>
                      </div>
                      <div className='quiz' onClick={() => handleAnswer(el.value2, el.idx)}>
                        <input
                          type='radio'
                          className={stls.radioQuiz}
                          name='input'
                          value={el.value2}
                        />
                        <label className={stls.label}>{el.question2}</label>
                      </div>
                      {el.value3 && (
                        <div className='quiz' onClick={() => handleAnswer(el.value3, el.idx)}>
                          <input
                            type='radio'
                            className={stls.radioQuiz}
                            name='input'
                            value={el?.value3}
                          />
                          <label className={stls.label}>{el?.question3}</label>
                        </div>
                      )}

                      {el.value4 && (
                        <div className='quiz' onClick={() => handleAnswer(el.value4, el.idx)}>
                          <input
                            type='radio'
                            className={stls.radioQuiz}
                            name='input'
                            value={el.value4}
                          />
                          <label className={stls.label}>{el?.question4}</label>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={stls.btn}>
                    <button disabled={el.idx === 1} onClick={handleBack} className='back'>
                      Назад
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Wrapper>
        </section>
      ) : (
        <FallbackComponent startHandler={handleStart} />
      )}
    </>
  )
}
export default PsyTest
