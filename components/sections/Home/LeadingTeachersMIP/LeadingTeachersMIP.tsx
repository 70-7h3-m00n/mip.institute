import React from 'react'
import stls from './LeadingTeachersMIP.module.sass'
import Wrapper from '@/ui/Wrapper'
import TeachersBlock from './TeachersBlock/TeachersBlock'
import AuthorsShowcase from './AuthorsShowcase/AuthorsShowcase'

const LeadingTeachersMIP = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.mobile}>
            <p>Ведущие преподаватели </p>
            <p>Института</p>
          </span>
          <span className={stls.desktop}>Ведущие преподаватели Института</span>
        </h2>
        <div className={stls.blockMain}>
          <TeachersBlock />
          <AuthorsShowcase />
        </div>
      </Wrapper>
    </section>
  )
}

export default LeadingTeachersMIP
