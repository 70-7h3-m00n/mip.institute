import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { filterProgramsByType, getStudyFields, sortBasedOnNumericOrder } from '@/helpers/index'

export const fetchAllProgramsData = async () => {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query GetProgramsData {
          programs(sort: "index_number.idx:asc") {
            id
            title
            slug
            studyField
            studyFieldSlug
            type
            typeLabel
            studyMounthsDuration
            studyHours
            price
            heroPicture {
              url
              width
              height
            }
            index_number {
              idx
            }
          }
          bachelors {
            slug
            offlineFullPrice
            heroPicture {
              url
              width
              height
            }
            educationCode
            title
            admissionDate
            minTime
            maxTime
          }
          practicalTrainings {
            title
            duration
            slug
            price
            heroPicture {
              url
              width
              height
            }
          }
          teachers {
            id
            name
            achievements
            specialization
            experience
            portrait {
              url
              width
              height
            }
            index_number {
              idx
            }
          }
          reviews(sort: "createdAt:desc") {
            id
            name
            profession
            title
            story
            createdAt
            picture {
              url
              width
              height
            }
            index_number {
              idx
            }
          }
        }
      `
    })

    // Применяем логику обработки данных
    const programs = sortBasedOnNumericOrder({ programs: data.programs }) || []
    const courses = filterProgramsByType({ programs, type: 'course' }) || []
    const professions = filterProgramsByType({ programs, type: 'profession' }) || []
    const blogs = data.seminars || []
    const studyFields = getStudyFields(programs) || []
    const studyFieldsProfessions = getStudyFields(professions) || []
    const studyFieldsCourses = getStudyFields(courses) || []

    return {
      program: null,
      programs,
      reviews: data.reviews || [],
      courses,
      professions,
      studyFields,
      studyFieldsProfessions,
      studyFieldsCourses,
      curProgramsType: null,
      curProgramsStudyFieldSlug: null,
      searchTerm: null,
      filteredPrograms: [],
      blogs,
      seminar: null,
      bachelor: data.bachelors || null,
      practicalTrainings: data.practicalTrainings || null
    }
  } catch (error) {
    console.error('Ошибка загрузки программ:', error)
    return {
      program: null,
      programs: [],
      reviews: [],
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
      practicalTrainings: null
    }
  }
}
