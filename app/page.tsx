import HomeClient from '@/components/clientComponents/HomeClient'
import getStaticPropsHome from '@/lib/getStaticPropsv2/getStaticPropsHome'
import ABtestWrapper from '@/components/clientComponents/ABtestWrapper'
import PageOldMain from '@/components/pages/PageOldMain'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'
import { Metadata } from 'next'
import { company, prod, routes } from '../config'

export const revalidate = 3600
export const generateMetadata = (): Metadata => {
  // исправить каноникал перед продом и поменять noindex/nofollow на preview
  const title = `Московский Институт Психологии`
  const description =`Подробная информация о контактах и всех способах связи Московского Института Психологии: адреса в г. Москве (Докучаев переулок, 8) и г. Алматы, телефон +7 (499) 388-92-34 , электронная почта info@mip.institute`
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
