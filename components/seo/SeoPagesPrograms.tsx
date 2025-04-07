import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, preview, routes } from '@/config/index'
import { TypeLibPrograms } from '@/types/index'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { FC } from 'react'
import getSeoDescription from '@/helpers/funcs/getSeoDescription'
import getSeoTitle from '@/helpers/funcs/getSeoTitle'

type TSeoPagesProgram = {
  curProgramsStudyFieldSlug?: string
  programs: TypeLibPrograms | undefined
}

const SeoPagesPrograms: FC<TSeoPagesProgram> = ({ programs }) => {
  const { asPath, query } = useRouter()

  const { ofType, studyFieldSlug, filter, opened } = query
  console.log(ofType);
  
  const seoParams = {
    title: getSeoTitle(ofType, studyFieldSlug),
    desc: getSeoDescription(ofType, studyFieldSlug),

    canonical: asPath.includes('dietologiya')
      ? `${routes.front.root}/professions/dietologiya-i-nutriciologiya`
      : `${routes.front.root}${asPath}`
  }
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={preview || filter || opened || (ofType === 'shortTerm' && !!studyFieldSlug) ? true : false}
        noindex={preview || filter || opened || (ofType === 'shortTerm' && !!studyFieldSlug) ? true : false}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <SeoOrganizationJsonLd />
    </>
  )
}

export default SeoPagesPrograms
