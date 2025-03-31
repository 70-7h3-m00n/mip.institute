import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/QuizResults.module.sass'
import Image from 'next/image'
import CardQuizResult from '../cards/CardQuizResult'
import testResultsMarker from '@/helpers/funcs/testResultsMarker'
import { useProgramsSafe } from '@/hooks/general/useSafeContext'
import classNames from 'classnames'

interface Props {
  result: string
  isRounded?: boolean
}

const QuizResults = ({ result, isRounded }: Props) => {
  const {
    state: { programs }
  } = useProgramsSafe()

  if (!programs || !programs.length) {
    return null // Если нет данных, не рендерим ничего
  }
  const resultValues = result.split(',')
  const marker: string[] = []

  resultValues.forEach(item => {
    marker.push(...testResultsMarker(item))
  })

  const professionsInResult = marker.map(title =>
    programs.find(profession => profession.slug === title)
  )

  const list =
    programs &&
    [...professionsInResult]?.map(course => ({
      ...course,
      image: (
        <Image
          src={course?.heroPicture?.url}
          alt={course?.title}
          height={200}
          width={200}
          style={{
            width: '100%',
            height: 'auto'
          }}
          className={stls.img}
        />
      )
    }))

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.rounded]: isRounded
      })}>
      <Wrapper>
        <h3 className={stls.result}>
          Вам подойдут <span>профессии</span>:
        </h3>
        <div className={stls.content}>
          {(list.filter(el => el.slug) ?? []).map((course, idx) => (
            <CardQuizResult
              key={idx}
              portrait={course?.image}
              title={course.title}
              studyHours={course.studyHours}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default QuizResults
