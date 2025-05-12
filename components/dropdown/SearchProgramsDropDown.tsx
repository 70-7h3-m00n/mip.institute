import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import stls from '@/styles/components/sections/Header.module.sass'
import CardTooltip from '../cards/CardTooltip'
import IconArrowRight from '@/components/icons/IconArrowRight'
import IconSearchAlt from '@/components/icons/IconSearchAlt'
import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import BtnField from '../btns/BtnField'
import { usePathname } from 'next/navigation'
import { useProgramsSafe } from '@/hooks/general/useSafeContext'
import { navigationItems } from 'constants/header'

type Program = {
  id: string
  title: string
  slug: string
  studyField: string
  studyFieldSlug: string
  type: string
  typeLabel: string
  studyMounthsDuration: number
  heroPicture: {
    url: string
    width: number
    height: number
  }
  index_number: {
    idx: number
  }
}

export default function SearchProgramsDropDown() {
  const [descriptionText, setDescriptionText] = useState<string>('Об институте')
  const [directionOnHover, setDirectionOnHover] = useState<boolean>(false)
  const [isInputVisible, setInputVisible] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([])
  const {
    state: { programs }
  } = useProgramsSafe()

  const inputRef = useRef<HTMLInputElement | null>(null)
  const iconRef = useRef<HTMLDivElement | null>(null)

  //Список ссылок

  const pathname = usePathname()

  // Обновляем текст описания при изменении `pathname`
  useEffect(() => {
    const currentItem = navigationItems.find(item => item.href === pathname)
    setDescriptionText(currentItem ? currentItem.val : 'Об институте')
  }, [pathname])

  // Обновляем `filteredPrograms` при изменении `searchQuery`
  useEffect(() => {
    if (!searchQuery) {
      setFilteredPrograms([])
      return
    }
    const filtered = programs.filter(program =>
      convertEnglishToRussian(program.title.toLowerCase()).includes(
        convertEnglishToRussian(searchQuery.toLowerCase())
      )
    )
    setFilteredPrograms(filtered)
  }, [programs, searchQuery])

  const firstShownPrograms = [programs?.[11], programs?.[19], programs?.[8], programs?.[0]]

  // Обработчик клика вне инпута
  const handleDocumentClick = useCallback((event: MouseEvent) => {
    if (
      (iconRef.current && iconRef.current.contains(event.target as Node)) ||
      (inputRef.current && inputRef.current.contains(event.target as Node))
    ) {
      return
    }
    setInputVisible(false)
  }, [])

  useEffect(() => {
    if (isInputVisible) {
      document.addEventListener('click', handleDocumentClick)
      return () => document.removeEventListener('click', handleDocumentClick)
    }
  }, [isInputVisible, handleDocumentClick])

  const cardClickHandler = () => {
    setInputVisible(prev => !prev)
    setSearchQuery('')
  }

  const handleIconSearchClick = () => {
    setInputVisible(prev => {
      const newState = !prev
      if (newState) {
        setTimeout(() => inputRef.current?.focus(), 100)
      }
      return newState
    })
  }

  return (
    <div className={stls.searchAndPrograms}>
      <div className={stls.inputContainer}>
        <input
          ref={inputRef}
          className={isInputVisible ? stls.input : stls.inputHidden}
          placeholder='Поиск'
          type='text'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div
          ref={iconRef}
          className={isInputVisible ? stls.searchIcon : stls.searchIconHidden}
          onClick={handleIconSearchClick}>
          <IconSearchAlt />
        </div>
        <div className={isInputVisible ? stls.programsPopUp : stls.hiddenProgramsPopUp}>
          <div className={isInputVisible ? stls.card : stls.hidden}>
            {!searchQuery &&
              firstShownPrograms
                .filter(el => el !== undefined)
                .map(el => (
                  <React.Fragment key={el!.id}>
                    <CardTooltip profession={el} clickHandler={cardClickHandler} />
                  </React.Fragment>
                ))}
            {searchQuery &&
              filteredPrograms.slice(0, 4).map(el => (
                <React.Fragment key={el.id}>
                  <CardTooltip profession={el} clickHandler={cardClickHandler} />
                </React.Fragment>
              ))}
          </div>
          {filteredPrograms.length === 0 && searchQuery && (
            <div className={stls.notFound}>
              <p className={stls.sorryText}>К сожалению, по вашему запросу ничего не найдено</p>
              <div onClick={cardClickHandler} className={stls.allPrograms}>
                <BtnField href='/programs'>Ознакомиться со всеми направлениями</BtnField>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={stls.desriptionPopup}
        onMouseEnter={() => setDirectionOnHover(true)}
        onMouseLeave={() => setDirectionOnHover(false)}>
        <p className={directionOnHover ? stls.directionPopupTextShown : stls.desriptionPopupText}>
          {descriptionText}
        </p>
        <div className={directionOnHover ? stls.directionsPopup : stls.hidden}>
          <div className={stls.oneDirection}>
            {navigationItems.map(item => (
              <div key={item.href + item.val} className={stls.popupLink}>
                <Link href={item.href} passHref>
                  {item.val}
                </Link>
                <div className={stls.arrowIcon}>
                  <IconArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={directionOnHover ? stls.directionsPopup : stls.hidden}>
          <div className={stls.oneDirection}>
            {navigationItems.map(item => (
              <div key={item.href + item.val} className={stls.popupLink}>
                <Link href={item.href} passHref>
                  {item.val}
                </Link>
                <div className={stls.arrowIcon}>
                  <IconArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>{' '}
      </div>
      <div className={stls.nums}>
        <a href='tel:+7-499-110-88-19' className={isInputVisible ? stls.hiddenText : stls.showText}>
          +7 (499) 110-88-19
        </a>
      </div>
    </div>
  )
}
