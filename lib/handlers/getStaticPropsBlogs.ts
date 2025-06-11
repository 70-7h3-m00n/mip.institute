import revalidate from '@/config/revalidate'
import routes from '@/config/routes'
import axios from 'axios'
import qs from 'qs'
import { TypePageProgramsPropsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

// test token strapi v 5

const queryString = qs.stringify(
  {
    sort: ['date:desc'], // Сортировка по полю "date" в убывающем порядке
    populate: {
      picture: {
        fields: ['url', 'width', 'height']
      }
    },
    fields: [
      'id',
      'title',
      'slug',
      'subtitle',
      'studyField',
      'studyFieldSlug',
      'date',
      'previewOnly'
    ]
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)
export const getStaticPropsBlogs = async () => {
  try {
    const response = await axios.get(`${routes.back.rootv2}/api/blogs?${queryString}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER}` // Токен из .env
      }
    })
    const res = await apolloClient.query<TypePageProgramsPropsQuery>({
      query: gql`
        query GetStaticPropsPagePrograms {
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
            isPopular
            courseOpened
            heroPicture {
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
      props: {
        blogs: response?.data?.data || [],
        ...res.data
      },
      revalidate: revalidate.default ?? 10 // Добавляем fallback значение
    }
  } catch (e) {
    console.error('Ошибка при получении блогов:', e)

    return e
  }
}
