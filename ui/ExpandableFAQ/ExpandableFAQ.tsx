import stls from './ExpandableFAQ.module.sass'
import IconArrowRightLong from '@/components/icons/IconArrowRightLong'
import ExpandableItemCross from '@/ui/ExpandableItemCross'

type Props = {
  question: string
  answer: string
  number: number
  classNameIcon?: string
}
const ExpandableFAQ = ({ number, question, answer, classNameIcon }: Props) => {
  return (
    <ExpandableItemCross
      title={
        <span className={stls.question}>
          <span className={stls.questionNumber}>{number}</span>
          <span className={stls.questionText}>{question}</span>
        </span>
      }
      content={
        <div className={stls.content}>
          <span>
            <IconArrowRightLong />
          </span>
          <p className={stls.textContent}>{answer}</p>
        </div>
      }
      classNameIcon={classNameIcon ?? stls.iconProps}
      classNameContainer={stls.itemProps}
      classNameHeader={stls.reversedHeaderProps}
    />
  )
}

export default ExpandableFAQ
