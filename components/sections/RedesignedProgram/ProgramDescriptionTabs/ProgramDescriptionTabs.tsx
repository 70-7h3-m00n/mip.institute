import React, { useState } from 'react'
import stls from './ProgramDescriptionTabs.module.sass'
import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import classNames from 'classnames'

const ProgramDescriptionTabs = () => {
  const [activeTab, setActiveTab] = useState(2)
  const isMobile = useBetterMediaQuery('(max-width: 768px)')
  const tabs = [
    { text: 'О программе', id: 0 },
    { text: 'Кем работать', id: 1 },
    { text: 'Служба заботы', id: 2 },
    { text: 'Карьерный центр', id: 3 }
  ]

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
        'Вы получите все необходимые знания и инструменты, чтобы начать успешную карьеру в IT-сфере.'
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
        'Мы поможем вам выбрать направление и подготовим к реальным задачам в выбранной профессии.'
    },
    {
      id: 2,
      descriptionHeader:
        'Вы не будете проходить этот путь в одиночку. Мы всегда будем рядом и поможем с любыми сложностями с момента поступления до итогового экзамена и аттестации',
      listBegin: 'В процессе обучения на связи постоянно будут заботливые наставники, которые:',
      list: [
        'ответят на все ваши вопросы, чтобы вы могли больше времени уделять учебе',
        'поддержат, если возникнут сложности'
      ],
      listEnd:
        'Специалисты технической поддержки помогут решить возможные проблемы с доступом и софтом, чтобы ничего не отвлекало вас от обучения.\nМы стараемся, чтобы вы учились комфортно, а все сложности решались быстро и эффективно'
    },
    {
      id: 3,
      descriptionHeader: 'Ваш успех на рынке труда — наша главная цель',
      listBegin: 'Карьерный центр поможет вам:',
      list: [
        'составить профессиональное резюме и портфолио',
        'подготовиться к собеседованиям',
        'найти подходящие вакансии'
      ],
      listEnd:
        'Мы сотрудничаем с ведущими IT-компаниями и поможем вам сделать первые шаги в карьере.'
    }
  ]

  // Находим контент для активной вкладки
  const activeContent = content.find(item => item.id === activeTab)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2>Описание программы</h2>
        <div className={stls.tabs}>
          {tabs.map(tab => (
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

        <div className={stls.content}>
          <div className={stls.video}></div>
          <div className={stls.description}>
            {activeContent ? (
              <>
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
                <p className={stls.text}>{activeContent.listEnd}</p>
              </>
            ) : (
              <p className={stls.text}>Контент для этой вкладки не найден</p>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramDescriptionTabs
