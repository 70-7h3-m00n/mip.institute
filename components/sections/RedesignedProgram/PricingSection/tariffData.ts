type FeatureItem = {
  text: string
  type?: 'sub' | 'subheading' | 'weight'
  last?: boolean
}

type Tariff = {
  name: string
  hours: string
  price: string
  yearly: string
  features: FeatureItem[]
}
export const tariffs: Record<'lite' | 'standard', Tariff> = {
  lite: {
    name: 'Лайт',
    hours: '(494 часа практики)',
    price: 'от 15.000 руб / месяц',
    yearly: 'от 180.000 руб / год',
    features: [
      { text: '1500 академических часов' },
      { text: '36 академических часов групповых интервизий' },
      { text: '48 академических часов\nБалинтовских групп' },
      { text: '48 академических часов вебинаров\nпо образовательной программе' },
      { text: 'Доступ в закрытый канал потока\nс наставником и куратором' },
      { text: '410 академических часов практикума (разбор демо-сессий)' }
    ]
  },
  standard: {
    name: 'Стандарт',
    hours: '(644 часа практики)',
    price: 'от 22.084 руб / месяц',
    yearly: 'от 265.000 руб / год',
    features: [
      { text: '1650 академических часов' },
      { text: 'Пакет «Лайт»', type: 'weight' },
      {
        text: 'Курс повышения квалификации\n«Практические навыки\nпсихологического консультирования»',
        type: 'subheading'
      },
      {
        text: '– 150 академических часов отработки профессиональных навыков психолога-консультанта в двойках и тройках под руководством практикующих психологов',
        type: 'sub'
      },
      { text: '– Открытие и закрытие сессии. Выявление истинного запроса клиента', type: 'sub' },
      { text: '– Работа с эмоциональными состояниями клиентов', type: 'sub' },
      { text: '– Планирование цикла сессий и динамика процессов', type: 'sub' },
      { text: '– Трудные клиенты. Психологическая защита и сопротивление', type: 'sub', last: true }
    ]
  }
}
