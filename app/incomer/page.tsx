import routes from '@/config/routes'
import axios from 'axios'
import React from 'react'
import qs from 'qs'
import IncomersClient from '@/components/clientComponents/IncomersClient'

// export const metadata = {
//   title: 'Партнеры Московского Института Психологии (МИП)',
//   description: 'Подробная информация о действующих партнерах Московского Института Психологии (МИП)'
// }

const queryString = qs.stringify(
  {
    populate: {
      incomersInfo: {
        populate: {
          img: {
            fields: ['url', 'width', 'height']
          }
        }
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
          img: {
            fields: ['url', 'width', 'height']
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

export const revalidate = false

async function getAllIncomersData(): Promise<any> {
  const response = await axios.get(`${routes.back.rootv2}/api/incomer?${queryString}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_BEARER}`
    }
  })

  return response.data.data
}

export default async function IncomersPage() {
  const incomers = await getAllIncomersData()

  return <IncomersClient incomers={incomers} />
}
