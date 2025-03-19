import { company, routes, themeColor } from '@/config/index'
import preview from '@/config/preview'
import { CourseJsonLd, NextSeo } from 'next-seo'
import { FC } from 'react'

type TSeoPagesProgram = {
  seo: {
    canonicalURL: string
    isSEOFriendly: boolean
    metaDescription: string
    metaTitle: string
  }
  programTitle: string
  canonical?: string
}

const SeoCommon: FC<TSeoPagesProgram> = ({
  seo,
  programTitle,
  canonical = ''
}) => {
  const isNoindex = !seo?.isSEOFriendly

  const isNofollow = !seo?.isSEOFriendly

  const seoParams = {
    title: seo.metaTitle ? seo.metaTitle : programTitle,
    programTitle: programTitle,
    desc: seo?.metaDescription,
    canonical: canonical ? canonical : seo?.canonicalURL
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        themeColor={themeColor}
        nofollow={preview ? true : isNofollow}
        noindex={preview ? true : isNoindex}
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
      <CourseJsonLd
        courseName={seoParams.programTitle}
        description={seoParams.desc}
        provider={{
          name: company.name,
          url: seoParams.canonical
        }}
      />
    </>
  )
}

export default SeoCommon
