'use client'
import stls from '@/styles/pages/PageHome.module.sass'
import HelpWithChoice from '@/components/sections/Home/HelpWithChoice/HelpWithChoice'
import AdventuresCards from '../sections/Incomers/AdventuresCards/AdventuresCards'
import SupportHelpInResults from '../sections/Home/SupportHelpInResults/SupportHelpInResults'

import dynamic from 'next/dynamic'

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), { ssr: false })

const HomeClient = () => {
  return (
    <div className={stls.container}>
      <AdventuresCards showButton={true} />
      <PsyTest fallbackComponent={HelpWithChoice} />
      <SupportHelpInResults/>
    </div>
  )
}

export default HomeClient
