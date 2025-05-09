import HomeClient from '@/components/clientComponents/HomeClient'
import getStaticPropsHome from '@/lib/getStaticPropsv2/getStaticPropsHome'
import ABtestWrapper from '@/components/clientComponents/ABtestWrapper'
import PageOldMain from '@/components/pages/PageOldMain'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'
import { Metadata } from 'next'
import { company, prod, routes } from '../config'
import truncate from '@/helpers/general/truncate'

export const revalidate = 3600
export const generateMetadata = (): Metadata => {
  const title = `Московский Институт Психологии`
  const description =truncate(
    'Обучение на психолога: дополнительное психологическое образование (профессиональная переподготовка и повышение квалификации) по популярным направлениям вместе с экспертами Московского Института Психологии | Дипломы ФРДО',
    120
  )
  const canonical = `${routes.front.root}`
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

export default async function HomePage() {
  const homeProps = await getStaticPropsHome()
  const allProgramsData = await fetchAllProgramsData()

  

  return (
    <ABtestWrapper
      clientComponent={<PageOldMain all={allProgramsData} />}
      serverComponent={<HomeClient data={homeProps} all={allProgramsData} />}
    />
  )
}
