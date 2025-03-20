export const tabs = [
  'Опытные кураторы',
  'Центр карьеры',
  'Сообщество выпускников',
  'Практика',
  'Супервизии'
]

export const paymentData = {
  'Опытные кураторы': {
    layout: 'vertical',
    top: {
      title: 'Наш отдел заботы ежедневно создает и развивает поддерживающую атмосферу обучения',
      description: `Студенты доверяют нашим кураторам — увлеченным специалистам с психологическим образованием, которые всегда готовы поддержать и прийти 
  на помощь`
    },
    bottom: {
      imageUrl: '/assets/imgs/home/SupportHelpInResults/image1.jpg',
      imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob1.png',
      imageAlt: 'Опытные кураторы'
    }
  },
  'Центр карьеры': {
    layout: 'horizontal',
    left: {
      title:
        'Мы ценим системный подход и стремимся создать условия, в которых каждый студент сможет полностью раскрыть свои способности и достичь поставленных целей',
      description: `Наша команда готова поддержать вас на каждом этапе развития, помогая достичь карьерных успехов`,
      textCard: `Вас ждет встреча с карьерным консультантом, который поможет определиться с направлением 
в психологии. Специалист проанализирует ваши навыки, интересы, даст ценные советы 
и рекомендации`
    },
    right: {
      imageUrl: '/assets/imgs/home/SupportHelpInResults/image2.png',
      imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob2.png',
      imageAlt: 'Центр карьеры'
    }
  },
  'Сообщество выпускников': {
    layout: 'horizontal',
    left: {
      title:
        'Сообщество выпускников МИП является местом, позволяющим оставаться на связи с коллегами',
      imageUrl: '/assets/imgs/home/SupportHelpInResults/image3.jpg',
      imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob3.jpg',
      imageAlt: 'Сообщество выпускников'
    },
    right: {
      type: 'cards',
      cards: [
        {
          title: 'Здесь можно обмениваться опытом,',
          description: 'инсайтами и находить партнеров для совместных проектов.'
        },
        {
          title: 'Это безопасное пространство',
          description: 'для обмена личным опытом и эмоциональной поддержкой'
        },
        {
          title: 'Наши специалисты с радостью делятся актуальными событиями из жизни',
          description:
            'института и новостями из мира психологии. Они всегда готовы к обсуждению и с удовольствием ответят на любые вопросы'
        }
      ]
    }
  },
  Практика: {
    layout: 'vertical',
    top: {
      title:
        'Практика помогает студентам лучше понять теоретические концепции, увидев их реальное применение в контексте разных ситуаций',
      text1:
        'Программы практической подготовки идеально подходят для начинающих специалистов и студентов, которые стремятся развить реальные навыки и уверенно работать с клиентами',
      text2:
        'Студенты учатся развивать эмоциональную устойчивость, работать с собственными эмоциями и получают обратную связь от наших экспертных педагогов для личностного роста'
    },
    bottom: {
      imageUrl: '/assets/imgs/home/SupportHelpInResults/image4.png',
      imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob4.png',
      imageAlt: 'Практика'
    }
  },
  Супервизии: {
    layout: 'horizontal',
    left: {
      title:
        'Обсуждение и анализ клиентских случаев в кругу единомышленников под руководством более опытного коллеги (супервизора)',
      imageUrl: '/assets/imgs/home/SupportHelpInResults/image5.png',
      imageMobUrl: '/assets/imgs/home/SupportHelpInResults/imageMob5.png',
      imageAlt: 'Супервизии'
    },
    right: {
      type: 'cards',
      cards: [
        {
          title: `Участники групповой супервизии в теплой 
и безопасной атмосфере смогут проработать трудности, возникающие в работе с клиентами`
        },
        {
          title: `Начинающие и практикующие специалисты получают качественное развитие и поддержку`
        },
        {
          title: `Вы расширите профессиональный кругозор 
за счет анализа различных проблемных ситуаций и подходов к их решению
`
        }
      ]
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
