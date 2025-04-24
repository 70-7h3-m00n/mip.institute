import { Metadata } from 'next'
import { company, routes, prod } from '@/config/index'
import truncate from '@/helpers/general/truncate'
import NewAboutClient from '@/components/newAbout/NewAboutClient'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'

export const revalidate = 3600

export const generateMetadata = async (): Promise<Metadata> => {
  const title = `Об институте | ${company.desc} | ${company.name}`
  const description = truncate(company.about, 120)
  const canonical = `${routes.front.root}${routes.front.about}`

  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: prod,
      follow: prod
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: company.name,
      images: [
        {
          url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
          width: 512,
          height: 512,
          alt: company.name,
          type: 'image/png'
        }
      ]
    }
  }
}

export default async function AboutPage() {
  const allProgramsData = await fetchAllProgramsData()
  return (
    <div style={{ overflow: 'hidden' }}>
      <NewAboutClient all={allProgramsData} />
    </div>
  )
}
