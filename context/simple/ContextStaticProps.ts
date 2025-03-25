import { createContext, Dispatch } from 'react'

export interface StaticContextType {
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
  setBachelor: Dispatch<any>
  setPracticalTrainings: Dispatch<any>
  setSeminar: Dispatch<any>
  updateTicketsQuantity: (newQuantity: number) => void
  setBlogs: Dispatch<any>
  setProgram: Dispatch<any>
  setPrograms: Dispatch<any>
  setCourses: Dispatch<any>
  setProfessions: Dispatch<any>
  setStudyFields: Dispatch<any>
  setStudyFieldsProfessions: Dispatch<any>
  setStudyFieldsCourses: Dispatch<any>
  setCurProgramsType: Dispatch<any>
  setCurProgramsStudyFieldSlug: Dispatch<any>
  setSearchTerm: Dispatch<any>
  setFilteredPrograms: Dispatch<any>
}

// TODO: figure out better types
const ContextStaticProps = createContext<StaticContextType>({
  program: null,
  reviews: [],
  programs: [],
  courses: [],
  professions: [],
  studyFields: [],
  studyFieldsProfessions: [],
  studyFieldsCourses: [],
  curProgramsType: null,
  curProgramsStudyFieldSlug: null,
  searchTerm: null,
  filteredPrograms: [],
  blogs: [],
  seminar: null,
  bachelor: null,
  practicalTrainings: null,
  setPracticalTrainings: () => {},
  setBachelor: () => {},
  setSeminar: () => {},
  updateTicketsQuantity: newQuantity => {},
  setBlogs: () => {},
  setProgram: () => {},
  setPrograms: () => {},
  setCourses: () => {},
  setProfessions: () => {},
  setStudyFields: () => {},
  setStudyFieldsProfessions: () => {},
  setStudyFieldsCourses: () => {},
  setCurProgramsType: () => {},
  setCurProgramsStudyFieldSlug: () => {},
  setSearchTerm: () => {},
  setFilteredPrograms: () => {}
})

export default ContextStaticProps
