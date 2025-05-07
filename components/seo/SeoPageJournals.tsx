import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, preview, routes } from '@/config/index'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'


const SeoPagesJournals= () => {
  const { asPath } = useRouter()
  

  const seoParams = {
    title: 'Статьи о психологии и психотерапии | Московский Институт Психологии',
    desc: 'Интересные психологические статьи о психотерапии, психологии, ментальном здоровье и саморазвитии. Комментарии и советы экспертов-практиков. Актуальные новости из мира психологии.',
    canonical:`${routes.front.root}${asPath}`,
    
    }
  return (
    <>
      <NextSeo
        nofollow={preview ? true : false}
        noindex={preview ? true : false}
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
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
          site_name: company.name,
          
        }}
      />
      <SeoOrganizationJsonLd />
    </>
  )
}

export default SeoPagesJournals
