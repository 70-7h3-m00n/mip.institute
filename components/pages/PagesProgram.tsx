import BriefProgramContents from '@/components/sections/BriefProgramContents'
import Cta from '@/components/sections/Cta'
import Faq from '@/components/sections/Faq'
import ForWhom from '@/components/sections/ForWhom'
import FullProgram from '@/components/sections/FullProgram'
import HeroProgram from '@/components/sections/HeroProgram'
import PageNavigation from '@/components/sections/PageNavigation'
import Reviews from '@/components/sections/Reviews'
import StudyCost from '@/components/sections/StudyCost'
import Teachers from '@/components/sections/Teachers'
import WhatYouWillLearn from '@/components/sections/WhatYouWillLearn'
import WhyBother from '@/components/sections/WhyBother'
import YourDiploma from '@/components/sections/YourDiploma'
import { discount } from '@/data/price'
import { sortBasedOnNumericOrder, sortReviewsCreatedAtASC } from '@/helpers/index'
import { TypeLibProgram, TypeLibReviews } from '@/types/index'
import { useRef, useState } from 'react'
import ButtonToTop from '../sections/ButtonToTop'
import DistanceEducation from '../sections/DistanceEducation'
import EducationProcess from '../sections/EducationProcess'
import EntryForm from '../sections/EntryForm'
import ProfessionalLeague from '../sections/ProfessionalLeague'
import ProgramOverview from '../sections/ProgramOverview'
import RequestsCard from '../sections/RequestsCard'
import SalaryCounter from '../sections/SalaryCounter'
import YourResumeNew from '../sections/YourResumeNew'
import PricingSection from '../sections/OldProgram/PricingSection/PricingSection'

type PagesProgramType = {
  ofType: string | undefined
  reviews: TypeLibReviews
  programOverview: string
  slug: string
  program: TypeLibProgram
}

const PagesProgram = ({
  ofType = undefined,
  reviews,
  programOverview,
  slug,
  program
}: PagesProgramType) => {
  const diplomaRef = useRef(null)
  const planRef = useRef(null)
  const teachersRef = useRef(null)
  const resumeRef = useRef<HTMLDivElement | null>(null)
  const costRef = useRef(null)
  const reviewsRef = useRef(null)
  const faqRef = useRef<HTMLDivElement | null>(null)
  const [showDescription, setShowDescription] = useState(true)
  const isPsyKonsultirovanie = slug === 'psihologicheskoe-konsultirovanie'
  if (!program) {
    return <div>Программа не найдена</div> // ✅ Защита от null
  }
  const sections = [
    { id: 'diploma', label: 'Диплом', ref: diplomaRef, condition: true },
    { id: 'plan', label: 'Учебный план', ref: planRef, condition: true },
    {
      id: 'teachers',
      label: 'Преподаватели',
      ref: teachersRef,
      condition: true
    },
    {
      id: 'resume',
      label: 'Навыки',
      ref: resumeRef,
      condition: !!program.portfolio
    },
    {
      id: 'cost',
      label: 'Стоимость',
      ref: costRef,
      condition: true
    },
    { id: 'reviews', label: 'Отзывы', ref: reviewsRef, condition: true },
    { id: 'faq', label: 'FAQ', ref: faqRef, condition: true }
  ]

  const toggleOverview = () => {
    setShowDescription(!showDescription)
  }

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const checkSlug = ['pedagog-psiholog', 'nejropsiholog']
  return (
    <>
      <ButtonToTop />
      <HeroProgram />
      <PageNavigation sections={sections} />
      <WhyBother />
      {/* {programOverview && (
        <ProgramOverview showDescription={showDescription} toggleOverview={toggleOverview} />
      )} */}

      {checkSlug.includes(slug) ? (
        <>
          <WhatYouWillLearn title={'Чему вы научитесь'} />
          <ForWhom />
        </>
      ) : (
        <>
          <ForWhom />
          <WhatYouWillLearn title={'Чему вы научитесь'} />
        </>
      )}
      <EducationProcess />
      <DistanceEducation paddingBottomMobile={35} paddingBottom={90} />
      <YourDiploma diplomaRef={diplomaRef} ofType={ofType} programSlug={program.slug} />
      {ofType === 'Profession' && <ProfessionalLeague />}
      <BriefProgramContents planRef={planRef} />
      <FullProgram />
      <RequestsCard />

      <Teachers teachersRef={teachersRef} title={'Преподаватели программы'} />

      {program.portfolio && <YourResumeNew program={program} resumeRef={resumeRef} />}
      {ofType === 'Profession' && <SalaryCounter title='Психология' />}

      {ofType === 'Profession' && (
        <Cta
          title={
            isPsyKonsultirovanie
              ? 'Забронируйте лучшие условия до старта обучения'
              : 'Начните обучаться со скидкой'
          }
          desc={
            isPsyKonsultirovanie
              ? 'Оставьте заявку сейчас и забронируйте лучшее условия при зачислении'
              : `Забронируйте программу по спеццене — со скидкой ${discount.substring(1)}`
          }
          cta='reserve'
        />
      )}

      {program.bonuses && program.tariffs ? (
        <PricingSection tariffs={program.tariffs} bonuses={program.bonuses} costRef={costRef} />
      ) : (
        <StudyCost costRef={costRef} ofType={ofType} />
      )}

      <Reviews reviewsRef={reviewsRef} reviews={reviewsSorted} />
      <EntryForm />
      <Faq faqRef={faqRef} />
    </>
  )
}

export default PagesProgram
