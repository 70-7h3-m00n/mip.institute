import routes from '@/config/routes'
import axios from 'axios'
import React from 'react'
import qs from 'qs'
import OurPartners from '@/components/partners/OurPartners/OurPartners'
import { Params, Partner } from '@/components/partners/type'
import CommunitySection from '@/components/partners/CommunitySection/CommunitySection'
import BecomePartner from '@/components/partners/BecomePartner/BecomePartner'
import company from '@/config/company'
import prod from '@/config/prod'
import { Metadata } from 'next'

export const generateMetadata = ({ params }): Metadata => {
  const { type } = params

  const title = 'Партнеры Московского Института Психологии '
  const description =
    'Подробная информация о действующих партнерах Московского Института Психологии '
  const canonical = `${routes.front.root}/partners/${type}`
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

const queryString = qs.stringify(
  {
    populate: {
      image: {
        fields: ['url', 'width', 'height']
      }
    }
  },
  {
    encodeValuesOnly: true,
    skipNulls: true
  }
)

export const revalidate = false
export const dynamicParams = false

// Функция получения всех партнеров
async function getAllPartners(): Promise<Partner[]> {
  const response = await axios.get<{ data: Partner[] }>(
    `${routes.back.rootv2}/api/partners?${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER}`
      }
    }
  )

  return response.data.data
}

// Генерация статических параметров для ISR
export async function generateStaticParams(): Promise<Params[]> {
  const partners = await getAllPartners()
  const categories = Array.from(new Set(partners.map(partner => partner.type)))
  return categories.map(type => ({ type }))
}

// Главный компонент
export default async function Partners() {
  // Получаем всех партнеров
  const allPartners = await getAllPartners()

  // Получаем все уникальные типы партнеров
  const allTypes: string[] = Array.from(new Set(allPartners.map(partner => partner.type)))

  return (
    <>
      <CommunitySection />
      <OurPartners allTypes={allTypes} allPartners={allPartners} />
      <BecomePartner />
    </>
  )
}
