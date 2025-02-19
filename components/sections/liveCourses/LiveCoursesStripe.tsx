import stls from '@/styles/components/sections/liveCourses/LiveCoursesStripe.module.sass'
import React from 'react'

const firstLine = [
  'Почему я все время обижаюсь?',
  'Что делать с обидой?',
  'Как с ней справиться?'
]
const secondLine = [
  'Как перестать обижаться?',
  'Как простить обиду и надо ли ее вообще прощать?'
]
const LiveCoursesStripe = () => {
  return (
    <section className={stls.section}>
      <div className={stls.text}>
        <div className={stls.block}>
          {firstLine.map((el, i) => (
            <React.Fragment key={el}>
              <div className={stls.rowMob}>
                <div className={stls.bulletMob}></div>
                <span className={stls.itemMob}>{el}</span>
              </div>
              <span className={stls.item}>{el}</span>
              {i !== firstLine.length - 1 && (
                <div className={stls.bullet}></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className={stls.block}>
          {secondLine.map((el, i) => (
            <React.Fragment key={el}>
              <div className={stls.rowMob}>
                <div className={stls.bulletMob}></div>
                <span className={stls.itemMob}>{el}</span>
              </div>
              <span className={stls.item}>{el}</span>
              {i !== secondLine.length - 1 && (
                <div className={stls.bullet}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LiveCoursesStripe
