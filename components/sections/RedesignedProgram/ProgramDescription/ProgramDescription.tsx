import React, { useState } from 'react'
import stls from './ProgramDescription.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import {
  about,
  contentCareerCenter,
  contentCareService,
  graduates,
  programDescription
} from 'constants/redesignedProgram/programDescription'
import QualificationBlock from '@/components/sections/RedesignedProgram/QualificationBlock/QualificationBlock'

const ProgramDescription = () => {
  const [activeTab, setActiveTab] = useState(0)

  const content = [about, graduates, contentCareService, contentCareerCenter]

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
                {typeof activeContent.listBegin === 'string' ? (
                  <p className={stls.text}>{activeContent.listBegin}</p>
                ) : (
                  <p className={stls.text}>
                    <span className={stls.boldSmall}>{activeContent.listBegin.bold}</span>{' '}
                    {activeContent.listBegin.normal}
                  </p>
                )}
                <ul className={stls.list}>
                  {activeContent.list.map((item, index) => (
                    <li key={index} className={stls.listItem}>
                      {item.bold && <span className={stls.boldSmall}>{item.bold}</span>}{' '}
                      {item.normal}
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
