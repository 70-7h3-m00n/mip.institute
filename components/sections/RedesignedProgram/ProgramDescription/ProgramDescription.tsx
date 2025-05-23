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
      descriptionHeader: 'Погрузитесь в мир современных технологий с нашей программой обучения',
      listBegin: 'Наша программа предлагает:',
      list: [
        'глубокое изучение востребованных IT-навыков',
        'практические проекты для реального опыта',
        'гибкий график обучения, подходящий для занятых людей'
      ],
      listEnd:
        'Вы получите все необходимые знания и инструменты, чтобы начать успешную карьеру в IT-сфере.',
      video: ''
    },
    {
      id: 1,
      descriptionHeader: 'Откройте двери в множество карьерных возможностей',
      listBegin: 'После завершения программы вы сможете работать как:',
      list: [
        'Frontend-разработчик',
        'Backend-разработчик',
        'Аналитик данных',
        'Специалист по UI/UX'
      ],
      listEnd:
        'Мы поможем вам выбрать направление и подготовим к реальным задачам в выбранной профессии.',
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
