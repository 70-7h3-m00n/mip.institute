import stls from './PracticalBriefProgramItem.module.sass'
import IconVioletSquare from '@/components/icons/IconVioletSquare'
import { BlogRecord } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'

type Props = {
  title: string
  description?: BlogRecord[]
}

const PracticalBriefProgramItem = ({ title, description }: Props) => {
  return (
    <li className={stls.container}>
      <div className={stls.header}>
        <span className={stls.itemTitle}>{title}</span>
        <div className={stls.icon}>
          <IconVioletSquare />
        </div>
      </div>
      {description?.length !== 0 && (
        <ul className={stls.description}>
          {description?.map(el => (
            <li className={stls.descriptionItem} key={el.text}>
              {el.text}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default PracticalBriefProgramItem
