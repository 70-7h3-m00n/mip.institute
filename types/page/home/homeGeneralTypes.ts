interface BachelorProgram {
  title: string
  slug: string
  admissionDate: string
  minTime: number
  maxTime: number
  __typename: 'Bachelor'
}

// Общий тип для Program (courses, professions, shorts)
interface Program {
  title: string
  slug: string
  studyField?: string
  studyFieldSlug?: string
  type: 'Course' | 'Profession' | 'ShortTerm' // Тип программы
  typeLabel?: string
  studyMounthsDuration?: number
  studyHours?: number
  isPopular?: boolean // Предполагаем, что это поле может быть добавлено
  __typename: 'Program'
}

// Практическая тренировка
interface PracticalTraining {
  title: string
  slug: string
  duration: string
  __typename: 'PracticalTraining'
}

export enum ProgramFilter {
  Popular = 'popular',
  Professions = 'professions',
  Courses = 'courses',
  Bachelor = 'bachelor',
  Shorts = 'shorts',
  PracticalTrainings = 'practicalTrainings'
}

export type EducationalProgram = BachelorProgram | Program | PracticalTraining
