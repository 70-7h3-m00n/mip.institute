import image1 from '@/components/sections/Incomers/StudyProcess/images/1.png'
import image2 from '@/components/sections/Incomers/StudyProcess/images/2.png'
import image3 from '@/components/sections/Incomers/StudyProcess/images/3.png'
import image4 from '@/components/sections/Incomers/StudyProcess/images/4.png'
import slide1 from '@/public/assets/imgs/home/studyProcess/slide1.png'
import slide2 from '@/public/assets/imgs/home/studyProcess/slide2.png'
import slide3 from '@/public/assets/imgs/home/studyProcess/slide3.png'
import slide4 from '@/public/assets/imgs/home/studyProcess/slide4.png'
import { StaticImageData } from 'next/image'
import IPhone from '@/public/assets/imgs/home/studyProcess/IPhone.png'

interface Position {
  top: string
  left: string
  rotate: string
  scale: number
}

interface BreakpointPositions {
  start: Position[]
  final: Position[]
}

export interface PositionsByBreakpoint {
  mobile: BreakpointPositions
  tablet: BreakpointPositions
  laptop: BreakpointPositions
  desktop: BreakpointPositions
}

export interface StudyProcessData {
  title?: string
  homePage?: boolean
  text?: {
    bold: string
    normal: string
    reversed?: boolean
    normal2?: string
  }[]
  positions: PositionsByBreakpoint
  images?: StaticImageData[]
  imageSizes: { width: number; height: number }[]
  mobileImage?: StaticImageData
}

const positionsByBreakpoint: PositionsByBreakpoint = {
  mobile: {
    start: [
      { top: '0', left: '-13%', rotate: '-15deg', scale: 0.65 },
      { top: '5%', left: '45%', rotate: '5deg', scale: 0.65 },
      { top: '45%', left: '-10%', rotate: '-5deg', scale: 0.7 },
      { top: '45%', left: '45%', rotate: '5deg', scale: 0.65 }
    ],
    final: [
      { top: '10%', left: '0%', rotate: '0deg', scale: 0.55 },
      { top: '10%', left: '37%', rotate: '0deg', scale: 0.55 },
      { top: '45%', left: '0%', rotate: '0deg', scale: 0.55 },
      { top: '45%', left: '37%', rotate: '0deg', scale: 0.55 }
    ]
  },
  tablet: {
    start: [
      { top: '5%', left: '5%', rotate: '-10deg', scale: 1.1 },
      { top: '5%', left: '55%', rotate: '5deg', scale: 1.1 },
      { top: '40%', left: '5%', rotate: '0', scale: 1 },
      { top: '40%', left: '55%', rotate: '0', scale: 1 }
    ],
    final: [
      { top: '20%', left: '12%', rotate: '0deg', scale: 1 },
      { top: '20%', left: '53%', rotate: '0deg', scale: 1 },
      { top: '55%', left: '12%', rotate: '0deg', scale: 1 },
      { top: '55%', left: '53%', rotate: '0deg', scale: 1 }
    ]
  },
  laptop: {
    start: [
      { top: '120px', left: '8%', rotate: '-15deg', scale: 1.4 },
      { top: '120px', left: '60%', rotate: '8deg', scale: 1.4 },
      { top: '480px', left: '22%', rotate: '0', scale: 1.3 },
      { top: '480px', left: '58%', rotate: '0', scale: 1.3 }
    ],
    final: [
      { top: '25%', left: '16%', rotate: '0deg', scale: 1.3 },
      { top: '25%', left: '58%', rotate: '0deg', scale: 1.3 },
      { top: '60%', left: '16%', rotate: '0deg', scale: 1.3 },
      { top: '60%', left: '58%', rotate: '0deg', scale: 1.3 }
    ]
  },
  desktop: {
    start: [
      { top: '150px', left: '10%', rotate: '-20deg', scale: 2 },
      { top: '150px', left: '70%', rotate: '10deg', scale: 2 },
      { top: '500px', left: '25%', rotate: '0', scale: 1.5 },
      { top: '450px', left: '60%', rotate: '0', scale: 1.5 }
    ],
    final: [
      { top: '30%', left: '18%', rotate: '0deg', scale: 1.7 },
      { top: '30%', left: '60%', rotate: '0deg', scale: 1.7 },
      { top: '65%', left: '18%', rotate: '0deg', scale: 1.7 },
      { top: '65%', left: '60%', rotate: '0deg', scale: 1.7 }
    ]
  }
}

