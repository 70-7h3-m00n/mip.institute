import {
  TypeGeneralGetStaticPropsContext,
  TypePageHomeProps,
  TypePageHomePropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageHome = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageHomeProps
  revalidate: number | boolean
}> => {
  try {
  const res = await apolloClient.query<TypePageHomePropsQuery>({
    query: gql`
      query GetStaticPropsPageHome {
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
          # admissionDate
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
        reviews {
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

  return {
    props: res.data,
    revalidate: revalidate.default
  }
} catch (error) {
  console.error('Ошибка запроса:', error)
  console.error('Статус код:', error.statusCode)
  console.error('Результат:', error.result)
  console.log('errrrrrr', error.networkError.result)
  return error
}
}

export default getStaticPropsPageHome
