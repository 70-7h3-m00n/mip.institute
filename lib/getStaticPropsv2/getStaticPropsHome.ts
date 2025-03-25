import routes from '@/config/routes'
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
      // AdventureCards: {
      //   populate: {
      //     carousel: {
      //       populate: {
      //         slide: {
      //           populate: {
      //             files: {
      //               fields: ['url', 'width', 'height']
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      // },
      // MeetInstitute: {
      //   populate: '*'
      // },
      // studyProcess: {
      //   populate: '*'
      // },
      // programSelectionsTop: {
      //   populate: '*'
      // },
      // programSelectionsBottom: {
      //   populate: '*'
      // },
      // ourPossibilities: {
      //   populate: '*'
      // },
      // careerCenter: {
      //   populate: {
      //     img: {
      //       fields: ['url', 'width', 'height']
      //     }
      //   }
      // }
    }
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)

async function getStaticPropsHome(): Promise<any> {
  const response = await axios.get(`${routes.back.rootv2}/api/home?${queryString}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_BEARER}`
    }
  })

  return response.data.data
}

export default getStaticPropsHome