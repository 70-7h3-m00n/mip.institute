import React from 'react'
import Curators from './Curators/Curators'
import CareerCenter from './CareerCenter/CareerCenter'
import AlumniCommunity from './AlumniCommunity/AlumniCommunity'
import Practice from './Practice/Practice'
import Supervision from './Supervision/Supervision'

interface ProgramSectionProps {
  activeTab: string
  data: any
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ activeTab, data }) => {
  switch (activeTab) {
    case 'Опытные кураторы':
      return <Curators data={data} />
    case 'Центр карьеры':
      return <CareerCenter data={data} />
    case 'Сообщество выпускников':
      return <AlumniCommunity data={data} />
    case 'Практика':
      return <Practice data={data} />
    case 'Супервизии':
      return <Supervision data={data} />
    default:
      return null
  }
}

export default ProgramSection
