import React, { useState } from 'react'
import stls from './SupportHelpInResults.module.sass'
import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import ProgramSection from './ProgramSection/ProgramSection'
import { customStyles, tabs } from './const'
import Select from 'react-select'

const SupportHelpInResults = () => {
  const [activeTab, setActiveTab] = useState('Опытные кураторы')
  const isMobile = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Поддерживаем и помогаем прийти к результату</h2>
        {!isMobile ? (
          <div className={stls.tabs}>
            {tabs.map(tab => (
              <button
                key={tab}
                className={`${stls.tab} ${activeTab === tab ? stls.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
        ) : (
          <Select
            styles={customStyles}
            className={stls.select}
            options={tabs.map(tab => ({ value: tab, label: tab }))}
            value={{ value: activeTab, label: activeTab }}
            onChange={selectedOption => setActiveTab(selectedOption?.value ?? '')}
            isSearchable={false}
          />
        )}
        <ProgramSection activeTab={activeTab} />
      </Wrapper>
    </section>
  )
}

export default SupportHelpInResults
