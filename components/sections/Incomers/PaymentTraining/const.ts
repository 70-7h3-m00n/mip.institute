export const tabs = ['ПП и ПК', 'Практическая подготовка', 'Бакалавриат']

export const paymentData = {
  'ПП и ПК': {
    title: 'Программы профессиональной переподготовки и курсы повышения квалификации',
    description: `Программы подходят для тех, кто хочет начать свой путь в психологии с нуля, 
    сменить сферу деятельности и получить официальный диплом, дающий право на ведение 
    практики. Мы также ждем практикующих специалистов, желающих повысить свою 
    квалификацию и освоить новые подходы и техники для работы с клиентами.`,
    imageUrl:
      'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739354237/PP_i_PK_f37cf8e1eb.jpg',
    imageAlt: 'ПП и ПК',
    rightContent: {
      type: 'cards',
      cards: [
        {
          title: 'Оплата обучения',
          description:
            'Вы можете оплатить обучение полностью или воспользоваться беспроцентной рассрочкой на 4, 6, 8 или 12 месяцев от банков-партнеров'
        },
        {
          title: 'Возврат средств',
          description:
            'Если по каким-то причинам вы передумаете учиться, сообщите об этом в течение первых двух недель, и мы вернем полную стоимость курса'
        },
        {
          title: 'Налоговый вычет',
          description:
            'Верните 13% от стоимости обучения. Оформите заявку на сайте nalog.ru и отнесите уведомление в бухгалтерию по месту работы'
        }
      ]
    }
  },
  'Практическая подготовка': {
    title: 'Программа практической подготовки',
    description: `Программа практической подготовки подходит начинающим специалистам и текущим студентам,
    которые хотят получить реальные практические навыки и избавиться от страха неправильно
    выявить истинный запрос и не оказать необходимую поддержку клиенту.`,
    imageUrl:
      'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739360581/Prakticheskaya_podgotovka_b8b5c1e534.jpg',
    imageAlt: 'Практическая подготовка',
    rightContent: {
      type: 'list',
      title: 'Оплата обучения',
      description: 'Вы можете выбрать оптимальный для себя вариант оплаты:',
      list: [
        'Оплачивайте отдельно каждую ступень',
        'Оплатите сразу три ступени и получите скидку в размере 15 000',
        'Выберите дополнительный курс профессиональной переподготовки и получите скидку на программу практической подготовки'
      ],
      imageUrl:
        'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739360581/Prakticheskaya_podgotovka_pravyj_blok_cab8dab205.png'
    }
  },
  Бакалавриат: {
    title: 'Бакалавриат',
    description: `Мы ждем выпускников 11 класса и студентов, желающих перевестись из другого вуза.
    А также абитуриентов с высшим или средним профессиональным образованием, которым доступно обучение по ускоренной программе.
    Студенты обучаются по очно-заочной форме и могут выбрать либо дистанционный формат, либо комбинированный, с личным посещением занятий 
по субботам`,
    imageUrl:
      'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739360581/Bakalavriat_6f2edcaea0.jpg',
    imageAlt: 'Бакалавриат',
    rightContent: {
      type: 'list',
      title: 'Оплата обучения',
      description: 'Вы можете выбрать оптимальный для себя вариант оплаты:',
      list: [
        'Оплата по семестрам',
        'Единовременная оплата 1 года обучения со скидкой в 10 000',
        'Предоставляется рассрочка от банков-партнеров при оплате от 1 года обучения'
      ],
      imageUrl:
        'https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739360581/Bakalavriat_pravyj_blok_443fe86c88.png'
    }
  }
}

export const customStyles = {
  control: base => ({
    ...base,
    borderRadius: '100px',
    border: '1px solid #6F01C6',
    background: '#FFF',
    padding: '7px 22px',
    cursor: 'pointer',
    fontWeight: '500',
    boxShadow: 'none',
    outline: 'none'
  }),
  menu: base => ({
    ...base,
    borderRadius: '20px',
    overflow: 'hidden',
    color: '#FFF'
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    background: isSelected ? '#6F01C6' : isFocused ? '#FFFFFFFF' : 'transparent',
    color: isSelected ? 'white' : '#6F01C6',
    cursor: 'pointer'
  }),
  singleValue: base => ({
    ...base,
    color: '#6F01C6'
  }),
  dropdownIndicator: base => ({
    ...base,
    color: '#6F01C6',
    '&:hover': { color: '#6F01C6' }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}
