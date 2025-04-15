import stls from './ExpandableFAQ.module.sass'
import IconArrowRightLong from '@/components/icons/IconArrowRightLong'
import ExpandableItemCross from '@/ui/ExpandableItemCross'

type Props = {
  question: string
  answer: string
  number: number
  variant?: 'default' | 'brand'
}
const ExpandableFAQ = ({ number, question, answer, variant = 'default' }: Props) => {
  const itemClass = variant === 'brand' ? stls.itemBrand : stls.itemProps
  const iconClass = variant === 'brand' ? stls.iconBrand : stls.iconProps

  return (
    <ExpandableItemCross
      title={
        <p className={stls.question}>
          <span className={stls.questionNumber}>({number})</span>
          <span className={stls.questionText}>{question}</span>
        </p>
      }
      content={
        <div className={stls.content}>
          <span>
            <IconArrowRightLong />
          </span>
          <p className={stls.textContent}>{answer}</p>
        </div>
      }
      classNameIcon={iconClass}
      classNameContainer={itemClass}
      classNameHeader={stls.reversedHeaderProps}
    />
  )
}

export default ExpandableFAQ
