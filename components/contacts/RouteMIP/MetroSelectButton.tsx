'use client'
import { useState } from 'react'
import stls from './MetroSelectButton.module.sass'
import { metroStations } from 'constants/contacts/contacts'
import IconTextButton from '@/ui/IconTextButton'
import IconPlus from '@/components/icons/IconPlus'
import IconMinus from '@/components/icons/IconMinus'
import IconCheck from '@/components/icons/IconCheck'
import classNames from 'classnames'

const MetroSelectButton = ({ selectedStation, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = stationId => {
    onChange(stationId)
    setIsOpen(false)
  }

  return (
    <div className={stls.metroSelectWrapper} tabIndex={0} onBlur={() => setIsOpen(false)}>
      <IconTextButton
        backgroundColor='#FF8F52'
        text={isOpen ? 'Выбрать метро' : `Метро: ${selectedStation.name}`}
        onClick={() => setIsOpen(prev => !prev)}
        icon={<span className={stls.icon}>{isOpen ? <IconMinus /> : <IconPlus />}</span>}
      />
      {isOpen && (
        <ul className={stls.metroDropdown} onMouseDown={e => e.preventDefault()}>
          {metroStations.map(station => (
            <li
              key={station.id}
              className={classNames(stls.metroOption, {
                [stls.selected]: station.id === selectedStation.id
              })}
              onClick={() => handleSelect(station.id)}>
              {station.name} {station.id === selectedStation.id && <span>{<IconCheck />}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MetroSelectButton
