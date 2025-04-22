import stls from '@/styles/components/sections/YourResume.module.sass'
import Wrapper from '@/ui/Wrapper'
import cn from 'classnames'
import ImgResume1 from '@/components/imgs/resume/ImgResume1'
import { toNumberWithSpaces } from '@/helpers/index'
import ResumeDiplomas from '@/components/imgs/general/ResumeDiplomas'
import Clip from '@/components/imgs/general/Clip'
import IconGratefullPortal from '@/components/icons/IconGratefullPortal'
import ReactMarkdown from 'react-markdown'
import { useProgramsSafe } from '@/hooks/general/useSafeContext'

const YourResume = ({ resumeRef = null }) => {

  const {
        state: { program }
      } = useProgramsSafe()
  const resumeSkills = program?.resumeSkills || ''
  const customRenderers = {
    ul: ({ children }) => <ul className={stls.list}>{children}</ul>,
    li: ({ children }) => (
      <li className={stls.item}>
        <p className={stls.itemText}>{children}</p>
      </li>
    )
  }

  return (
    <section ref={resumeRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваше портфолио после обучения</h2>
        <div className={stls.content}>
          <div className={stls.upperRound}>
            <p>Ваше портфолио</p>
          </div>
          <div className={stls.upperRightRound}></div>
          <div className={stls.bg}></div>
          <div className={stls.line}></div>
          <div className={stls.midPortal}>
            <IconGratefullPortal small isViolet />
          </div>
          <div className={stls.midPortalTwo}>
            <IconGratefullPortal small isViolet />
          </div>
          <div className={stls.smallPortal}>
            <IconGratefullPortal xsmall isViolet />
          </div>
          <div className={stls.smallPortalTwo}>
            <IconGratefullPortal xsmall isViolet />
          </div>
          <div className={stls.smallPortalThree}>
            <IconGratefullPortal xsmall isViolet />
          </div>
          <div className={stls.clip}>
            <Clip />
          </div>
          <div className={stls.top}>
            <div className={stls.img}>
              <ImgResume1 />
            </div>
            <div className={stls.headings}>
              <div className={cn(stls.heading, stls.headingLeft)}>
                <p className={stls.p}>Профессия:</p>
                <p className={stls.h3}>{program?.resumeTitle}</p>
              </div>
              <div className={stls.heading}>
                <p className={stls.p}>Заработок от:</p>
                <p className={stls.salary}>
                  {toNumberWithSpaces(program?.entrySalary)}&nbsp;р
                </p>
              </div>
            </div>
          </div>
          <div className={stls.bottomContent}>
            <div className={stls.left}>
              <p className={stls.skills}>Профессиональные навыки:</p>
              <ul className={stls.list}>
                <ReactMarkdown components={customRenderers}>
                  {resumeSkills}
                </ReactMarkdown>
              </ul>
            </div>
            <div className={stls.right}>
              <p>
                Получила профессию “{program?.title}” в Московском Институте
                Психологии
              </p>
              <div className={stls.diploma}>
                <ResumeDiplomas />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourResume
