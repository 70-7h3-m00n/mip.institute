'use client'
import stls from '@/styles/pages/PageHome.module.sass'
import HelpWithChoice from '@/components/sections/Home/HelpWithChoice/HelpWithChoice'
import AdventuresCards from '../sections/Incomers/AdventuresCards/AdventuresCards'
import dynamic from 'next/dynamic'

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), { ssr: false })

const HomeClient = () => {
  return (
    <div className={stls.container}>
      <AdventuresCards showButton />
      <PsyTest fallbackComponent={HelpWithChoice} />
    </div>
  )
}

export default HomeClient
