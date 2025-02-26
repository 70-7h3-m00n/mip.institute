import { routes } from '../config'

const links = [
  {
    text: 'Направления обучения',
    href: routes.front.programs,
    withIcon: true
  },
  { text: 'Преподаватели', href: routes.front.teachers, withIcon: false },
  { text: 'Вебинары', href: routes.front.webinars, withIcon: false },
  { text: 'Журнал', href: routes.front.journals, withIcon: false },
  { text: 'Семинары', href: routes.front.lectoriums, withIcon: false },
  { text: 'Супервизии', href: routes.front.supervision, withIcon: false },
  { text: 'Вакансии', href: routes.front.vacancies, withIcon: false },
  { text: 'Отзывы', href: routes.front.reviews, withIcon: false },
  { text: 'Об институте', href: routes.front.about, withIcon: false },
  { text: 'Поступающим', href: routes.front.incomers, withIcon: false },
  {
    text: 'Сведения об образовательной организации',
    href: routes.front.svedenCommon,
    withIcon: false
  }
]

export default links
