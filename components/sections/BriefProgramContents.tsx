import Wrapper from '@/ui/Wrapper'
import ProgramModules from '@/components/program/ProgramModules'
import ProgramModulesQty from '@/components/program/ProgramModulesQty'
import stls from '@/styles/components/sections/BriefProgramContents.module.sass'
import classNames from 'classnames'
import { MutableRefObject } from 'react'
import BachelorProgramModules from '../program/BachelorProgramModules'
import splitIntoSemesters from '@/helpers/splitIntoSemesters'

type Props = {
  planRef: MutableRefObject<any>
  program?: any
  title?: string
  coloredBackground?: boolean
}

const BriefProgramContents = ({
  planRef,
  program = null,
  title,
  coloredBackground = false
}: Props) => {
  const { semesters } = splitIntoSemesters(program)

  return (
    <section
      ref={planRef}
      className={classNames({
        [stls.container]: true,
        [stls.coloredBackground]: coloredBackground
      })}>
      <Wrapper>
        <div style={{ height: '100%' }} className={stls.innerContainer}>
          <div className={stls.top}>
            <div className={stls.heading}>
              <h2 className={stls.title}>
                {title ? title : 'Краткая программа курса'}
              </h2>
              {!program && (
                <>
                  <p className={stls.subtitle}>В каждом модуле:</p>
                  <ul className={stls.points}>
                    <li>Практические задания для закрепления материала;</li>
                    <li>Постоянная поддержка куратора;</li>
                    <li>Актуальные вебинары в режиме реального времени;</li>
                    <li>Бесплатный доступ к библиотеке.</li>
                  </ul>
                </>
              )}
            </div>
            <div className={stls.qty}>
              <ProgramModulesQty quantity={semesters?.length} />
            </div>
          </div>

          {program ? (
            <BachelorProgramModules program={program} />
          ) : (
            <ProgramModules />
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default BriefProgramContents
