'use client'
import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'

export enum ProgramsActionTypes {
  SET_PROGRAM = 'SET_PROGRAM',
  SET_PROGRAMS = 'SET_PROGRAMS',
  SET_COURSES = 'SET_COURSES',
  SET_REVIEWS = 'SET_REVIEWS',
  SET_PROFESSIONS = 'SET_PROFESSIONS',
  SET_STUDY_FIELDS = 'SET_STUDY_FIELDS',
  SET_STUDY_FIELDS_PROFESSIONS = 'SET_STUDY_FIELDS_PROFESSIONS',
  SET_STUDY_FIELDS_COURSES = 'SET_STUDY_FIELDS_COURSES',
  SET_CUR_PROGRAMS_TYPE = 'SET_CUR_PROGRAMS_TYPE',
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG = 'SET_CUR_PROGRAMS_STUDY_FIELD_SLUG',
  SET_SEARCH_TERM = 'SET_SEARCH_TERM',
  SET_FILTERED_PROGRAMS = 'SET_FILTERED_PROGRAMS',
  SET_BLOGS = 'SET_BLOGS',
  SET_SEMINAR = 'SET_SEMINAR',
  SET_BACHELOR = 'SET_BACHELOR',
  SET_PRACTICAL_TRAININGS = 'SET_PRACTICAL_TRAININGS',
  UPDATE_TICKETS_QUANTITY = 'UPDATE_TICKETS_QUANTITY'
}

interface State {
  program: any
  reviews: any[]
  programs: any[]
  courses: any[]
  professions: any[]
  studyFields: any[]
  studyFieldsProfessions: any[]
  studyFieldsCourses: any[]
  curProgramsType: string | null
  curProgramsStudyFieldSlug: string | null
  searchTerm: string | null
  filteredPrograms: any[]
  blogs: any[]
  seminar: any
  bachelor: any
  practicalTrainings: any
}

type Action =
  | { type: ProgramsActionTypes.SET_PROGRAM; payload: any }
  | { type: ProgramsActionTypes.SET_PROGRAMS; payload: any[] }
  | { type: ProgramsActionTypes.SET_COURSES; payload: any[] }
  | { type: ProgramsActionTypes.SET_REVIEWS; payload: any[] }
  | { type: ProgramsActionTypes.SET_PROFESSIONS; payload: any[] }
  | { type: ProgramsActionTypes.SET_STUDY_FIELDS; payload: any[] }
  | { type: ProgramsActionTypes.SET_STUDY_FIELDS_PROFESSIONS; payload: any[] }
  | { type: ProgramsActionTypes.SET_STUDY_FIELDS_COURSES; payload: any[] }
  | { type: ProgramsActionTypes.SET_CUR_PROGRAMS_TYPE; payload: string | null }
  | { type: ProgramsActionTypes.SET_CUR_PROGRAMS_STUDY_FIELD_SLUG; payload: string | null }
  | { type: ProgramsActionTypes.SET_SEARCH_TERM; payload: string | null }
  | { type: ProgramsActionTypes.SET_FILTERED_PROGRAMS; payload: any[] }
  | { type: ProgramsActionTypes.SET_BLOGS; payload: any[] }
  | { type: ProgramsActionTypes.SET_SEMINAR; payload: any }
  | { type: ProgramsActionTypes.SET_BACHELOR; payload: any }
  | { type: ProgramsActionTypes.SET_PRACTICAL_TRAININGS; payload: any }
  | { type: ProgramsActionTypes.UPDATE_TICKETS_QUANTITY; payload: number }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ProgramsActionTypes.SET_PROGRAM:
      return { ...state, program: action.payload }
    case ProgramsActionTypes.SET_PROGRAMS:
      return { ...state, programs: action.payload }
    case ProgramsActionTypes.SET_COURSES:
      return { ...state, courses: action.payload }
    case ProgramsActionTypes.SET_REVIEWS:
      return { ...state, reviews: action.payload }
    case ProgramsActionTypes.SET_PROFESSIONS:
      return { ...state, professions: action.payload }
    case ProgramsActionTypes.SET_STUDY_FIELDS:
      return { ...state, studyFields: action.payload }
    case ProgramsActionTypes.SET_STUDY_FIELDS_PROFESSIONS:
      return { ...state, studyFieldsProfessions: action.payload }
    case ProgramsActionTypes.SET_STUDY_FIELDS_COURSES:
      return { ...state, studyFieldsCourses: action.payload }
    case ProgramsActionTypes.SET_CUR_PROGRAMS_TYPE:
      return { ...state, curProgramsType: action.payload }
    case ProgramsActionTypes.SET_CUR_PROGRAMS_STUDY_FIELD_SLUG:
      return { ...state, curProgramsStudyFieldSlug: action.payload }
    case ProgramsActionTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload }
    case ProgramsActionTypes.SET_FILTERED_PROGRAMS:
      return { ...state, filteredPrograms: action.payload }
    case ProgramsActionTypes.SET_BLOGS:
      return { ...state, blogs: action.payload }
    case ProgramsActionTypes.SET_SEMINAR:
      return { ...state, seminar: action.payload }
    case ProgramsActionTypes.SET_BACHELOR:
      return { ...state, bachelor: action.payload }
    case ProgramsActionTypes.SET_PRACTICAL_TRAININGS:
      return { ...state, practicalTrainings: action.payload }
    case ProgramsActionTypes.UPDATE_TICKETS_QUANTITY:
      return {
        ...state,
        seminar: state.seminar ? { ...state.seminar, tickets_quantity: action.payload } : null
      }
    default:
      return state
  }
}

export const AppContext = createContext<{ state: State; dispatch: Dispatch<Action> } | null>(null)

export const AppContextProvider = ({
  children,
  initialData
}: {
  children: ReactNode
  initialData: State
}) => {
  const [state, dispatch] = useReducer(reducer, initialData)
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('usePrograms must be used within a AppContextProvider')
  }
  return context
}
