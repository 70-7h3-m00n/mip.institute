import { routes } from '@/config/index'

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
      href: routes.front.journals
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
      href: routes.front.vacancies
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
      href: routes.front.programs
    },
    {
      val: 'Курсы',
      href: routes.front.shortTerm
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
      val: 'Супервизии',
      href: routes.front.supervision
    },
    {
      val: 'Семинары',
      href: routes.front.lectoriums
    },
    {
      val: 'Вебинары',
      href: routes.front.webinars
    }
  ]
]

const footerCards = [
  {
    title: 'Приемная комиссия:',
    description: '+7 (499) 110-88-19\n+7 (800) 600-29-03'
  },
  {
    title: 'Кураторский отдел:',
    description: '+7 (499) 110-82-11'
  },
  {
    title: 'Адрес:',
    description: 'Москва,\nДокучаев переулок, 8'
  },
  {
    title: 'Электронный адрес:',
    description: 'info@mip.institute'
  }
]

const bottomFooterLinks = [
  [{ text: `© МИП, 2020 - ${new Date().getFullYear()}` }],
  [
    { title: 'Сведения об образовательной организации', href: routes.front.svedenCommon },
    { title: 'Договор оферты мероприятий', href: routes.front.policiesOfertaEvent },
    { title: 'Договор оферты', href: routes.front.policiesTerms }
  ],
  [
    {
      title:
        'Согласие на обработку персональных данных с помощью сервисов «Яндекс.Метрика» и «Google Analytics»',
      href: routes.front.yandexAnalytics
    },
    { title: 'Политика конфиденциальности', href: routes.front.policiesPrivacy }
  ],
  [
    {
      text: 'Департамент'
    },
    { title: 'Информация о правилах использования материала', href: routes.front.regulation }
  ],
  [
    {
      text: 'Научная автономная некоммерческая организация «Московский институт психологии» (НАНО «МИП») ИНН 9725041321 ОГРН 1207700479260'
    }
  ]
]

const footerMobileLinks = [
  { text: `© МИП, 2020 - ${new Date().getFullYear()}` },
  { title: 'Договор оферты', href: routes.front.policiesTerms },
  { title: 'Политика конфиденциальности', href: routes.front.policiesPrivacy },
  {
    title: 'Лицензия на образовательную деятельность\n№041363 от 14.04.2021 г.',
    href: routes.front.policiesPrivacy
  }
]

const contactBlocks = [
  {
    title: 'Приемная комиссия:',
    contacts: ['+7 (499) 110-88-19', '+7 (800) 600-29-03']
  },
  {
    title: 'Кураторский отдел:',
    contacts: ['+7 (499) 110-82-11']
  }
]

export { topFooterLinks, footerCards, bottomFooterLinks, footerMobileLinks, contactBlocks }
