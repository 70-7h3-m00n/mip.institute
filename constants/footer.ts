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
  [{ text: `© НАНО "МИП", 2020 - ${new Date().getFullYear()}` }],
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
// микроразметка для футера
const WPFooterJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WPFooter',
  name: 'Footer',
  description: 'Контактная информация и навигация Московского Института Психологии',
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'Московский Институт Психологии',
    legalName:
      'Научная автономная некоммерческая организация «Московский институт психологии» (НАНО «МИП») ИНН 9725041321 ОГРН 1207700479260',
    url: 'https://mip.institute',
    logo: 'https://mip.institute/assets/imgs/general/icon.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+7 (499) 110-88-19',
        contactType: 'Приёмная комиссия (Москва)',
        areaServed: 'RU',
        availableLanguage: 'Russian',
        contactOption: 'Пн–Пт: 9:00-19:00 (GMT+3)'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+7 (800) 600-29-03',
        contactType: 'Приёмная комиссия (Москва)',
        areaServed: 'RU',
        availableLanguage: 'Russian',
        contactOption: 'Пн–Пт: 9:00-19:00 (GMT+3)'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+7 (499) 110-82-11',
        contactType: 'Кураторский отдел (Москва)',
        areaServed: 'RU',
        availableLanguage: 'Russian',
        contactOption: 'Пн–Пт: 9:00-19:00 (GMT+3)'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+7 (727) 311-09-11',
        contactType: 'Приёмная комиссия (Алматы)',
        areaServed: 'KZ',
        availableLanguage: 'Russian',
        contactOption: 'Пн–Пт: 9:00-19:00 (UTC+5)'
      }
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Москва',
        streetAddress: 'Докучаев переулок, 8',
        postalCode: '107078',
        addressCountry: 'RU'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Алматы',
        streetAddress: 'PROMENADE, Проспект Абая, 44а',
        addressCountry: 'KZ'
      }
    ],
    email: [
      'info@mip.institute',
      'postupi@mip.institute',
      'curators@mip.institute',
      'hr@mip.institute',
      'almaty@mip.institute'
    ],
    sameAs: [
      'https://m.vk.com/mip_institute',
      'https://t.me/mip_institute',
      'https://www.youtube.com/channel/UCGW-oYT-mquOPy6OY7R6iRA',
      'https://ok.ru/group/70000001109496',
      'https://dzen.ru/institute_mip'
    ]
  }
}

export { topFooterLinks, footerCards, bottomFooterLinks, WPFooterJsonLd }
