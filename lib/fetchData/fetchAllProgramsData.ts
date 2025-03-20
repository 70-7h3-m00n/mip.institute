import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { unstable_cache } from 'next/cache' // Используем кеширование Next.js
import { filterProgramsByType, getStudyFields, sortBasedOnNumericOrder } from '@/helpers/index'

// Функция с кешированием
export const fetchAllProgramsData = unstable_cache(
  async () => {
    try {
      const { data } = await apolloClient.query({
        query: gql`
          query GetProgramsData {
            programs {
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
        `,
        fetchPolicy: 'no-cache' // Отключаем кеш Apollo
      })

      // Применяем обработку данных
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
  },
  ['programs-data'], // Ключ кеша
  { revalidate: 3600 } // Данные обновляются раз в 1 час
)
