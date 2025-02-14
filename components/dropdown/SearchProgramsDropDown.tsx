import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import stls from '@/styles/components/sections/Header.module.sass'
import CardTooltip from '../cards/CardTooltip'
import IconArrowRight from '@/components/icons/IconArrowRight'
import IconSearchAlt from '@/components/icons/IconSearchAlt'
import getProgramsData from '@/lib/data/getProgramsData'
import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import routes from '@/config/routes'
import BtnField from '../btns/BtnField'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'
import getUtmSourceFromCookie from '@/helpers/funcs/getUtmSourceFromCookie'

export default function SearchProgramsDropDown() {
  const list = useMemo(
    () => [
      {
        href: routes.front.about,
        val: 'Об институте'
      },
      {
        href: routes.front.lectoriums,
        val: 'Семинары'
      },
      {
        href: routes.front.supervision,
        val: 'Супервизия'
      },
      {
        href: routes.front.teachers,
        val: 'Преподаватели'
      },
      {
        href: routes.front.webinars,
        val: 'Вебинары'
      },
      {
        href: routes.front.journals,
        val: 'Журнал'
      },
      {
        href: routes.front.reviews,
        val: 'Отзывы'
      },
      {
        href: routes.front.vacancies,
        val: 'Вакансии'
      }
      // {
      //   href: routes.front.payment,
      //   val: 'Оплата обучения'
      // }
    ],
    []
  )
  const router = useRouter()
  const [descriptionText, setDescriptionText] = useState('Об институте')

  useEffect(() => {
    const currentRoute = router.pathname

    // Ищем элемент списка, соответствующий текущему пути
    const currentItem = list.find(item => item.href === currentRoute)

    if (currentItem) {
      setDescriptionText(currentItem.val)
    } else {
      setDescriptionText('Об институте')
    }
  }, [router.pathname, list])

  // направления
  const [directionOnHover, setDirectionOnHover] = useState(false)

  const directionsOnHoverHandler = () => {
    setDirectionOnHover(prev => !prev)
  }
  // направления

  // hidden INput
  const [isInputVisible, setInputVisible] = useState(false)
  const inputRef = useRef(null)
  const iconRef = useRef(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const handleDocumentClick = event => {
      // Проверяем, является ли цель клика иконкой или ее родителями
      if (
        (iconRef && iconRef.current.contains(event.target)) ||
        (inputRef && inputRef.current.contains(event.target))
      ) {
        return
      }
      // Если цель клика не связана с иконкой, скрываем инпут
      setInputVisible(false)
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    const fetchPrograms = async () => {
      const allPrograms = await getProgramsData()
      setPrograms(allPrograms)
    }
    fetchPrograms()
  }, [])

  const firstShownPrograms = [programs[11], programs[19], programs[8], programs[0]]

  useEffect(() => {
    const filtered = programs.filter(program => {
      const programTitle = convertEnglishToRussian(program.title.toLowerCase())
      const query = convertEnglishToRussian(searchQuery.toLowerCase())
      return programTitle.includes(query)
    })
    setFilteredPrograms(filtered)
  }, [programs, searchQuery])

  const handleIconSearchClick = () => {
    setInputVisible(prev => !prev)
    if (!isInputVisible) {
      setTimeout(() => {
        if (inputRef.current) {
          setTimeout(() => {
            inputRef.current.focus()
          }, 100)
        }
      }, 0)
    }
  }

  const cardClickHandler = () => {
    setInputVisible(prev => !prev)
    setSearchQuery('')
  }

  const [isEdpartners, setIsEdpartners] = useState(false)
  const partCookie = getCookie('utm')
  useEffect(() => {
    setTimeout(() => {
      const utmSource = getUtmSourceFromCookie()
      setIsEdpartners(utmSource === 'edpartners')
    }, 300)
  }, [isEdpartners, partCookie])

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
              programs[0] !== undefined &&
              firstShownPrograms &&
              firstShownPrograms?.map((el, i) => (
                <React.Fragment key={el.id}>
                  <CardTooltip profession={el} clickHandler={cardClickHandler} />
                </React.Fragment>
              ))}
            {searchQuery &&
              filteredPrograms?.slice(0, 4).map((el, i) => (
                <React.Fragment key={i}>
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
        onMouseEnter={directionsOnHoverHandler}
        onMouseLeave={directionsOnHoverHandler}>
        <p className={directionOnHover ? stls.directionPopupTextShown : stls.desriptionPopupText}>
          {descriptionText}
        </p>
        <div className={directionOnHover ? stls.directionsPopup : stls.hidden}>
          <div className={stls.oneDirection}>
            {list.map(item => (
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
      </div>
      <div className={stls.nums}>
        <a
          href={'tel:+7-499-110-88-19'}
          className={isInputVisible ? stls.hiddenText : stls.showText}>
          +7 (499) 110-88-19
        </a>
      </div>
    </div>
  )
}
