import stls from './HomeFAQ.module.sass'
import Wrapper from '@/ui/Wrapper'
import listOnMain from 'constants/faq'
import ExpandableFAQ from '@/ui/ExpandableFAQ'

const HomeFAQ = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Часто задаваемые вопросы</h2>
        <ul className={stls.list}>
          {listOnMain.map((qna, idx) => (
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
