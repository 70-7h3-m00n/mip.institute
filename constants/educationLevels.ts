// constants/educationLevels.ts
import { routes } from '@/config/index'

const educationLevelsList = [
  {
    id: 1,
    label: 'Профессиональная переподготовка',
    description:
      `для тех, кто смело смотрит \n в ближайшее будущее, решил освоить новую профессию с нуля или сменить свой карьерный путь`,
    href: routes.front.professions,
    programType: 'profession',
    background: '/assets/imgs/home/EducationLevels/bg1.png'
  },
  {
    id: 2,
    label: 'Курcы повышения квалификации',
    description:
      'для тех, кто хочет сделать следующий шаг в сфере психологии, углубить свою экспертизу и оказывать более качественные психологические услуги',
    href: routes.front.courses,
    programType: 'course',
    background: '/assets/imgs/home/EducationLevels/bg2.png'
  },
  {
    id: 3,
    label: 'Бакалавриат',
    description:
      'для тех, кто готов сделать первый шаг к высшему образованию по психологии, получить фундаментальные знания и построить успешную карьеру',
    href: routes.front.bachelors,
    programType: 'bachelor',
    background: '/assets/imgs/home/EducationLevels/bg3.png'
  },
  {
    id: 4,
    label: 'Практическая подготовка',
    description:
      'для тех, кто готов пройти три этапа стажировки в институте, чтобы лучше понять теоретические концепции, увидев их реальное применение в различных ситуациях',
    href: routes.front.practicalTrainings,
    programType: 'practicalTrainings',
    background: '/assets/imgs/home/EducationLevels/bg4.png'
  },
  {
    id: 5,
    label: 'Краткосрочные курсы',
    description:
      'для тех, кто хочет быстро получить востребованные знания и умения, продолжая развиваться без отрыва от своей деятельности',
    href: routes.front.shortTerm,
    programType: 'shortTerm',
    background: '/assets/imgs/home/EducationLevels/bg5.png'
  },
  {
    id: 6,
    label: 'Все программы',
    href: routes.front.programs,
    description:
      'мы собрали для вас курсы по популярным направлениям психологии, чтобы вы смогли выбрать подходящую вашим целям и уровню подготовки программу',
    programType: 'programs',
    background: '/assets/imgs/home/EducationLevels/bg1.png'
  }
]

export default educationLevelsList