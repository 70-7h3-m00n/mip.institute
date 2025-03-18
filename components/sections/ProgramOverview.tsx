import stls from '@/styles/components/sections/ProgramOverview.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import Wrapper from '@/ui/Wrapper'
import CloudHead from '../imgs/programs/courses/CloudHead'
import IconBackOfOverview from '../icons/IconBackOfOverview'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'
import parseProgramContent from '@/helpers/parseProgramContent'
import loadIcon from '@/helpers/general/loadIcon'

const ProgramOverview = ({ toggleOverview, showDescription }) => {
  const { program } = useContext(ContextStaticProps)

  const programOverview = program?.programOverview
  const title = program?.programOverviewTitle
  const { titles, topics } = programOverview
    ? parseProgramContent(programOverview)
    : { titles: [], topics: [] }

  const customRenderers = {
    p: ({ children }: { children: React.ReactNode }) => <p className={stls.p}>{children}</p>
  }

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.showDescription]: showDescription
      })}>
      <Wrapper>
        <h2>Описание программы</h2>
        <div className={stls.flexContainer}>
          <div className={stls.left}>
            <p>{title}</p>
            <div className={stls.img}>
              <CloudHead />
            </div>
            <div className={stls.icon}>
              <IconBackOfOverview />
            </div>
          </div>
          <div className={stls.right}>
            {topics.length > 0 &&
              topics.map((topicGroup, idx) => (
                <div key={`${topicGroup}-${idx}`} className={stls.topicGroup}>
                  <h3>{titles[idx]}</h3>
                  {topicGroup?.map((topic, topicIdx) => (
                    <div key={topic + topicIdx} className={stls.item}>
                      <div className={stls.itemIcon}>
                        {loadIcon('IconCircleCheck', { violetItems: true })}
                      </div>
                      <ReactMarkdown components={customRenderers}>{topic}</ReactMarkdown>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <div className={stls.switchSection} onClick={toggleOverview}>
          <p>Зачем осваивать профессию психолога?</p>
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramOverview
