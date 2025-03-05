import Wrapper from '@/ui/Wrapper'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/QuizResults.module.sass'
import Image from 'next/image'
import { useContext } from 'react'
import CardQuizResult from '../cards/CardQuizResult'
import testResultsMarker from '@/helpers/funcs/testResultsMarker'

interface Props {
  result: string
}

const QuizResults = ({ result }: Props) => {
  const { programs } = useContext(ContextStaticProps)

  if (!programs || !programs.length) {
    return null // Если нет данных, не рендерим ничего
  }
  const resultValues = result.split(',')
  const marker = []

  resultValues.forEach(item => {
    //@ts-ignore
    marker.push(...testResultsMarker(item))
  })

  const professionsInResult = marker.map(title =>
    programs.find(profession => profession.title === title)
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
    <section className={stls.container}>
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
