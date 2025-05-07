import routes from '@/config/routes'
import axios from 'axios'
import React from 'react'
import qs from 'qs'
import IncomersClient from '@/components/clientComponents/IncomersClient'
import { company, prod } from '@/config/index'
import { Metadata } from 'next'

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

export const generateMetadata = (): Metadata => {
  const title = 'Поступление в Московский Институт Психологии'
  const description =
    'Подробная информация для поступающих и абитуриентов Московского Института Психологии: условия поступления, широкий выбор программ, учебный процесс, условия оплаты, а так же помощь в подборе программы от наших специалистов.'
  const canonical = `${routes.front.root}${routes.front.incomers}`
  const logoUrl = `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`

  return {
    title,
    description,
    alternates: {
      canonical
    },
    robots: {
      index: prod,
      follow: prod
    },
    openGraph: {
      url: canonical,
      title,
      description,
      images: [
        {
          url: logoUrl,
          width: 512,
          height: 512,
          alt: title,
          type: 'image/png'
        }
      ],
      siteName: company.name
    }
  }
}

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
