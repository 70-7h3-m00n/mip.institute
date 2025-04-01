import React from 'react'
import Link from 'next/link'
import stls from './TeachersBlock.module.sass'

const TeachersBlock = () => {
  return (
    <div className={stls.container}>
      <div className={stls.containerText}>
        <p className={stls.title}>Преподаватели-<br className={stls.lineBreak} />практики МИП</p>
        <p className={stls.description}>
          <span className={stls.bold}>Преподаватели нашего института</span> — вовлечённые
          профессионалы, для которых обучение — не просто работа, а призвание. Для каждой программы
          мы привлекаем наиболее компетентных экспертов, которые помогут вам раскрыть свой потенциал
          и вдохновят на новые достижения. Мы строго следим за качеством преподавания и поэтому
          отбираем специалистов с практическим опытом от 7 до 25 лет
        </p>
      </div>
      <Link href='https://mip.institute/teachers' className={stls.button}>
        Смотреть всех
      </Link>
    </div>
  )
}

export default TeachersBlock
