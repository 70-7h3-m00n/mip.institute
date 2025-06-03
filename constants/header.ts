import routes from '@/config/routes'
// ссылки на хедер и для микроразметка
export const navigationItems = [
  { href: routes.front.about, val: 'Об институте' },
  { href: routes.front.lectoriums, val: 'Семинары' },
  { href: routes.front.supervision, val: 'Супервизия' },
  { href: routes.front.incomers, val: 'Поступающим' },
  { href: routes.front.teachers, val: 'Преподаватели' },
  { href: routes.front.webinars, val: 'Вебинары' },
  { href: routes.front.journals, val: 'Журнал' },
  { href: routes.front.reviews, val: 'Отзывы' },
  { href: routes.front.vacancies, val: 'Вакансии' }
]

export const WPheaderJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WPHeader',
  name: 'Header',
  description: 'Навигация и контактная информация Московского Института Психологии',
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'Московский Институт Психологии',
    legalName:
      'Научная автономная некоммерческая организация «Московский институт психологии» (НАНО «МИП») ИНН 9725041321 ОГРН 1207700479260',
    sameAs: 'https://mip.institute'
  }
}

export const logoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageObject',
  url: 'https://mip.institute/assets/imgs/general/icon.png',
  contentUrl: 'https://mip.institute/assets/imgs/general/icon.png',
  name: 'Логотип Московского Института Психологии',
  description: 'Официальный логотип Московского Института Психологии',
  publisher: {
    '@type': 'EducationalOrganization',
    name: 'Московский Институт Психологии',
    legalName:
      'Научная автономная некоммерческая организация «Московский институт психологии» (НАНО «МИП») ИНН 9725041321 ОГРН 1207700479260',
    sameAs: 'https://mip.institute'
  },
  width: 33,
  height: 40
}
