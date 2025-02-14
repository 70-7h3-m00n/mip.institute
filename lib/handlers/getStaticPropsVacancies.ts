import revalidate from '@/config/revalidate'
import routes from '@/config/routes'
import axios from 'axios'
import qs from 'qs'

const queryString = qs.stringify(
  {
    populate: {
      hero: {
        populate: '*'
      },
      seo: {
        populate: '*'
      },
      blocks: {
        populate: '*',
        on: {
          'vacancies.repeatable-quote-with-title': {
            populate: '*'
          },
          'shared.text-with-icon': {
            populate: '*'
          },
          'vacancies.slider-with-image': {
            populate: {
              
              slider: {
                populate: '*'
              },
              img: {
                populate: '*'
              }

            }
          },
          'shared.rich-text': {
            populate: '*'
          },
          'shared.rich-text-with-img': {
            populate: '*'
          },
          'vacancies.slider-with-img': {
            populate: '*'
          },
          'vacancies.recruitment': {
            populate: {
              recruiter: {
                populate: {
                  image: {
                    fields: ['url', 'width', 'height']
                  }
                }
              }
            }
          },
          'blog.list-with-bg-and-title': {
            populate: '*'
          }
        }
      }
    }
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)
export const getStaticPropsVacancies = async () => {
  try {
    const response = await axios.get(`${routes.back.rootv2}/api/vacancy?${queryString}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER}` // Замените на ваш токен
      }
    })
    return {
      props: {
        vacancies: response?.data?.data || []
      },
      revalidate: revalidate.default
    }
  } catch (e) {
    console.log(e)
  }
}