const studyProcessDefaultData: StudyProcessData = {
  title: 'Учебный процесс',
  text: [
    {
      bold: 'На нашей образовательной платформе СДО размещены все необходимые материалы',
      normal:
        ' - лекции, дополнительная литература, расписание различных онлайн и очных мероприятий, важные интересные новости.'
    },
    {
      bold: 'А самое главное',
      normal:
        ' - учебные планы с исчерпывающими модулями по необходимым дисциплинам, оценками с обратной связью и исключительными дополнительными материалами.'
    }
  ],
  positions: positionsByBreakpoint,
  images: [image1, image2, image3, image4],
  imageSizes: [
    { width: 250, height: 150 },
    { width: 250, height: 150 },
    { width: 250, height: 150 },
    { width: 250, height: 150 }
  ]
}

const homePositionsByBreakpoint: PositionsByBreakpoint = {
  mobile: {
    start: [
      { top: '0', left: '-13%', rotate: '-15deg', scale: 0.65 },
      { top: '5%', left: '45%', rotate: '5deg', scale: 0.65 },
      { top: '45%', left: '-10%', rotate: '-5deg', scale: 0.7 },
      { top: '45%', left: '45%', rotate: '5deg', scale: 0.65 }
    ],
    final: [
      { top: '10%', left: '0%', rotate: '0deg', scale: 0.55 },
      { top: '10%', left: '37%', rotate: '0deg', scale: 0.55 },
      { top: '45%', left: '0%', rotate: '0deg', scale: 0.55 },
      { top: '45%', left: '37%', rotate: '0deg', scale: 0.55 }
    ]
  },
  tablet: {
    start: [
      { top: '5%', left: '5%', rotate: '-10deg', scale: 1.1 },
      { top: '5%', left: '55%', rotate: '5deg', scale: 1.1 },
      { top: '40%', left: '5%', rotate: '0', scale: 1 },
      { top: '40%', left: '55%', rotate: '0', scale: 1 }
    ],
    final: [
      { top: '20%', left: '12%', rotate: '0deg', scale: 1 },
      { top: '20%', left: '53%', rotate: '0deg', scale: 1 },
      { top: '55%', left: '12%', rotate: '0deg', scale: 1 },
      { top: '55%', left: '53%', rotate: '0deg', scale: 1 }
    ]
  },
  laptop: {
    start: [
      { top: '50px', left: '0%', rotate: '-15deg', scale: 1 },
      { top: '100px', left: '40%', rotate: '10deg', scale: 1 },
      { top: '400px', left: '40%', rotate: '0', scale: 1 },
      { top: '50px', left: '80%', rotate: '10deg', scale: 1 }
    ],
    final: [
      { top: '15%', left: '4%', rotate: '0deg', scale: 0.75 },
      { top: '19%', left: '32%', rotate: '0deg', scale: 0.75 },
      { top: '47%', left: '32%', rotate: '0deg', scale: 0.75 },
      { top: '15%', left: '60%', rotate: '0deg', scale: 0.75 }
    ]
  },
  desktop: {
    start: [
      { top: '140px', left: '0%', rotate: '-20deg', scale: 1.3 },
      { top: '170px', left: '37%', rotate: '10deg', scale: 1.1 },
      { top: '500px', left: '25%', rotate: '0', scale: 1 },
      { top: '80px', left: '80%', rotate: '10deg', scale: 1.2 }
    ],
    final: [
      { top: '20%', left: '8%', rotate: '0deg', scale: 0.9 },
      { top: '22%', left: '36%', rotate: '0deg', scale: 0.9 },
      { top: '47%', left: '36%', rotate: '0deg', scale: 0.9 },
      { top: '20%', left: '64%', rotate: '0deg', scale: 0.9 }
    ]
  }
}

const homeStudyProcessData: StudyProcessData = {
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
  ],
  mobileImage: IPhone
}
export {
  positionsByBreakpoint,
  homePositionsByBreakpoint,
  studyProcessDefaultData,
  homeStudyProcessData
}
