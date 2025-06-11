import { EducationalProgram } from '@/types/page/home/homeGeneralTypes'
import { routes } from '@/config/index'

const getDurationText = (card: EducationalProgram) => {
  if ('duration' in card && card.duration) {
    return card.duration // Для PracticalTraining
  }
  if (
    'studyMounthsDuration' in card &&
    card.studyMounthsDuration &&
    'studyHours' in card &&
    card.studyHours
  ) {
    return `${card.studyMounthsDuration} мес. / ${card.studyHours} часов` // Для Program
  }
  if ('minTime' in card && 'maxTime' in card) {
    return `${card.minTime} - ${card.maxTime} лет` // Для Bachelor
  }
  return null
}

const getDurationTextStandart = (card: EducationalProgram) => {
  if (
    'studyMounthsDurationStandart' in card &&
    card.studyMounthsDurationStandart &&
    'studyHoursStandart' in card &&
    card.studyHoursStandart
  ) {
    return `${card.studyMounthsDurationStandart} мес. / ${card.studyHoursStandart} часов` // Для Program
  }
  return null
}

const getProgramCategory = (program: EducationalProgram): string => {
  switch (program.__typename) {
    case 'Bachelor':
      return 'Бакалавриат'
    case 'PracticalTraining':
      return 'Практика'
    case 'Program':
      switch (program.type) {
        case 'Profession':
          return 'Профессиональная переподготовка'
        case 'Course':
          return 'Повышение квалификации'
        case 'ShortTerm':
          return 'Курсы'
        default:
          return 'Неизвестная категория'
      }
    default:
      return 'Неизвестная категория'
  }
}

const getProgramLink = (program: EducationalProgram): string => {
  switch (program.__typename) {
    case 'Bachelor':
      return `${routes.front.bachelor.replace('slug', program.slug)}`
    case 'PracticalTraining':
      return `${routes.front.practicalTraining.replace('slug', program.slug)}`
    case 'Program':
      switch (program.type) {
        case 'Profession':
          return `${routes.front.professions}/${program.studyFieldSlug}/${program.slug}`
        case 'Course':
          const studyFieldSlug = program.studyFieldSlug || 'default'
          return `${routes.front.courses}/${studyFieldSlug}/${program.slug}`
        case 'ShortTerm':
          return `${routes.front.shortTerm}/${program.studyFieldSlug}/${program.slug}`
        default:
          return routes.front.programs
      }
    default:
      return routes.front.programs
  }
}

export { getDurationText, getProgramLink, getProgramCategory, getDurationTextStandart }
