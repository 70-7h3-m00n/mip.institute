import revalidate from '@/config/revalidate'
import routes from '@/config/routes'
import axios from 'axios'
import qs from 'qs'

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

    return {
      props: {
        blogs: response?.data?.data || []
      },
      revalidate: revalidate.default ?? 10 // Добавляем fallback значение
    }
  } catch (e) {
    console.error('Ошибка при получении блогов:', e)

    return e
  }
}
