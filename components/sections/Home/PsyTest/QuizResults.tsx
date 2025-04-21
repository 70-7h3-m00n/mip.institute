import Wrapper from '@/ui/Wrapper'
import stls from './QuizResults.module.sass'
import Image from 'next/image'
import CardQuizResult from '@/components/cards/CardQuizResult'
import testResultsMarker from '@/helpers/funcs/testResultsMarker'
import { useProgramsSafe } from '@/hooks/general/useSafeContext'
import classNames from 'classnames'
import { routes } from '@/config/index'
import Link from 'next/link'

interface Props {
  result: string
  isRounded?: boolean
}

const QuizResults = ({ result, isRounded }: Props) => {
  const {
    state: { programs }
  } = useProgramsSafe()
  if (!programs || !programs.length) return null

  const resultValues = result.split(',')
  const marker: string[] = []

  resultValues.forEach(item => {
    marker.push(...testResultsMarker(item))
  })

  const professionsInResult = marker.map(title => programs.find(program => program.slug === title))

  const list =
    programs &&
    professionsInResult.map(course => ({
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

  const description = [
    {
      heading: 'Срок обучения',
      value: `${list[0]?.studyMounthsDuration} месяцев`
    },
    {
      heading: 'Количество часов',
      value: `${list[0]?.studyHours} академических часов`
    },
    {
      heading: 'Форма обучения',
      value: 'Заочная'
    },
    {
      heading: 'Зачисление',
      value: '1 число каждого месяца'
    }
  ]

  const oneProgramLink = `${routes.front.professions}/${list[0]?.studyFieldSlug}/${list[0]?.slug}`

  return (
    <section
      className={classNames(stls.container, {
        [stls.rounded]: isRounded
      })}>
      <Wrapper>
        <div className={stls.resultsWrapper}>
          {list?.length === 1 ? (
            <>
              <h3 className={stls.result}>
                Вам подойдет профессия
                <span className={stls.colored}>«Психолог – консультант»</span>
              </h3>

              <div className={stls.oneProgramResult}>
                <CardQuizResult
                  portrait={list[0]?.image}
                  title={list[0]?.title}
                  studyHours={list[0]?.studyHours}
                  studyMonths={list[0]?.studyMounthsDuration}
                />
                <div className={stls.oneProgramResultRight}>
                  <div className={stls.descriptionGrids}>
                    {description.map((item, i) => (
                      <div key={i} className={stls.oneBlock}>
                        <p className={stls.heading}>{item.heading}</p>
                        <p className={stls.value}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className={stls.buttonContainer}>
                    <Link href={oneProgramLink} className={stls.link} target='_blank' passHref>
                      Ознакомиться с программой
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3 className={stls.result}>Вам подойдут профессии:</h3>
              <div className={stls.content}>
                {list
                  ?.filter(el => el?.slug)
                  .map((course, idx) => (
                    <CardQuizResult
                      link={`${routes.front.professions}/${course.studyFieldSlug}/${course.slug}`}
                      key={idx}
                      portrait={course.image}
                      title={course.title}
                      studyHours={course.studyHours}
                      studyMonths={course.studyMounthsDuration}
                    />
                  ))}
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default QuizResults
