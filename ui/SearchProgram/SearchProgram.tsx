import fieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import convertEnglishToRussian from '@/helpers/convertEnglishToRussian'
import getProgramsData from '@/lib/data/getProgramsData'
import stls from './SearchProgram.module.sass'
import { useContext, useEffect, useRef, useState } from 'react'
import BtnField from '@/components/btns/BtnField'
import CardTooltip from '@/components/cards/CardTooltip'
import loadIcon from '@/helpers/general/loadIcon'

type Program = {
  id: string
  title: string
  description?: string
  slug: string
} // TODO проверить типизацию
export default function SearchProgram() {
  const { closeFieldsTooltip } = useContext(fieldsTooltipContext)

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([])
  const [programs, setPrograms] = useState<Program[]>([])

  useEffect(() => {
    const fetchPrograms = async () => {
      const allPrograms = await getProgramsData()
      setPrograms(allPrograms)
    }
    fetchPrograms()
  }, [])

  useEffect(() => {
    const filtered = programs.filter(program => {
      const programTitle = convertEnglishToRussian(program.title.toLowerCase())
      const query = convertEnglishToRussian(searchQuery.toLowerCase())
      return programTitle.includes(query)
    })
    setFilteredPrograms(filtered)
  }, [programs, searchQuery])

  const clickHandler = () => {
    setSearchQuery('')
    closeFieldsTooltip
  }

  const [isProgramsVisible, setIsProgramsVisible] = useState(false)

  const onFocusHandler = () => {
    setIsProgramsVisible(true)
  }

  const onBlurHandler = () => {
    setTimeout(() => {
      setSearchQuery('')
      setIsProgramsVisible(false)
    }, 100)
  }

  const programsRef = useRef(null)

  return (
    <div>
      <div className={stls.inputLoupe}>
        <input
          className={stls.searchInput}
          ref={programsRef}
          type='text'
          name='search'
          placeholder='Поиск'
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className={stls.icon}>{loadIcon('IconSearchAlt')}</div>
      </div>
      {isProgramsVisible && (
        <div className={stls.programs}>
          {filteredPrograms?.slice(0, 4).map((el, i) => (
            <>
              <CardTooltip profession={el} clickHandler={clickHandler} />
            </>
          ))}
          {filteredPrograms.length == 0 && (
            <>
              <p>К сожалению по вашему запросу ничего не найдено</p>
              <div className={stls.allPrograms}>
                <BtnField href='/programs'>Ознакомиться со всеми направлениями</BtnField>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
