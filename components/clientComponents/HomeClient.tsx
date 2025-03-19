'use client'
import stls from '@/styles/pages/PageHome.module.sass'
import AdventuresCards from '../sections/Incomers/AdventuresCards/AdventuresCards'

const HomeClient = () => {
  return (
    <div className={stls.container}>
      <AdventuresCards showButton={true} />
    </div>
  )
}

export default HomeClient
