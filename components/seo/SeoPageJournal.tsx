import { company, preview, routes, themeColor } from '@/config/index'
import TypeLibJournal from '@/types/lib/journal/TypeLibJournal'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { FC } from 'react'

type TSeoPagesProgram = {
  blog: TypeLibJournal
}

const SeoPagesJournal: FC<TSeoPagesProgram> = ({ blog }) => {
  // const { metaTitle, metaDescription } = blog?.seo
  //@ts-ignore
  const publishDate = new Date(blog?.date)

  const additionalMetaRobotsKeys = [
    'nosnippet',
    'maxSnippet',
    'maxImagePreview',
    'maxVideoPreview',
    'noarchive',
    'unavailableAfter',
    'noimageindex',
    'notranslate'
  ]

  const seoParams = {
    title: `${
      blog?.seo?.[0]?.metaTitle ? blog?.seo?.[0]?.metaTitle : 'статья Московского Института Психологии'
    }`,
    desc: blog?.seo?.[0]?.metaDescription
      ? blog?.seo?.[0]?.metaDescription
      : 'Интересная статья о психологии' + ' ' + blog?.title,
    canonical: `${routes.front.root}${routes.front.journals}/${blog?.slug}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        themeColor={themeColor}
        nofollow={preview}
        noindex={preview}
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
      <ArticleJsonLd
        type='BlogPosting'
        url={`${routes.front.root}${routes.front.journals}/${blog?.slug}`}
        //@ts-ignore
        title={blog?.title}
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg'
        ]}
        // datePublished={publishDate?.toISOString()}
        // dateModified={publishDate?.toISOString()}
        authorName={blog?.teacher?.name}
        //@ts-ignore
        description={blog?.subtitle}
      />
    </>
  )
}

export default SeoPagesJournal
