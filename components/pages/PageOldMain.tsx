// удалить старую главную страницу
'use client'
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
import allowedNames from 'constants/indexMain'
import React, { ReactNode, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import stls from '@/styles/pages/Index.module.sass'
import PsyTestMain from '@/components/sections/PsyTestMain'
import { sortBasedOnNumericOrder, sortReviewsCreatedAtASC } from '@/helpers/index'
import { useSearchParams } from 'next/navigation'

const PsyTest = dynamic(() => import('@/components/sections/Home/PsyTest/PsyTest'), {
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

const PageOldMain = ({
  all
}) => {
  
  const {programs,
    reviews,
    teachers,
    bachelor,
    practicalTrainings} = all
  // useHandleContextStaticProps({ programs })
  const searchParams = useSearchParams() // Замена useRouter

  // Проверяем наличие query-параметров
  const hasQueryParams = searchParams && searchParams?.size > 0


  const teachersFromMain = teachers
    ? teachers.filter(teacher => teacher && allowedNames.includes(teacher.name || ''))
    : []

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: reviews ? sortReviewsCreatedAtASC({ reviews }) : []
  })

  return (
    <>
      <div className={stls.container}>
        <Hero key='heroOld' />
        <DirectionsNew
          key='directionsNewOld'
          programs={programs}
          bachelors={bachelor}
          practicalTrainings={practicalTrainings}
        />
        <PsyTest key='psyTestOld' fallbackComponent={PsyTestMain} />
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
      </div>
    </>
  )
}

export default PageOldMain