import { routes } from '../config'

const bottomFooterLinks = [
  [
    { text: `© МИП, 2020 - ${new Date().getFullYear()}` } // Просто текст
  ],
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

export default bottomFooterLinks
