import stls from '@/styles/components/sections/YourResumeNew.module.sass'
import Wrapper from '@/ui/Wrapper'
import { RefObject, useState } from 'react'
import { toNumberWithSpaces } from '@/helpers/index'
import classNames from 'classnames'
import Image from 'next/image'
import resume from '@/public/assets/imgs/resume/resumeNew.png'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
interface YourResumeNewProps {
  resumeRef?: RefObject<HTMLDivElement>
  program: any
}
const YourResumeNew = ({ resumeRef, program }: YourResumeNewProps) => {
  const [showFullText, setShowFullText] = useState(false)
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(1)

  const cutHandler = () => {
    setShowFullText(!showFullText)
    if (!showFullText) {
      setVisibleSkillsCount(program?.portfolio?.resumeSkills.split('\n').length)
    } else {
      setVisibleSkillsCount(1)
    }
  }

  const resumeSkills =
    program?.portfolio?.resumeSkills
      .split('\n')
      .map(skill => skill.replace(/^- /, '').trim())
      .filter(skill => skill.length > 0) || []
  const displayedSkills = showFullText ? resumeSkills : resumeSkills.slice(0, visibleSkillsCount)

  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section ref={resumeRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваше портфолио после обучения</h2>
        <div className={stls.content}>
          <div
            className={classNames({
              [stls.block]: true,
              [stls.left]: true
            })}>
            <div className={stls.img}>
              <Image
                src={program?.portfolio?.picture?.url || resume}
                width={program?.portfolio?.picture?.width || null}
                height={program?.portfolio?.picture?.height || null}
                alt='Портфолио'
                className={stls.resumeImg}
              />
            </div>
            <div className={stls.infoLeft}>
              <div className={stls.line}>
                <p className={stls.infoText}>{program?.portfolio?.name || 'Дарья, 30 лет'}</p>
              </div>
              <div className={stls.line}>
                <p className={stls.subTitle}>Профессия:</p>
                <p
                  className={classNames({
                    [stls.infoText]: true,
                    [stls.colored]: true
                  })}>
                  {program?.portfolio?.profession}
                </p>
              </div>
              <div className={stls.line}>
                <p className={stls.subTitle}>Специальность:</p>
                <p className={stls.infoText}>{program?.portfolio?.specialization}</p>
              </div>
              <div className={stls.line}>
                <p className={stls.subTitle}>Заработок:</p>
                <p className={stls.infoText}>
                  от&nbsp;{toNumberWithSpaces(program?.portfolio?.salary)}
                  &nbsp;руб.
                </p>
              </div>
            </div>
          </div>
          <div
            className={classNames({
              [stls.block]: true,
              [stls.right]: true
            })}>
            <div className={stls.infoRight}>
              <div className={stls.titleBlock}>
                <div className={stls.icon}>1</div>
                <p className={stls.subTitleRight}>Квалификация:</p>
              </div>
              <p className={stls.text}>{program?.portfolio?.qualification}</p>
            </div>
            <span className={stls.separator}></span>
            <div className={stls.infoRight}>
              <div className={stls.titleBlock}>
                <div className={stls.icon}>2</div>
                <p className={stls.subTitleRight}>Диплом:</p>
              </div>
              <Image
                src={program?.diploma2?.url}
                width={isMobileAndTabletLayout ? 311 : 360}
                height={isMobileAndTabletLayout ? 230 : 270}
                className={stls.diploma}
                alt='Диплом'
              />
            </div>
            <span className={stls.separator}></span>
            <div className={stls.infoRight}>
              <div className={stls.titleBlock}>
                <div className={stls.icon}>3</div>
                <p className={stls.subTitleRight}>Ключевые профессиональные навыки:</p>
              </div>
              <ul className={stls.list}>
                {displayedSkills.map((skill, index) => (
                  <li key={index} className={stls.item}>
                    <p className={stls.itemText}>{skill}</p>
                  </li>
                ))}
              </ul>
              <button onClick={cutHandler} className={stls.moreText}>
                {showFullText ? 'Скрыть список' : 'Читать полный список'}
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourResumeNew
