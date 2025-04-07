import { formOptions, levelOptions } from 'constants/customSelect'
import {
  studyFieldsBachelor,
  studyFieldsCourses,
  studyFieldsProfessions,
  studyFieldsShortTerm
} from 'constants/studyFieldsOnMain'
import { useEffect, useState } from 'react'
import stls from 'styles/components/sections/ProgramsOnMain.module.sass'
import CardProfession from '../cards/CardProfession'
import FilterTag from '../filters/FilterTag'
import CustomSelect from '@/ui/CustomSelect'
import { SelectOption } from '@/ui/CustomSelect/CustomSelect'

type Props = {
  allPrograms: any[]
}

const ProgramsOnMain = ({ allPrograms }: Props) => {
  const [currentType, setCurrentType] = useState<SelectOption | null>(null)
  const [selectedLabel, setSelectedLabel] = useState<SelectOption | null>(null)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [number, setNumber] = useState(3)
  const [programs, setPrograms] = useState(allPrograms)

  const programsMap = {
    course: studyFieldsCourses,
    profession: studyFieldsProfessions,
    bachelor: studyFieldsBachelor,
    shortterm: studyFieldsShortTerm
  }

  const filterPrograms = () => {
    return allPrograms.filter(program => {
      const typeMatch = currentType
        ? currentType.value === 'Bachelor' || currentType.value === 'PracticalTraining'
          ? program.__typename === currentType.value
          : program.type === currentType.value
        : true

      const labelMatch = selectedLabel
        ? currentType?.value === 'Bachelor'
          ? program.slug === selectedLabel.value
          : program.studyFieldSlug === selectedLabel.value
        : true

      const filterMatch =
        activeFilters.length > 0 ? activeFilters.includes(program.studyField) : true

      return typeMatch && labelMatch && filterMatch
    })
  }

  useEffect(() => {
    const newPrograms = filterPrograms()
    setPrograms(newPrograms)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentType, selectedLabel, activeFilters, allPrograms])

  const handleSetCurrentType = (selectedOption: SelectOption) => {
    setCurrentType(selectedOption)
    setSelectedLabel(null)
    setActiveFilters([])
    setNumber(3)
  }

  const handleSelectedLabel = (selectedOption: SelectOption) => {
    setSelectedLabel(selectedOption)
  }

  const handleFilterToggle = (label: string) => {
    setCurrentType(null)
    setSelectedLabel(null)
    setNumber(3)
    setActiveFilters(prev => {
      if (label === '') {
        return []
      } else if (prev.includes(label)) {
        return prev
      } else {
        return [label]
      }
    })
  }

  const showMore = () => setNumber(prev => Math.min(prev + 6, programs.length))

  return (
    <div className={stls.container}>
      <h2 className={stls.title}>Программы обучения</h2>
      <div className={stls.selects}>
        <CustomSelect
          onChange={handleSetCurrentType}
          options={levelOptions}
          placeholder='Уровень образования'
          value={currentType ?? undefined}
        />
        <CustomSelect
          onChange={handleSelectedLabel}
          options={programsMap[currentType?.value.toLowerCase()] || []}
          placeholder='Направления'
          value={selectedLabel ?? undefined}
          isDisabled={!currentType || currentType.value === 'PracticalTraining'}
        />
        <CustomSelect
          onChange={() => {}}
          options={formOptions}
          placeholder='Форма обучения'
          isDisabled={!selectedLabel || currentType?.value === 'Bachelor'}
        />
      </div>
      <div className={stls.tags}>
        {['', 'Консультирование', 'Психотерапия', 'Клиническая психология'].map(label => (
          <FilterTag
            key={label}
            onClick={() => handleFilterToggle(label)}
            isActive={activeFilters.includes(label)}
            isProgram={label === ''}
            isCategories={label !== ''}>
            {label || 'Все курсы'}
          </FilterTag>
        ))}
      </div>
      <div className={stls.cards}>
        {programs.slice(0, number).map(el => (
          <CardProfession key={`${el.id} - ${el.title}`} profession={el} onMain />
        ))}
      </div>
      {programs.length > number && programs.length > 3 && (
        <div className={stls.btnContainer}>
          <button className={stls.btn} onClick={showMore}>
            Показать еще
            <span className={stls.amount}>{programs.length - number}</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default ProgramsOnMain
