'use client'
import React from 'react'
import stls from '@/styles/pages/PageIncomers.module.sass'
import Incomers from '@/components/sections/Incomers/Incomers/Incomers'
import { Incomers as Type } from '@/types/page/incomers/incomersTypes'
import AdventuresCards from '@/components/sections/Incomers/AdventuresCards/AdventuresCards'
import MeetInstitute from '@/components/sections/Incomers/MeetInstitute/MeetInstitute'
import StudyProcess from '@/components/sections/Incomers/StudyProcess/StudyProcess'
import ProgramSelectionTop from '@/components/sections/Incomers/ProgramSelectionTop/ProgramSelectionTop'
import PaymentTraining from '@/components/sections/Incomers/PaymentTraining/PaymentTraining'
import OurPossibilities from '@/components/sections/Incomers/OurPossibilities/OurPossibilities'
import HappyStudents from '@/components/sections/HappyStudents'
import ProgramForRequest from '@/components/sections/Incomers/ProgramForRequest/ProgramForRequest'

const IncomersClient = ({ incomers }: { incomers: Type }) => {
  return (
    <div className={stls.container}>
      <Incomers title={incomers.title} data={incomers.incomersInfo} />
      <AdventuresCards data={incomers.AdventureCards}/>
      <MeetInstitute data={incomers.MeetInstitute} />
      <HappyStudents isMainPage={false} />
      <StudyProcess />
      <ProgramSelectionTop
        bottomCards={incomers.programSelectionsBottom}
        topCards={incomers.programSelectionsTop}
      />
      <ProgramForRequest data={incomers.programForRequest} />
      <OurPossibilities data={incomers.ourPossibilities} />
      {/*<CareerCenter data={incomers.careerCenter} />*/}
      <PaymentTraining />
      <ProgramForRequest data={incomers.programForRequest} />
    </div>
  )
}

export default IncomersClient
