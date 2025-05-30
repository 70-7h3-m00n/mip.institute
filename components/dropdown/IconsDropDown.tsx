'use client'
import React, {  useState } from 'react'
import stls from '@/styles/components/sections/Header.module.sass'
import IconContact from '../icons/IconContact'
import IconDropDownClock from '../icons/IconDropDownClock'
import IconEnterToPortal from '../icons/IconEnterToPortal'
import IconWeakVision from '../icons/IconWeakVision'
import classNames from 'classnames'
import ConnectInfo from './ConnectInfo'
import TimeOfWork from './TimeOfWork'
import WeakVision from './WeakVision'
import DistanceStudy from './DistanceStudy'
import IconDropDownDocuments from '../icons/IconDropDownDocuments'
import DocumentsSection from './DocumentsSection'

function IconsDropDown({ newMainPage=false }: { newMainPage?: boolean }) {
  const [selectedIcon, setSelectedIcon] = useState(null)

  const handleIconClick = icon => {
    if (selectedIcon !== icon) {
      setSelectedIcon(icon)
    }
  }
  return (
    <div className={stls.popupWrapper} onMouseLeave={() => handleIconClick(null)}>
      <div className={stls.dropdownIcon}>
          <IconContact
            onMouseEnter={() => handleIconClick('icon1')}
            className={
              selectedIcon === 'icon1' ? stls.selected : newMainPage ? stls.newHomePage : stls.icon
            }
          />
        <IconDropDownClock
          onMouseEnter={() => handleIconClick('icon3')}
          className={selectedIcon === 'icon3' ? stls.selected : stls.icon}
        />
        <IconDropDownDocuments
          onMouseEnter={() => handleIconClick('icon2')}
          className={selectedIcon === 'icon2' ? stls.selected : stls.icon}
        />

        <IconWeakVision
          onMouseEnter={() => handleIconClick('icon4')}
          className={selectedIcon === 'icon4' ? stls.selected : stls.icon}
        />
        <IconEnterToPortal
          onMouseEnter={() => handleIconClick('icon5')}
          className={selectedIcon === 'icon5' ? stls.selected : stls.icon}
        />
      </div>
      <div
        className={classNames(stls.popupContent, {
          [stls.open]: selectedIcon !== null
        })}>
        <ConnectInfo className={selectedIcon === 'icon1' ? stls.visible : stls.hidden} />
        <DocumentsSection className={selectedIcon === 'icon2' ? stls.visible : stls.hidden} />
        <TimeOfWork className={selectedIcon === 'icon3' ? stls.visible : stls.hidden} />
        <WeakVision className={selectedIcon === 'icon4' ? stls.visible : stls.hidden} />
        <DistanceStudy className={selectedIcon === 'icon5' ? stls.visible : stls.hidden} />
      </div>
    </div>
  )
}

export default IconsDropDown
