import OurOffice from './OurOffice/OurOffice'
import OurGraduates from './OurGraduates/OurGraduates'
import QuoteWithTitleSelector from './QuoteWithTitleSelector'
import SliderWithImg from './SliderWithImg/SliderWithImg'
import Recruitment from '@/components/sections/Vacancies/Recruitment/Recruitment'
import VacanciesVideo from '@/components/sections/Vacancies/VacanciesVideo/VacanciesVideo'
import dynamic from 'next/dynamic'

const BlockGladSeeTeam = dynamic(
  () => import('@/components/vacancies/BlockGladSeeTeam/BlockGladSeeTeam'),
  {
    ssr: false
  }
)

export default function VacanciesDynamicZones({ props }) {
  switch (props.__component) {
    case 'vacancies.repeatable-quote-with-title':
      return <QuoteWithTitleSelector props={props} />
    case 'vacancies.slider-with-img':
      return <SliderWithImg props={props} />
    case 'shared.rich-text':
      return <OurGraduates props={props} />
    case 'vacancies.slider-with-image':
      return <OurOffice props={props} />
    case 'vacancies.recruitment':
      return <Recruitment props={props} />
    case 'shared.text-with-icon':
      return <VacanciesVideo props={props} />
    case 'shared.rich-text-with-img':
      return <BlockGladSeeTeam props={props} />
    default:
      break
  }
}
