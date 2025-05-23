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
import PracticalOrientatedProgram from '../sections/RedesignedProgram/PracticalOrientatedProgram/PracticalOrientatedProgram'
import Portfolio from '../sections/RedesignedProgram/Portfolio.tsx/Portfolio'
import ShortCourseDescription from '@/components/sections/RedesignedProgram/ShortCourseDescription/ShortCourseDescription'
import PricingSection from '../sections/RedesignedProgram/PricingSection/PricingSection'
import ProgramHero from '@/components/sections/RedesignedProgram/ProgramHero/ProgramHero'
import FutureDiploms from '@/components/sections/RedesignedProgram/FutureDiploms/FutureDiploms'

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
      <ShortCourseDescription />
      <PracticalOrientatedProgram />
      <HomeForm />
      <StudyProcess />
      <Bonuses />
      <CourseWorkTopics />
      <TeachersSlider />
      <Portfolio />
      <QualificationBlock variant={'static'} bgcolor='#855EDF' />
      <QualificationBlock variant={'vciom'}  bgcolor='#FF8F52' />
      <OurPartners onePartner={partners} noPaddings />
      <PricingSection />
      <Reviews />
      <HomeFAQ purple />
    </div>
  )
}

export default PagePsyCons
