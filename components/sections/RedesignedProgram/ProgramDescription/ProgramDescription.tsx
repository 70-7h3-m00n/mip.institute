import React, { useState } from 'react'
import stls from './ProgramDescription.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import {
  contentCareerCenter,
  contentCareService,
  programDescription
} from 'constants/redesignedProgram/programDescription'
import QualificationBlock from '@/components/sections/RedesignedProgram/QualificationBlock/QualificationBlock'

const ProgramDescription = () => {
  const [activeTab, setActiveTab] = useState(2)

  const content = [
    {
      id: 0,
      descriptionHeader: '',
      listBegin: `Обучение на психолога-консультанта с получением диплома – это возможность в онлайн-формате освоить актуальные методы психологического консультирования для эффективной работы с разными запросами клиентов.

Лекции проходят дистанционно на удобной платформе. Программа включает теоретические знания по основам психологии, анатомии и физиологии. Практическая часть позволяет закрепить знания, выполняя задания.

Выпускники, прошедшие обучение на психолога-консультанта, получают право на оказание профессиональной помощи людям и ведение частной практики. 
`,
      list: [],
      listEnd: '',
      video: ''
    },
    {
      id: 1,
      descriptionHeader: '',
      listBegin:
        'Программа профессиональной переподготовки «Психологическое консультирование» дает возможность:',
      list: [
        'Вести частную практику, проводить очное и дистанционное консультирование',
        'Работать в службах доверия и психолого-педагогической помощи',
        'Устроиться на работу в реабилитационные, спортивные, социальные или медицинские центры',
        'Консультирования в образовательных и профориентационных учреждениях',
        'Работы в судебных и правоохранительных органах, в военных организациях',
        'Проводить тренинги и консультировать в корпоративном секторе'
      ],
      listEnd: '',
      video: ''
    },
    contentCareService,
    contentCareerCenter
  ]

  const activeContent = content.find(item => item.id === activeTab)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2>Описание программы</h2>
        <div className={stls.mainBlock}>
          <div className={stls.desktopTabs}>
            {programDescription.map(tab => (
              <button
                key={tab.id}
                className={classNames({
                  [stls.tab]: true,
                  [stls.activeTab]: tab.id === activeTab
                })}
                onClick={() => setActiveTab(tab.id)}>
                {tab.text}
              </button>
            ))}
          </div>

          {activeContent ? (
            <div className={stls.content}>
              <div className={stls.videoWrapper}>
                <iframe
                  className={stls.video}
                  src={activeContent.video || 'https://kinescope.io/xkcit754QUMGeZDKWJFiXz'}
                  allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'></iframe>
              </div>
              <div className={stls.mobileTabs}>
                {programDescription.map(tab => (
                  <button
                    key={tab.id}
                    className={classNames({
                      [stls.tab]: true,
                      [stls.activeTab]: tab.id === activeTab
                    })}
                    onClick={() => setActiveTab(tab.id)}>
                    {tab.text}
                  </button>
                ))}
              </div>
              <div className={stls.description}>
                <p className={classNames(stls.text, stls.bold)}>
                  {activeContent.descriptionHeader}
                </p>
                <p className={stls.text}>{activeContent.listBegin}</p>
                <ul className={stls.list}>
                  {activeContent.list.map((item, index) => (
                    <li key={index} className={stls.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className={stls.text}>{activeContent.listEnd}</span>
              </div>
            </div>
          ) : null}

          <QualificationBlock
            variant={'default'}
            programDetails={{
              name: 'Психолог-консультант',
              specialization: 'Психотерапия в психологическом консультировании'
            }}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramDescription
