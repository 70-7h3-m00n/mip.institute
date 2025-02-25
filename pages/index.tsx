import About from '@/components/sections/About'
import Cta from '@/components/sections/Cta'
import Faq from '@/components/sections/Faq'
import Hero from '@/components/sections/Hero'
import Reviews from '@/components/sections/Reviews'
import WhyBother from '@/components/sections/WhyBother'
import YourDiploma from '@/components/sections/YourDiploma'
import ButtonToTop from '@/components/sections/ButtonToTop'
import Companies from '@/components/sections/Companies'
import DirectionsNew from '@/components/sections/DirectionsNew'
import EntryForm from '@/components/sections/EntryForm'
import PayLater from '@/components/sections/PayLater'
import TopCourses from '@/components/sections/TopCourses'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, routes } from '@/config/index'
import preview from '@/config/preview'
import truncate from '@/helpers/general/truncate'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import { TypePageHomeProps } from '@/types/index'
import allowedNames from 'constants/indexMain'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import dynamic from 'next/dynamic'
import stls from '@/styles/pages/Index.module.sass'
import { sortBasedOnNumericOrder, sortReviewsCreatedAtASC } from '../helpers'

const PopupCta = dynamic(() => import('@/components/popups/PopupCta'), {
  ssr: false
})

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), {
  ssr: false
})

const YouTubeVideo = dynamic(() => import('@/components/sections/YouTubeVideo'), {
  ssr: false
})

const SalaryCounter = dynamic(() => import('@/components/sections/SalaryCounter'), {
  ssr: false
})

const DistanceEducation = dynamic(() => import('@/components/sections/DistanceEducation'), {
  ssr: false
})

const HappyStudents = dynamic(() => import('@/components/sections/HappyStudents'), {
  ssr: false
})

const ProfessionalLeague = dynamic(() => import('@/components/sections/ProfessionalLeague'), {
  ssr: false
})

const EducationProcess = dynamic(() => import('@/components/sections/EducationProcess'), {
  ssr: false
})

const Teachers = dynamic(() => import('@/components/sections/Teachers'), {
  ssr: false
})

const WhatYouWillLearn = dynamic(() => import('@/components/sections/WhatYouWillLearn'), {
  ssr: false
})

const HomePage: NextPage<TypePageHomeProps> = ({
  programs,
  reviews,
  teachers,
  bachelors,
  practicalTrainings
}) => {
  //@ts-ignore
  useHandleContextStaticProps({ programs })
  const [layout, setLayout] = useState<'old' | 'new'>('old')
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const abTestKey = localStorage.getItem('AB') || 'old'
    setLayout(abTestKey as 'old' | 'new')

    if (router.query.utm_source === 'direct_link') {
      setOpen(true)
    }
  }, [router.query])
