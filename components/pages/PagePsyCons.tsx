import stls from '@/styles/pages/PagePsyCons.module.sass'
import StudyProcess from '../sections/Incomers/StudyProcess/StudyProcess'
import HomeForm from '../sections/Home/HomeForm/HomeForm'
import ProgramForRequest from '../sections/Incomers/ProgramForRequest/ProgramForRequest'
import HomeFAQ from '../sections/Home/HomeFAQ/HomeFAQ'
import OurPartners from '@/components/partners/OurPartners/OurPartners'
import ProgramDescription from '@/components/sections/RedesignedProgram/ProgramDescription/ProgramDescription'
import Bonuses from '@/components/sections/RedesignedProgram/Bonuses/Bonuses'
import TeachersSlider from '../sections/RedesignedProgram/Teachers/TeachersSlider'
import InsideProgram from '../sections/RedesignedProgram/InsideProgram/InsideProgram'
import CourseWorkTopics from '../sections/RedesignedProgram/CourseWorkTopics/CourseWorkTopics'
import SectionNavbar from '../sections/RedesignedProgram/SectionNavbar/SectionNavbar'
import Reviews from '../sections/RedesignedProgram/Reviews/Reviews'
import ProgramResult from '@/components/sections/RedesignedProgram/ProgramResult/ProgramResult'
import QualificationBlock from '@/components/sections/RedesignedProgram/QualificationBlock/QualificationBlock'
import Portfolio from '../sections/RedesignedProgram/Portfolio.tsx/Portfolio'
import ShortCourseDescription from '@/components/sections/RedesignedProgram/ShortCourseDescription/ShortCourseDescription'
import PricingSection from '../sections/RedesignedProgram/PricingSection/PricingSection'
import ProgramHero from '@/components/sections/RedesignedProgram/ProgramHero/ProgramHero'
import FutureDiploms from '@/components/sections/RedesignedProgram/FutureDiploms/FutureDiploms'
import SalaryCalculatorNew from '../sections/RedesignedProgram/SalaryCalculator/SalaryCalculator'
import dynamic from 'next/dynamic'
import CoursePreviewVideo from '../sections/RedesignedProgram/CoursePreviewVideo/CoursePreviewVideo'
import { studyProcessPsyConsData } from '@/components/sections/Incomers/StudyProcess/constants'

const PracticalOrientatedProgram = dynamic(
  () =>
    import(
      '@/components/sections/RedesignedProgram/PracticalOrientatedProgram/PracticalOrientatedProgram'
    ),
  { ssr: false }
)

interface Props {}

const partners = [
  {
    id: 2,
    documentId: 'yskep3l1zlwp7634epzr6axa',
    title: 'Общероссийской профессиональной психотерапевтической лиги (ОППЛ)',
    subtitle:
      'Общероссийская профессиональная психотерапевтическая лига объединяет специалистов в области психотерапии, психологии и консультирования. Лига создает условия для творческого сотрудничества и взаимообогащающего развития представителей различных школ и направлений.\n' +
      'Наши выпускники могут получить членство в Лиге на льготных условиях.',
    image: {
      id: 296,
      documentId: 'u1n6r647yoh6kj81k5h527u5',
      url: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739876438/6330601_f7f2940a13.jpg',
      width: 210,
      height: 250
    },
    type: 'partner',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    publishedAt: '2024-01-02T00:00:00.000Z'
  },
  {
    id: 4,
    documentId: 'hw6v4xav8m8l4v99uooakdvm',
    title: 'Ассоциация профессиональных психологов и психотерапевтов',
    subtitle:
      'Ассоциация  занимается психологическим просвещением общества, развитием прикладной психологии и повышением качества психологической помощи. Членство в Ассоциации открывает возможности для обмена опытом, расширения профессиональных контактов и признания в сообществе.\n' +
      'Сотрудничество позволяет нашим выпускникам членство на льготных условиях.',
    image: {
      id: 292,
      documentId: 'muk0fmi8n1rm6w6e8h39fsmn',
      url: 'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739863433/20943593_63cc80d56a.jpg',
      width: 210,
      height: 250
    },
    type: 'partner',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    publishedAt: '2024-01-02T00:00:00.000Z'
  }
]
const questions = [
  {
    question: 'Можно ли оплатить обучение в рассрочку?',
    answer:
      'Да. У вас есть возможность воспользоваться программой рассрочки, предложенной нашим банком-партнером. Стоимость при этом не меняется.'
  },
  {
    question: 'Какие документы я получу после профессиональной переподготовке?',
    answer:
      'После прохождения курса наши выпускники получают диплом о профессиональной переподготовке или удостоверение установленного образца о повышении квалификации (зависит от выбранной программы обучения). Документ регистрируется в ФРДО и действует на территории РФ и за ее пределами. Дополнительно вы получите приложение Supplement международного образца, разработанное совместно с Европейской комиссией, Советом Европы и ЮНЕСКО, которое обеспечит признание полученного образования европейскими странами.'
  },
  {
    question: 'Необходимо ли выполнять домашние задания?',
    answer:
      'Выполнение домашних заданий является важной частью обучения, позволяющей закрепить теоретические знания и развить практические навыки. Все наши курсы имеют удобный формат обучения и проходят на современных дистанционных образовательных платформах, поэтому задания не занимают много времени. Проверяют работы опытные психологи, оставляя обратную связь, исправляя ошибки и давая ценные советы ученикам.'
  },
  {
    question: 'Что произойдет, если я пропущу занятия?',
    answer:
      'В случае пропуска вам будет доступна запись занятия в личном кабинете. Вы сможете самостоятельно выбрать удобный график, чтобы учиться в комфортном темпе.'
  },
  {
    question: 'Есть ли условия для поступления на базе аттестата без высшего образования?',
    answer:
      'Поступить на программу обучения вы можете без среднего или высшего профессионального образования, чтобы получить профессию с нуля. Вам понадобится только аттестат об окончании школы. После обучения будет выдан диплом установленного образца институтом в формате А4 для личного портфолио психолога. Если вы получите среднее или высшее образование, сможете пройти переаттестацию у нас. В этом случае вы получите диплом о профессиональной переподготовке установленного образца.'
  }
]
const PagePsyCons: React.FC<Props> = ({}) => {
  return (
    <div className={stls.container}>
      <ProgramHero />
      <ProgramDescription />
      <SectionNavbar />
      <ProgramResult />
      <FutureDiploms />
      <ProgramForRequest />
      <InsideProgram />
      <CoursePreviewVideo />
      <ShortCourseDescription />
      <PracticalOrientatedProgram />
      <HomeForm />
      <StudyProcess studyProcess={studyProcessPsyConsData} />
      <Bonuses />
      <CourseWorkTopics />
      <TeachersSlider />
      <Portfolio />
      <QualificationBlock variant={'static'} bgcolor='#855EDF' />
      <SalaryCalculatorNew />
      <QualificationBlock variant={'vciom'} bgcolor='#FF8F52' />
      <OurPartners onePartner={partners} noPaddings />
      <PricingSection />
      <Reviews />
      <HomeFAQ purple listQuestions={questions} />
    </div>
  )
}

export default PagePsyCons
