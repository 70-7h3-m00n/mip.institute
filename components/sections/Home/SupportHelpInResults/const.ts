export const tabs = [
  'Опытные кураторы',
  'Центр карьеры',
  'Сообщество выпускников',
  'Практика',
  'Супервизии'
]

export const customStyles = {
  control: base => ({
    ...base,
    borderRadius: '100px',
    border: '1px solid #8F60FF',
    padding: '7px 22px',
    fontFamily: 'Mulish',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '16px',
    boxShadow: 'none',
    outline: 'none',
    background: '#F9F6FF'
  }),
  menu: base => ({
    ...base,
    borderRadius: '20px',
    overflow: 'hidden',
    color: '#FFF',
    background: '#F9F6FF',
    border: '1px solid #8F60FF'
  }),
  option: (base, { isSelected }) => ({
    ...base,
    background: isSelected ? '#8F60FF' : '#F9F6FF',
    color: isSelected ? 'white' : '#212121',
    cursor: 'pointer',
    '&:hover': { background: '#F9F6FF' }
  }),
  singleValue: base => ({
    ...base,
    color: '#212121',
    fontFamily: 'Mulish',
    fontSize: '15px',
    fontWeight: '700'
  }),
  dropdownIndicator: base => ({
    ...base,
    color: '#212121',
    '&:hover': { color: '#8F60FF' }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}
