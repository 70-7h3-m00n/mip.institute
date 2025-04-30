import { company, routes, themeColor } from '@/config/index'
import preview from '@/config/preview'
import { CourseJsonLd, NextSeo } from 'next-seo'

const SeoPagesLectoriums = () => {
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
    title: 'Семинары по психологии в Москве | Очные тренинги и мастер-классы',
    programTitle: 'Семинары',
    desc: 'Лучшие образовательные мероприятия: очные семинары, тренинги, мастер-классы, супервизии и воркшопы для психологов от Московского Института Психологии |Оставьте онлайн-заявку на ближайшее событие!',
    canonical: 'https://mip.institute/lectorium'
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

export default SeoPagesLectoriums
