'use client'
import stls from './HomeFAQ.module.sass'
import Wrapper from '@/ui/Wrapper'
import questions from 'constants/GroupSupervision/faq'
import ExpandableFAQ from '@/ui/ExpandableFAQ'

const HomeFAQ = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Часто задаваемые вопросы</h2>
        <ul className={stls.list}>
          {questions.map((qna, idx) => (
            <ExpandableFAQ
              key={qna.question}
              number={idx + 1}
              question={qna.question}
              answer={qna.answer}
              classNameIcon={stls.icon}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default HomeFAQ