//@ts-ignore
  const teachersFromMain = teachers?.filter(teacher => allowedNames.includes(teacher.name))

  const reviewsSorted = sortBasedOnNumericOrder({
    //@ts-ignore
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const seoParams = {
    title: `МИП - Московский Институт Психологии`,
    desc: truncate(
      'MIP - Психологический институт. Получите дистанционное образование со скидкой 30% Дипломы ФРДО. Удобный формат обучения! Актуальный материал с упором на практику.',
      120
    ),
    canonical: routes.front.root
  }

  const desc = (
    <>
      У Вас есть вопросы? Оставьте заявку! <br /> И сотрудник приемной комиссии свяжется с вами,
      чтобы рассказать все подробности
    </>
  )

  // Массив компонентов для "old"
  const oldLayoutComponents = [
    <>
      <Hero key='heroOld' />
      <DirectionsNew
        key='directionsNewOld'
        //@ts-ignore
        programs={programs}
        bachelors={bachelors}
        practicalTrainings={practicalTrainings}
      />
      <PsyTest key='psyTestOld' />
      <TopCourses key='topCoursesOld' />
      <ButtonToTop key='buttonToTopOld' />
      <WhyBother key='whyBotherOld' />
      <YouTubeVideo
        key='youtubeVideoOld'
        videoId='2WALhR1ZcszBWNRXQ2kNSB'
        title='Знакомство с институтом'
        isOnMain
      />
      <About key='aboutOld' />
      <EducationProcess key='educationProcessOld' />
      <DistanceEducation
        key='distanceEducationOld'
        paddingTop={0}
        paddingBottom={100}
        paddingTopMobile={0}
        paddingBottomMobile={50}
      />
      <Cta
        key='ctaOld'
        title='Подберите программу'
        desc='Оставьте заявку на консультацию менеджера приёмной комиссии'
        cta='chooseProgram'
      />
      <WhatYouWillLearn key='whatYouWillLearnOld' title='Чему вы научитесь в МИП' onMain />
      <SalaryCounter key='salaryCounterOld' title='Психология' />
      <Teachers
        key='teachersOld'
        onMain
        title='Ведущие преподаватели'
        teachersFromMain={teachersFromMain}
      />
      <YourDiploma key='yourDiplomaOld' onMain ofType='Profession' />
      <ProfessionalLeague key='professionalLeagueOld' />
      <HappyStudents key='happyStudentsOld' />
      <Reviews key='reviewsOld' onMain reviews={reviewsSorted} />
      <PayLater key='payLaterOld' />
      <Companies key='companiesOld' />
      <EntryForm key='entryFormOld' />
      <Faq key='faqOld' />
    </>
  ]

  // Массив компонентов для "new"
  const newLayoutComponents = [
    <>
      <Hero key='hero' />
      <div className={stls.aboutPadding}>
        <About key='about' />
      </div>
      <WhyBother key='whyBother' />
      <YouTubeVideo
        key='youtubeVideo'
        videoId='2WALhR1ZcszBWNRXQ2kNSB'
        title='Знакомство с институтом'
        isOnMain
      />
      <EducationProcess key='educationProcess' />
      <DistanceEducation
        key='distanceEducation'
        paddingTop={0}
        paddingBottom={100}
        paddingTopMobile={0}
        paddingBottomMobile={50}
      />
      <DirectionsNew
        key='directionsNew'
        //@ts-ignore
        programs={programs}
        bachelors={bachelors}
        practicalTrainings={practicalTrainings}
      />
      <PsyTest key='psyTest' />
      <TopCourses key='topCourses' />
      <ButtonToTop key='buttonToTop' />
      <div className={stls.youLearnPadding}>
        <WhatYouWillLearn key='whatYouWillLearn' title='Чему вы научитесь в МИП' onMain />
      </div>
      <SalaryCounter key='salaryCounter' title='Психология' />
      <Teachers
        key='teachers'
        onMain
        title='Ведущие преподаватели'
        teachersFromMain={teachersFromMain}
      />
      <YourDiploma key='yourDiploma' onMain ofType='Profession' />
      <div className={stls.ctaPadding}>
        <Cta
          key='cta'
          title='Подберите программу'
          desc='Оставьте заявку на консультацию менеджера приёмной комиссии'
          cta='chooseProgram'
        />
      </div>
      <ProfessionalLeague key='professionalLeague' />
      <HappyStudents key='happyStudents' />
      <Reviews key='reviews' onMain reviews={reviewsSorted} />
      <PayLater key='payLater' />
      <Companies key='companies' />
      <EntryForm key='entryForm' />
      <Faq key='faq' />
    </>
  ]

  const hasQueryParams = Object.keys(router.query).length > 0;

  // TODO: удалить временные стили после отката основной страницы к обычному состоянию
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={hasQueryParams || preview}
        noindex={hasQueryParams || preview}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <SeoOrganizationJsonLd />

      <Popup open={open} modal nested>
        {
          // @ts-ignore
          close => (
            <PopupCta
              title='Задать вопрос'
              desc={desc}
              cta='Задать вопрос'
              question
              close={close}
              blockForAmo='Переход по ссылке'
            />
          )
        }
      </Popup>

      <div className={stls.container}>
        {(layout === 'old' ? oldLayoutComponents : newLayoutComponents).map(component => component)}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.home })

export default HomePage
