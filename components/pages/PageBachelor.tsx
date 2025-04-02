import BriefProgramContents from '@/components/sections/BriefProgramContents'
import Faq from '@/components/sections/Faq'
import PageNavigation from '@/components/sections/PageNavigation'
import Teachers from '@/components/sections/Teachers'
import YourDiploma from '@/components/sections/YourDiploma'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { useHandleContextStaticProps } from '@/hooks/index'
import { useRef } from 'react'
import NoteBlock from '@/ui/NoteBlock'
import BachelorHeroProgram from '@/components/sections/higherEducation/BachelorHeroProgram/BachelorHeroProgram'
import ForWhomHE from '@/components/sections/higherEducation/ForWhomHE/ForWhomHE'
import Wrapper from '@/ui/Wrapper'
import BachelorStudyCost from '../sections/higherEducation/BachelorStudyCost/BachelorStudyCost'
import DistanceEducation from '../sections/DistanceEducation'
import EducationProcess from '../sections/EducationProcess'
import EntryForm from '../sections/EntryForm'
import FourSteps from '../sections/higherEducation/FourSteps/FourSteps'
import LinkedPrograms from '../sections/LinkedPrograms'
import SalaryCounter from '../sections/SalaryCounter'
import { SeoPageBachelor } from '../seo'

const PageBachelor = ({ bachelor }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const diplomaRef = useRef(null)
  const planRef = useRef(null)
  const teachersRef = useRef(null)
  const costRef = useRef(null)
  const stepsForEnterRef = useRef(null)
  useHandleContextStaticProps({ bachelor })

  const sections = [
    {
      id: 'stepsForEnter',
      label: 'Как поступить',
      ref: stepsForEnterRef,
      condition: true
    },
    { id: 'plan', label: 'Учебный план', ref: planRef, condition: true },
    {
      id: 'teachers',
      label: 'Преподаватели',
      ref: teachersRef,
      condition: true
    },
    { id: 'diploma', label: 'Диплом', ref: diplomaRef, condition: true },
    { id: 'cost', label: 'Стоимость', ref: costRef, condition: true }
  ]

  return (
    <>
      <SeoPageBachelor program={bachelor} />
      <BachelorHeroProgram />
      <PageNavigation sections={sections} />
      <ForWhomHE />
      <FourSteps stepsForEnterRef={stepsForEnterRef} />
      <EducationProcess />
      <BriefProgramContents
        coloredBackground
        planRef={planRef}
        program={bachelor?.shortContents}
        title='Программа курса'
      />
      <LinkedPrograms
        specializations={bachelor?.additional_specializations}
        title={
          isMobileAndTabletLayout ? (
            <>
              <p
                style={{
                  color: '#6F01C6',
                  fontWeight: 500,
                  fontSize: '30px',
                  marginBottom: '10px'
                }}>
                Ваша дополнительная специализация
              </p>
              <p
                style={{
                  marginBottom: '0',
                  fontSize: '15px',
                  lineHeight: '130%'
                }}>
                Параллельная программа профессиональной переподготовки с присвоением квалификации
              </p>
            </>
          ) : (
            <h2 style={{ fontSize: '35px', fontWeight: 500 }}>
              <span style={{ color: '#6F01C6' }}>Ваша дополнительная специализация</span>{' '}
              (параллельная программа профессиональной переподготовки с присвоением квалификации)
            </h2>
          )
        }
      />
      <Wrapper>
        <NoteBlock
          marginTop={isMobileAndTabletLayout ? 30 : 0}
          marginBottom={isMobileAndTabletLayout ? 35 : 90}
          title='Вопрос по программе'
          description='Остались вопросы по программе или дополнительной специализации? Напишите нам в форме обратной связи.'
        />
      </Wrapper>
      <Teachers
        title='Преподаватели программы'
        onMain
        teachersList={bachelor?.teachers}
        teachersRef={teachersRef}
      />
      <YourDiploma isBachelor diplomaRef={diplomaRef} />
      <SalaryCounter title={bachelor?.title} />
      <DistanceEducation
        title='Наши преимущества'
        list={bachelor?.benefits}
        paddingBottom={90}
        paddingBottomMobile={60}
      />
      <BachelorStudyCost costRef={costRef} />
      <EntryForm withPromo={false} onBachelor />
      <Faq />
    </>
  )
}

export default PageBachelor
