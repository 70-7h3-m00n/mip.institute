import stls from './CourseWorkTopics.module.sass'
import Wrapper from '@/ui/Wrapper'
import ExpandableCourseItem from './ExpandableCourseItem'
import { topics } from './const'

const CourseWorkTopics = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>По итогу курса Вы будете работать с запросами:</h2>
        <ul className={stls.list}>
          {topics.map((qna, idx) => (
            <ExpandableCourseItem
              key={idx}
              number={idx + 1}
              title={qna.title}
              description={qna.description}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default CourseWorkTopics

//ExpandableRequest
