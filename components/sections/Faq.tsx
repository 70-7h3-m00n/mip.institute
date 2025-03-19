import FaqAnswer from '@/ui/FaqAnswer'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/Faq.module.sass'
import listOnMain from 'constants/faq'
import { useContext } from 'react'
import { RefObject } from 'react'

interface FaqProps {
  faqRef?: RefObject<HTMLDivElement>
}
const Faq = ({ faqRef }: FaqProps) => {
  const { program, bachelor } = useContext(ContextStaticProps)

  let list

  if (program?.qnas?.length) {
    list = program.qnas.map((qna, idx) => ({
      question: qna.question,
      answer: qna.answer
    }))
  } else if (bachelor?.qnas?.length) {
    list = bachelor.qnas.map((qna, idx) => ({
      question: qna.question,
      answer: qna.answer
    }))
  } else {
    list = listOnMain
  }

  return (
    <section ref={faqRef} className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          {' '}
          <h2 className={stls.title}>Часто задаваемые вопросы</h2>
          <div className={stls.laptopdesktop}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! <br />И мы перезвоним Вам!
            </p>
            <div className={stls.btn}>
              <PopupTrigger btn='zeta' cta='askQuestion' />
            </div>
          </div>
        </div>

        <div className={stls.content}>
          <ul className={stls.list}>
            {list &&
              list.map(({ question, answer }, idx) => (
                <FaqAnswer key={question + idx} question={question} answer={answer} />
              ))}
          </ul>
          <div className={stls.phonetablet}>
            <p className={stls.p}>У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам!</p>
          </div>
        </div>
        <div className={stls.phonetablet}>
          <PopupTrigger btn='zeta' cta='askQuestion' />
        </div>
      </Wrapper>
    </section>
  )
}

export default Faq
