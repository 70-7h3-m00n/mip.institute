import routes from '@/config/routes'
import { THomev2PageData } from '@/types/index'
import axios from 'axios'
import qs from 'qs'

const queryString = qs.stringify(
  {
    populate: {
      heroCarousel: {
        populate: {
          img: {
            fields: ['url', 'width', 'height']
          }
        }
      },
      publications: {
        populate: {
          slide: {
            populate: {
              files: {
                fields: ['url', 'width', 'height']
              }
            }
          }
        }
      },
      blogs: {
        fields: ['title', 'date', 'slug'],

        populate: {
          picture: {
            fields: ['url']
          }
        }
      },
      partners: {
        fields: ['title', 'subtitle'],
        populate: {
          image: {
            fields: ['url']
          }
        }
      },
      reviews: {
        populate: '*'
      }
    }
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)

async function getStaticPropsHome(): Promise<THomev2PageData> {
  const response = await axios.get(`${routes.back.rootv2}/api/home?${queryString}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_BEARER}`
    }
  })

  return response.data.data
}

export default getStaticPropsHome
