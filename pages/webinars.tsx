import { GetStaticProps, NextPage } from 'next'
import { TypeLibWebinars, TypePageWebinarsProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import { sortBasedOnNumericOrder } from '@/helpers/index'
import { routes, company, preview } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { lazy } from 'react'
import truncate from '@/helpers/general/truncate'
const WebinarsAlt = lazy(() => import('@/components/sections/WebinarsAlt'))

const WebinarsPage: NextPage<TypePageWebinarsProps> = ({
  programs,
  webinars
}) => {
  //@ts-ignore
  useHandleContextStaticProps({ programs })
//@ts-ignore
  const webinarsSorted: TypeLibWebinars = sortBasedOnNumericOrder({ webinars })
  const seoParams = {
    title: `Вебинары | ${company.desc} | ${company.name}
    `,
    desc: truncate(
      //@ts-ignore
      `${webinarsSorted[webinarsSorted.length - 1].title}, 
      
      ${
        //@ts-ignore
        webinarsSorted[webinarsSorted.length - 1].name
      } | ${
        //@ts-ignore
        webinarsSorted[webinarsSorted.length - 2].title}, ${
        //@ts-ignore
        webinarsSorted[webinarsSorted.length - 2].name
      }`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.webinars}`
  }
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={preview ? true : false}
        noindex={preview ? true : false}
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
      <WebinarsAlt webinars={webinarsSorted} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.webinars })

export default WebinarsPage
