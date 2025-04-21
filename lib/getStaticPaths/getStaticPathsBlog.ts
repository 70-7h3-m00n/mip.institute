import routes from '@/config/routes'
import axios from 'axios'
import qs from 'qs'

const queryString = qs.stringify(
  {
    fields: ['slug', 'studyField']
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)

export const getStaticPathsBlogs = async () => {
  try {
    const response = await axios.get(`${routes.back.rootv2}/api/blogs?${queryString}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER}`
      }
    })

    const blogs = response?.data?.data || []

    const paths = blogs
      .filter(blog => blog?.slug) // Пропускаем записи без slug
      .map(blog => ({
        params: {
          slug: blog.slug
        }
      }))

    return {
      paths,
      fallback: 'blocking'
    }
  } catch (e) {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}
