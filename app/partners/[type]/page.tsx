import routes from '@/config/routes'
import axios from 'axios'
import React from 'react'
import qs from 'qs'
import PartnersNavigation from '@/components/partners/PartnersNavigation/PartnersNavigation'
import Wrapper from '@/ui/Wrapper'
import Player from '@/ui/Player/Player'

export const metadata = {
  title: 'Партнеры',
  description: '',
}

// Интерфейс для изображения
interface Image {
  id: number;
  documentId: string;
  url: string;
  width: number;
  height: number;
}

// Интерфейс для партнера
interface Partner {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

// Интерфейс для параметров страницы
interface Params {
  type: string;
}

const queryString = qs.stringify(
  {
    populate: {
      image: {
        fields: ['url', 'width', 'height'],
      },
    },
  },
  {
    encodeValuesOnly: true,
    skipNulls: true,
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
        Authorization: `Bearer ${process.env.STRAPI_BEARER}`,
      },
    }
  )

  return response.data.data
}

// Генерация статических параметров для ISR
export async function generateStaticParams(): Promise<Params[]> {
  const partners = await getAllPartners()
  const categories = Array.from(new Set(partners.map((partner) => partner.type)))
  return categories.map((type) => ({ type }))
}

// Главный компонент
export default async function Partners({ params }: { params: Params }) {
  const { type } = params

  // Получаем всех партнеров
  const allPartners = await getAllPartners()

  // Получаем все уникальные типы партнеров
  const allTypes: string[] = Array.from(new Set(allPartners.map((partner) => partner.type)))

  // Фильтруем партнеров по указанному типу
  const onePartner = allPartners.filter((partner) => partner.type === type)

  return (
    <Wrapper>
      <meta name="robots" content="noindex,nofollow" />
      <h1>Наши партнеры</h1>

      {/* Навигация по типам партнеров */}
        <PartnersNavigation types={allTypes} currentType={type} />
      {/* Отображение партнеров по типу */}
      
      {onePartner.length > 0 ? (
        onePartner.map((partner) => (
          <div key={partner.id} className="border p-4 my-4">
            <h2>{partner.title}</h2>
            <p>{partner.subtitle}</p>
            <img src={partner.image.url} alt={partner.title} width={200} />
          </div>
        ))
      ) : (
        <p>Партнеров данного типа нет.</p>
      )}
    </Wrapper>
  )
}
