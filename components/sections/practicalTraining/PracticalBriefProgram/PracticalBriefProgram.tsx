import Wrapper from '@/ui/Wrapper'
import stls from './PracticalBriefProgram.module.sass'
import { BriefProgram } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import PracticalBriefProgramItem from './PracticalBriefProgramItem/PracticalBriefProgramItem'

type Props = {
  listProgram: BriefProgram[]
}

const PracticalBriefProgram = ({ listProgram }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Краткая
          <span className={stls.colouredTitle}> программа </span>
          курса
        </h2>
        <ul className={stls.list}>
          {listProgram.map(el => (
            <PracticalBriefProgramItem
              title={el.title}
              description={el.record}
              key={el.title}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default PracticalBriefProgram
