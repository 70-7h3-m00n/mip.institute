import React from 'react'
import Curators from './Curators/Curators'
import CareerCenter from './CareerCenter/CareerCenter'
import AlumniCommunity from './AlumniCommunity/AlumniCommunity'
import Practice from './Practice/Practice'
import Supervision from './Supervision/Supervision'

interface ProgramSectionProps {
  activeTab: string
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'Опытные кураторы':
      return <Curators />
    case 'Центр карьеры':
      return <CareerCenter />
    case 'Сообщество выпускников':
      return <AlumniCommunity />
    case 'Практика':
      return <Practice />
    case 'Супервизии':
      return <Supervision />
    default:
      return null
  }
}

export default ProgramSection
