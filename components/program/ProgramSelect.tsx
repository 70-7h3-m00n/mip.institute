import React from 'react'
import Select from 'react-select'
import { useRouter } from 'next/router'
import sortOptions from 'constants/programSelect'

export type SortOption = {
  label: string
  value: {
    field: string
    direction: string
  }
}

type Option = {
  label: string
  value: string
}

type Props = {
  options?: Array<SortOption | Option>
  mainColor?: string
  onChange: (value: SortOption) => void
  marginTop?: string
  width?: string
}

const ProgramSelect = ({
  options = sortOptions,
  mainColor = '#6f01c6',
  marginTop,
  width,
  onChange
}: Props) => {
  const customStyles = {
    control: base => {
      return {
        ...base,
        marginTop: `${marginTop ? marginTop : 0}px`,
        display: 'flex',
        flexWrap: 'nowrap',
        borderColor: `${mainColor}`,
        borderRadius: '50px',
        width: `${width ? width : 240}px`,
        height: '40px',
        fontFamily: 'Stem',
        fontSize: '14px',
        boxShadow: 'none',
        cursor: 'pointer',
        color: 'black',
        '&:hover': {
          backgroundColor: `${mainColor}`,
          '.react-select__single-value': {
            color: 'white'
          },
          '.react-select__dropdown-indicator': {
            color: 'white'
          }
        }
      }
    },
    menu: base => ({
      ...base,
      background: 'white',
      borderColor: '#E9E9E9',
      borderRadius: '10px',
      marginTop: '0',
      width: `${width ? width : 240}px`,
      padding: '10px',
      zIndex: '2'
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none'
    }),
    dropdownIndicator: base => ({
      ...base,
      color: 'black',
      width: '30px',
      '&:hover': {
        color: 'white'
      }
    }),
    option: (base, { isSelected }) => {
      return {
        ...base,
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: isSelected ? 500 : 100,
        color: 'black',
        fontSize: '12px',
        backgroundColor: 'none',
        cursor: 'pointer',
        '&:active': {
          background: 'none'
        },
        '&:after': {
          content: isSelected ? '"✓"' : '""'
        },
        '&:hover': {
          color: '#565350',
          fontWeight: 500
        }
      }
    },
    singleValue: base => {
      return {
        ...base,
        paddingLeft: '10px',
        paddingRight: '5px',
        '&:hover': {
          color: 'white'
        }
      }
    },
    placeholder: base => {
      return {
        ...base,
        paddingLeft: '10px'
      }
    }
  }

  const router = useRouter()
  const { query } = router

  const handleSelectChange = (selectedOption: SortOption | null) => {
    if (!selectedOption) return

    try {
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...query,
            filter: selectedOption.value.field
          }
        },
        undefined,
        { scroll: false }
      )

      if (onChange) {
        onChange(selectedOption)
      }
    } catch (error) {
      console.error('Ошибка при обработке изменения селекта:', error)
    }
  }

  const isSortOption = (option: SortOption | Option): option is SortOption =>
    typeof option.value !== 'string'

  let defaultOption: SortOption | Option | undefined

  for (const option of options) {
    if (isSortOption(option)) {
      if (option.value.field === query.filter) {
        defaultOption = option
        break
      }
    } else {
      if (option.value === query.studyFieldSlug) {
        defaultOption = option
        break
      }
    }
  }

  return (
    <Select
      options={options}
      placeholder='Выберите направление'
      noOptionsMessage={() => 'Не нашлось подходящих направлений'}
      defaultValue={defaultOption}
      styles={customStyles}
      isSearchable={false}
      onChange={handleSelectChange}
      classNamePrefix='react-select'
      aria-label='Выбор сортировки'
    />
  )
}

export default ProgramSelect
