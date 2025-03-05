import Wrapper from '@/ui/Wrapper'
import ProgramCost from '@/components/program/ProgramCost'
import ProgramDiscount from '@/components/program/ProgramDiscount'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/StudyCost.module.sass'
import { useContext } from 'react'
import MoneySaving from '../program/MoneySaving'
import ProgramStudyDuration from '../program/ProgramStudyDuration'
import points from 'constants/studyCost'
import ProgramAdmissionUntil from '../program/ProgramAdmissionUntil'
import loadIcon from '@/helpers/general/loadIcon'
import dynamic from 'next/dynamic'

const FormAlpha = dynamic(() => import('@/components/forms/FormAlpha'), {
  ssr: false
})

const StudyCost = ({ costRef, ofType }) => {
  const { program } = useContext(ContextStaticProps)

  const title = program?.title || ''
  const studyForm = program?.studyForm || ''
  const studyFormLabel = program?.studyFormlabel || ''
  const studyMounthsDuration = program?.studyMounthsDuration || 0
  const isPsyKonsultirovanie =
    program?.slug === 'psihologicheskoe-konsultirovanie'

  const info = [
    { key: 'Зачисление:', val: ProgramAdmissionUntil() },
    {
      key: 'Форма обучения:',
      val: studyForm === 'Online' ? 'Дистанционно' : studyFormLabel
    },
    {
      key: 'Срок обучения:',
      val: <ProgramStudyDuration studyMounthsDuration={studyMounthsDuration} />
    },
    {
      key: 'Рассрочка:',
      val: 'От “Тинькофф банка”'
    }
  ]

  return (
    <section ref={costRef} className={stls.container} 
    //@ts-ignore
    style={{marginTop: ofType !== 'Profession' ? '-33px': null}}>
      <Wrapper>
        <div className={stls.title}>
          <span className={stls.laptopdesktop}>Запишитесь на программу</span>
        </div>
        <div className={stls.upperContainer}>

          <p className={stls.subtitle}>
            {title}
            </p>

          {!isPsyKonsultirovanie && (
            <div className={stls.discount}>
              <ProgramDiscount small violet />
            </div>
          )}
        </div>

        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.heading}>
              <div className={stls.discountMobile}></div>
            </div>
            <div className={stls.cost}>
              <ProgramCost withPerMonth />
            </div>
          </div>
          <div className={stls.center}>
            <div className={stls.form}>
              <div className={stls.bgForm}>
                <p>Записаться на курс или получить бесплатную консультацию</p>
                <FormAlpha inProfessions cta={'Записаться'} />
              </div>
            </div>
          </div>
          <div className={stls.right}>
            <p className={stls.titleRight}>Что входит в стоимость?</p>
            <ul className={stls.points}>
              {points.map((point, idx) => (
                <li key={point + idx} className={stls.point}>
                  <span className={stls.pointicon}>
                    {loadIcon('IconCircleCheck', { violetRound: true })}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <MoneySaving />
      </Wrapper>
    </section>
  )
}

export default StudyCost
