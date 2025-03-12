const moscow = {
  address: '107078, Москва, Докучаев переулок, 8',
  coords: [55.773236, 37.644306],
  placemarkText: 'Докучаев переулок, 8',
  cards: [
    {
      mainTitle: 'Электронные почты:',
      items: [
        {
          title: 'По всем вопросам:',
          text: 'info@mip.institute'
        },
        {
          title: 'Приемная комиссия:',
          text: 'postupi@mip.institute'
        },
        {
          title: 'Для студентов:',
          text: 'curatots@mip.institute'
        },
        {
          title: 'По вопросам сотрудничества:',
          text: 'hr@mip.institute'
        }
      ]
    },
    {
      mainTitle: 'Телефоны:',
      items: [
        {
          title: 'Приемная комиссия:',
          text: ['+7 (499) 388-92-34', '+7 (800) 600-85-57']
        },
        {
          title: 'Для студентов:',
          text: '+7 (499) 110-82-11'
        }
      ]
    },
    {
      mainTitle: 'Время работы (GMT+3)',
      items: [
        {
          title: 'Рабочие дни:',
          text: 'Пн–Пт: 9:00-19:00'
        },
        {
          title: 'Выходные дни:',
          text: 'Сб–Вс'
        }
      ]
    }
  ]
}

const almaty = {
  address: 'Алматы, проспект Аль-Фараби, 17к4Б, офис 1603',
  coords: [43.230023, 76.945627],
  placemarkText: 'проспект Аль-Фараби, 17к4Б',
  cards: [
    {
      mainTitle: 'Электронные почты:',
      items: [
        {
          title: 'По всем вопросам:',
          text: 'almaty@mip.institute'
        }
      ]
    },
    {
      mainTitle: 'Телефоны:',
      items: [
        {
          title: 'Приемная комиссия:',
          text: '+7 (727) 311-09-11'
        }
      ]
    },
    {
      mainTitle: 'Время работы (UTC+5)',
      items: [
        {
          title: 'Рабочие дни:',
          text: 'Пн–Пт: 9:00-19:00'
        },
        {
          title: 'Выходные дни:',
          text: 'Сб–Вс'
        }
      ]
    }
  ]
}

export { moscow, almaty }
