import React, { useState } from 'react'
import stls from './PaymentTraining.module.sass'
import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import ProgramSection from './ProgramSection/ProgramSection'
import { customStyles, paymentData, tabs } from './const'
import Select from 'react-select'

const PaymentTraining = () => {
  const [activeTab, setActiveTab] = useState('ПП и ПК')
  const isMobile = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Оплата обучения</h2>
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
            onChange={selectedOption => setActiveTab(selectedOption.value)}
            isSearchable={false}
          />
        )}
        <ProgramSection data={paymentData[activeTab]} />
      </Wrapper>
    </section>
  )
}

export default PaymentTraining
