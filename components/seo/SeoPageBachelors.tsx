import { company, routes, themeColor } from '@/config/index'
import preview from '@/config/preview'
import { CourseJsonLd, NextSeo } from 'next-seo'

const SeoPagesBachelors = () => {
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
    title: 'Психология: высшее образование | Программы бакалавриата',
    programTitle: 'Высшее образование',
    desc: 'Программы высшего образования (бакалавритат) по психологии от Московского Института Психологии с получением диплома государственного образца | Форма обучения: дистанционно и очно. Станьте востребованным психологом в современном ВУЗе!',
    canonical: 'https://mip.institute/bachelor'
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

export default SeoPagesBachelors
