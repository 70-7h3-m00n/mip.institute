const lectoriumOptions = [
  { value: null, label: 'Тип', isDisabled: false },
  { value: 'offline', label: 'Очное', isDisabled: false },
  { value: 'online', label: 'Онлайн', isDisabled: false },
  { value: 'studentsOnly', label: 'Для студентов', isDisabled: false }
  // { value: 'paid', label: 'Платное', isDisabled: true },
  // { value: 'free', label: 'Бесплатное', isDisabled: true },
  // { value: 'presentation', label: 'Презентация программы', isDisabled: true }
]

const lectoriumPriceOptions = [
  { value: null, label: 'Цена', isDisabled: false },
  { value: 'more', label: 'Платно', isDisabled: false },
  { value: 'equal', label: 'Бесплатно', isDisabled: false }
]

const incomersStudyOptions = [
  { value: 'professions', label: 'Профессиональная переподготовка' },
  { value: 'practicalTrainings', label: 'Практическая подготовка' },
  { value: 'courses', label: 'Повышение квалификации' },
  { value: 'bachelors', label: 'Бакалавриат' }
]

export { lectoriumOptions, lectoriumPriceOptions, incomersStudyOptions }
