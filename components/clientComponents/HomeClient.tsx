'use client'
import stls from '@/styles/pages/PageHome.module.sass'
import HelpWithChoice from '@/components/sections/Home/HelpWithChoice/HelpWithChoice'
import AdventuresCards from '../sections/Incomers/AdventuresCards/AdventuresCards'
import SupportHelpInResults from '../sections/Home/SupportHelpInResults/SupportHelpInResults'

import dynamic from 'next/dynamic'
import StudyProcess, {
  StudyProcessData
} from '@/components/sections/Incomers/StudyProcess/StudyProcess'
import slide1 from '@/public/assets/imgs/home/studyProcess/slide1.png'
import slide2 from '@/public/assets/imgs/home/studyProcess/slide2.png'
import slide3 from '@/public/assets/imgs/home/studyProcess/slide3.png'
import slide4 from '@/public/assets/imgs/home/studyProcess/slide4.png'
import { homePositionsByBreakpoint } from '@/components/sections/Incomers/StudyProcess/constants'

const PsyTest = dynamic(() => import('@/components/sections/PsyTest'), { ssr: false })

const data: StudyProcessData = {
  title: 'Ваши будущие дипломы',
  homePage: true,
  text: [
    {
      bold: 'Все наши программы лицензированы, ',
      normal:
        'а дипломы имеют международные приложения, поэтому они ценятся клиентами и профессиональным психологическим сообществом как в России, так и за рубежом!'
    },
    {
      bold: ' получают официальный документ установленного образца, ',
      normal:
        'По окончании программ профессиональной переподготовки и курсов повышения квалификации выпускники института',
      normal2: 'который вносится в реестр ФРДО.',
      reversed: true
    }
  ],
  positions: homePositionsByBreakpoint,
  images: [slide1, slide2, slide3, slide4],
  imageSizes: [
    { width: 330, height: 490 },
    { width: 330, height: 230 },
    { width: 330, height: 230 },
    { width: 330, height: 490 }
  ]
}

const HomeClient = () => {
  return (
    <div className={stls.container}>
      <AdventuresCards showButton />
      <PsyTest fallbackComponent={HelpWithChoice} isRounded />
      <StudyProcess studyProcess={data} showButton />
      <SupportHelpInResults/>
    </div>
  )
}

export default HomeClient
