import revalidate from '@/config/revalidate'
import routes from '@/config/routes'
import axios from 'axios'
import qs from 'qs'

const queryString = qs.stringify(
  {
    populate: {
      incomersInfo: {
        populate: {
          img :{
            fields: ['url', 'width', 'height']
          }
        },

      },
      AdventureCards: {
        populate: {
          carousel: {
            populate: {
              slide: {
                populate: {
                  files: {
                    fields: ['url', 'width', 'height']
                  }
                }
              }
            }
          }
        }
      },
      MeetInstitute: {
        populate: '*'
      },
      studyProcess: {
        populate: '*'
      },
      programSelectionsTop: {
        populate: '*'
      },
      programSelectionsBottom: {
        populate: '*'
      },
      ourPossibilities: {
        populate: '*'
      },
      careerCenter: {
        populate: {
          img :{
            fields: ['url', 'width', 'height']
          }
        }
      },
    }
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)
export const getStaticPropsIncomers = async () => {
  try {
    
    const response = await axios.get(`${routes.back.rootv2}/api/incomer?${queryString}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER}` // Замените на ваш токен
      }
    })
    
    return {
      props: {
        incomers: response?.data?.data || []
      },
      revalidate: revalidate.default
    }
  } catch (e) {
    console.log(e.response.data)
    return {
      props: {
        incomers: e.response.data || []
      },
    }
  }
}
