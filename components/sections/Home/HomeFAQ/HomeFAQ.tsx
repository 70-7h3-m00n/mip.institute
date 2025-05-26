import stls from './HomeFAQ.module.sass'
import Wrapper from '@/ui/Wrapper'
import listOnMain from 'constants/faq'
import ExpandableFAQ from '@/ui/ExpandableFAQ'
import classNames from 'classnames'

interface Props {
  purple?: boolean
  listQuestions?: {
    question: string
    answer: string
  }[]
}

const HomeFAQ = ({ purple = false, listQuestions = listOnMain }: Props) => {
  return (
    <section className={classNames({ [stls.container]: true, [stls.purple]: purple })} id='faq'>
      <Wrapper>
        <h2 className={stls.title}>Часто задаваемые вопросы</h2>
        <ul className={stls.list}>
          {listQuestions.map((qna, idx) => (
            <ExpandableFAQ
              key={qna.question}
              number={idx + 1}
              question={qna.question}
              answer={qna.answer}
              classNameIcon={purple ? stls.purpleIcon : stls.icon}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default HomeFAQ
