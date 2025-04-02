import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { unstable_cache } from 'next/cache'
import { filterProgramsByType, getStudyFields, sortBasedOnNumericOrder } from '@/helpers/index'
import { ProgramsDataQueryResult } from '@/types/page/home/homeGeneralTypes'

// Функция с кешированием
export const fetchAllProgramsData = unstable_cache(
  async (): Promise<ProgramsDataQueryResult> => {
    try {
      const { data } = await apolloClient.query({
        query: gql`
          query GetProgramsData {
            programs {
              shortDescription
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
              tag
              isPopular
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
              shortDescription
              isPopular
              tag
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
              shortDescription
              isPopular
              tag
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
        `,
        fetchPolicy: 'no-cache' // Отключаем кеш Apollo
      })

      // Применяем обработку данных
      const programs = sortBasedOnNumericOrder({ programs: data.programs }) || []
      const courses = filterProgramsByType({ programs, type: 'course' }) || []
      const professions = filterProgramsByType({ programs, type: 'profession' }) || []
      const blogs = data.seminars || []
      const studyFields = getStudyFields(programs)?.map(f => f.label) || []
      const studyFieldsProfessions = getStudyFields(professions)?.map(f => f.label) || []
      const studyFieldsCourses = getStudyFields(courses)?.map(f => f.label) || []
      const teachers = data.teachers || []

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
        teachers,
        blogs,
        seminar: null,
        bachelor: data.bachelors || null,
        practicalTrainings: data.practicalTrainings || null
      }
    } catch (error) {
      console.error('Ошибка загрузки программ:', error)
      // Возвращаем плоский объект в случае ошибки
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
        teachers: [],
        seminar: null,
        bachelor: [],
        practicalTrainings: []
      }
    }
  },
  ['programs-data'], // Ключ кеша
  { revalidate: 3600 } // Данные обновляются раз в 1 час
)
