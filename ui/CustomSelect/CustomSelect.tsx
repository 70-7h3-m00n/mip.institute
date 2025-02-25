import { ReactNode, useState } from 'react'
import Select from 'react-select'

export type SelectOption = {
  label: string
  value: any
}

type Props = {
  options: Array<SelectOption>
  mainColor?: string
  onChange: (value: SelectOption) => void
  marginTop?: string
  placeholder?: string
  noOptionsMessage?: (obj: { inputValue: string }) => ReactNode
  value?: SelectOption
  isDisabled?: boolean
  radius?: string
  height?: string
  bgColor?: string
  textColor?: string
  menuBorderColor?: string
  onToggleCalendar?
}

const CustomSelect = ({
  options,
  mainColor = '#6f01c6',
  marginTop,
  onChange,
  placeholder = 'Выберите направление',
  noOptionsMessage = () => 'Ничего не найдено',
  value,
  isDisabled,
  radius,
  height,
  bgColor,
  textColor,
  menuBorderColor,
  onToggleCalendar
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
    control: base => {
      return {
        ...base,
        marginTop: `${marginTop ? marginTop : 0}px`,
        display: 'flex',
        flexWrap: 'nowrap',
        borderColor: `${isDisabled ? '#E9E9E9' : mainColor}`,
        borderRadius: `${radius ? radius : 10}px`,
        width: '100%',
        maxWidth: `380px`,
        height: `${height ? height : 50}px`,
        backgroundColor: `${bgColor ? bgColor : 'white'}`,
        fontFamily: 'Stem',
        fontSize: '14px',
        boxShadow: 'none',
        cursor: 'pointer',
        color: textColor ? `${textColor}` : 'black',
        '@media (max-width: 768px)': {
          maxWidth: '100%'
        },
        '&:hover': {
          backgroundColor: `${mainColor}`,
          '.react-select__single-value': {
            color: 'white'
          },
          '.react-select__dropdown-indicator': {
            color: 'white'
          },
          '.react-select__placeholder': {
            color: 'white',
            fontWeight: 500
          }
        }
      }
    },
    menu: base => ({
      ...base,
      background: 'white',
      border: `1px solid ${menuBorderColor ? menuBorderColor : '#E9E9E9'}`,
      borderRadius: '10px',
      marginTop: `5px`,
      width: '100%',
      maxWidth: `380px`,
      padding: '10px',
      zIndex: '2',
      '@media (max-width: 768px)': {
        maxWidth: '100%'
      }
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none'
    }),
    dropdownIndicator: base => ({
      ...base,
      color: textColor ? `${textColor}` : 'black',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
      width: '30px',
      '&:hover': {
        color: 'white'
      }
    }),
    option: (base, { isSelected, isDisabled }) => {
      return {
        ...base,
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: isSelected ? 500 : 100,
        color: isDisabled ? 'gray' : 'black',
        fontSize: '12px',
        backgroundColor: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        '&:active': {
          background: 'none'
        },
        '&:after': {
          content: isSelected ? '"✓"' : '""'
        },
        '&:hover': {
          color: isDisabled ? 'gray' : 'black',
          fontWeight: isDisabled ? 200 : 500
        }
      }
    },
    singleValue: base => {
      return {
        ...base,
        paddingLeft: '10px',
        paddingRight: '5px',
        color: textColor ? `${textColor}` : 'black',
        '&:hover': {
          color: 'white'
        }
      }
    },
    placeholder: (base, { isDisabled }) => {
      return {
        ...base,
        paddingLeft: '10px',
        color: isDisabled ? 'gray' : 'black',
        '&:hover': {
          color: 'white',
          fontWeight: '500'
        }
      }
    }
  }

  return (
    <Select
      options={options}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage}
      styles={customStyles}
      isSearchable={false}
      onChange={onChange}
      classNamePrefix='react-select'
      value={value}
      isDisabled={isDisabled}
      onMenuOpen={() => {
        setIsOpen(true)
        if (onToggleCalendar) {
          onToggleCalendar(false)
        }
      }}
      onMenuClose={() => {
        setIsOpen(false)
        if (onToggleCalendar) {
          onToggleCalendar(true)
        }
      }}
    />
  )
}

export default CustomSelect
