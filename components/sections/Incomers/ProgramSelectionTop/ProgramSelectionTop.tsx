import Wrapper from '@/ui/Wrapper'
import stls from './ProgramSelectionTop.module.sass'
import IconCheck from '@/components/icons/IconCheck'
import Image from 'next/image'
import pic from './pic.png'
import ArrowButton from '@/components/sections/Incomers/ArrowButton/ArrowButton'
import { incomersStudyOptions } from 'constants/customSelect'
import CustomSelect from '@/ui/CustomSelect'
import { useState } from 'react'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const ProgramSelectionTop = () => {
  const purples = [
    {
      title: 'Доверие',
      text: 'Мы собрали команду из ведущих преподавателей-практиков и разработали программы обучения, отвечающие международным стандартам в сфере образования.'
    },
    {
      title: 'Доступное и качественное обучение',
      text: 'Программы института объединяют глубокую теорию и насыщенную практику, помогая освоить научную базу и уверенно применять психологические инструменты в работе с клиентами в удобном для вас формате формате.'
    }
  ]

  const cards = [
    {
      title: 'Профессиональная переподготовка',
      value: 'profession',
      points: [
        '8 основных направлений в изучении психологии',
        'Для тех, кто решил освоить новую профессию с нуля',
        'Длительность обучения — от 6 до 24 месяцев в ависимости от выбранного направления',
        'По окончании обучения выдается диплом'
      ]
    },
    {
      title: 'Практическая подготовка',
      value: 'practicalTraining',
      points: [
        '8 основных направлений в изучении психологии',
        'Для тех, кто решил освоить новую профессию с нуля',
        'Длительность обучения — от 6 до 24 месяцев в ависимости от выбранного направления',
        'По окончании обучения выдается диплом'
      ]
    },
    {
      title: 'Повышение квалификации',
      value: 'course',
      points: [
        '8 основных направлений в изучении психологии',
        'Для тех, кто решил освоить новую профессию с нуля',
        'Длительность обучения — от 6 до 24 месяцев в ависимости от выбранного направления',
        'По окончании обучения выдается диплом'
      ]
    },
    {
      title: 'Бакалавриат',
      value: 'bachelor',
      points: [
        '8 основных направлений в изучении психологии',
        'Для тех, кто решил освоить новую профессию с нуля',
        'Длительность обучения — от 6 до 24 месяцев в ависимости от выбранного направления',
        'По окончании обучения выдается диплом'
      ]
    }
  ]
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const [type, setType] = useState(incomersStudyOptions[0]?.value)

  const filteredCards = isMobileAndTabletLayout ? cards.filter(card => card.value === type) : cards

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.coloured}>Широкий выбор </span>
          программ обучения
        </h2>
        <div className={stls.purples}>
          {purples.map((item, index) => (
            <div key={index} className={stls.purpleCard}>
              <span className={stls.purpleCardTitle}>{item.title}</span>
              <span className={stls.purpleCardText}>{item.text}</span>
            </div>
          ))}
        </div>
        {isMobileAndTabletLayout && (
          <CustomSelect
            onChange={selected => setType(selected.value)}
            options={incomersStudyOptions}
            radius='50'
            height='55'
            mainColor='#FF8F52'
            bgColor='#FF8F52'
            textColor='white'
            placeholder='Выбрать уровень образования'
            menuBorderColor='#FF8F52'
            value={incomersStudyOptions.find(option => option.value === type)}
          />
        )}
        <div className={stls.cards}>
          {filteredCards.map((item, index) => (
            <div key={index} className={stls.greyCard}>
              <div className={stls.btnContainer}>
                <ArrowButton />
              </div>
              <div>
                <span className={stls.greyCardTitle}>{item.title}</span>
                <ul className={stls.list}>
                  {item.points.map((item, index) => (
                    <li key={index} className={stls.point}>
                      <span>
                        <IconCheck noBackground />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={stls.imageDiv}>
                <Image
                  src={pic}
                  alt=''
                  width={230}
                  height={150}
                  style={{ height: '100%', width: '100%' }}
                  className={stls.image}
                />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramSelectionTop
