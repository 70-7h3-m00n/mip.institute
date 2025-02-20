import routes from '@/config/routes'
import axios from 'axios'
import React from 'react'
import qs from 'qs'

export const metadata = {
  title: 'Партнеры',
  description: '',
}


interface partners {
  data: {
    data: {
      id: string

    }[]
  }
  title: string
  content: string
}

const queryString = qs.stringify(
  {

    populate: '*'
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)

export const revalidate = 60
export const dynamicParams = true 

export async function generateStaticParams() {
  const partners =  await axios.get(`${routes.back.rootv2}/api/partners?${queryString}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_BEARER}` // Замените на ваш токен
    }
  })

  const categories = Array.from(
    new Set(partners?.data?.data?.map((partner) => partner.type))
  )
  console.log('AAA',categories);
  
  return categories.map((type) => ({ type }))
}

export default async function Partners({
  params,
}: {
  params: Promise<{ type: string }>
}) {

  
  const type = (await params).type

  const filter = qs.stringify(
    {
      filters: {
        type: {
          $eq: type
        }
      },
      populate: '*'
    },
    {
      encodeValuesOnly: true,
      skipNulls: true
    }
  )

  const onePartner =  await axios.get(`${routes.back.rootv2}/api/partners?${filter}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_BEARER}` // Замените на ваш токен
    }
  }).then((partner) => partner.data.data)

  console.log('typeDD',onePartner);
  
  return (
    <>
    <meta name="robots" content="noindex,nofollow" />
      <h1>lalalss</h1>
      {onePartner.map(partner => (
        <p key={partner.id}>{partner.title}</p>
      ))}
    </>
  )
}
