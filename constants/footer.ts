import { routes } from '../config'

const topFooterLinks = [
  [
    { title: 'Институт' },
    {
      val: 'Об институте',
      href: routes.front.about
    },
    {
      val: 'Преподаватели',
      href: routes.front.teachers
    },
    {
      val: 'Отзывы',
      href: routes.front.reviews
    },
    {
      val: 'Наши партнеры',
      href: routes.front.partners
    },
    {
      val: 'Журнал',
      href: routes.front.journal
    },
    {
      val: 'Пригласи друга',
      href: routes.external.referralProgram
    },
    {
      val: 'Партнерская программа',
      href: routes.external.advCake
    },
    {
      val: 'Поступающим',
      href: routes.front.incomers
    },
    {
      val: 'Вакансии',
      href: routes.front.incomers
    },
    {
      val: 'Контакты',
      href: routes.front.contact
    }
  ],
  [
    { title: 'Направления' },
    {
      val: 'Психотерапия',
      href: '/programs/psihoterapiya'
    },
    {
      val: 'Консультирование',
      href: '/programs/konsultirovanie'
    },
    {
      val: 'Детская психология',
      href: '/programs/detskaya-psihologiya'
    },
    {
      val: 'Диетология и нутрициология',
      href: '/programs/dietologiya-i-nutriciologiya'
    },
    {
      val: 'Клиническая психология',
      href: '/programs/klinicheskaya-psihologiya'
    },
    {
      val: 'Организационная психология',
      href: '/programs/organizacionnaya-psihologiya'
    },
    {
      val: 'Общая психология',
      href: '/programs/obshaya-psihologiya'
    }
  ],
  [
    { title: 'Образование' },
    {
      val: 'Все программы',
      href: routes.front.courses
    },
    {
      val: 'Курсы',
      href: routes.front.courses
    },
    {
      val: 'Повышение квалификации',
      href: routes.front.courses
    },
    {
      val: 'Профессиональная переподготовка',
      href: routes.front.professions
    },
    {
      val: 'Высшее образование (Бакалавриат)',
      href: routes.front.bachelors
    },
    {
      val: 'Практическая подготовка',
      href: routes.front.practicalTrainings
    },
    {
      val: 'Семинары',
      href: routes.front.lectorium
    },
    {
      val: 'Вебинары',
      href: routes.front.webinars
    }
  ]
]

export { topFooterLinks }
