import routes from '@/config/routes'
import axios from 'axios'
import React from 'react'
import qs from 'qs'
import OurPartners from '@/components/partners/OurPartners/OurPartners'
import { Params, Partner } from '@/components/partners/type'
import CommunitySection from '@/components/partners/CommunitySection/CommunitySection'
import BecomePartner from '@/components/partners/BecomePartner/BecomePartner'
import Office from '@/components/contacts/Office/Office'
import Requisites from '@/components/contacts/Requisites/Requisites'
import BottomBlock from '@/components/sections/lectorium/Stub/BottomBlock/BottomBlock'
import Wrapper from '@/ui/Wrapper'
import RouteMIP from '@/components/contacts/RouteMIP/RouteMIP'

export const metadata = {
  title: 'Партнеры Московского Института Психологии (МИП)',
  description: 'Подробная информация о действующих партнерах Московского Института Психологии (МИП)'
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
export default async function Partners({ params }: { params: Params }) {
  const { type } = params

  // Получаем всех партнеров
  const allPartners = await getAllPartners()

  // Получаем все уникальные типы партнеров
  const allTypes: string[] = Array.from(new Set(allPartners.map(partner => partner.type)))

  // Фильтруем партнеров по указанному типу
  const onePartner = allPartners.filter(partner => partner.type === type)

  return (
    <>
      <meta name='robots' content='index, follow' />
      <RouteMIP />
      <Wrapper>
        <BottomBlock />
      </Wrapper>
      <Office />
      <Requisites />
      <CommunitySection />
      <OurPartners allTypes={allTypes} currentType={type} onePartner={onePartner} />
      <BecomePartner />
    </>
  )
}
