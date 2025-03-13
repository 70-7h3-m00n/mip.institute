'use client'

import { NextSeo } from 'next-seo'

export default function SeoAppRouter({
  title,
  description,
  canonical,
  logoUrl
}: {
  title: string
  description: string
  canonical: string
  logoUrl: string
}) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      nofollow={true}
      noindex={true}
      openGraph={{
        url: canonical,
        title: title,
        description: description,
        images: [
          {
            url: logoUrl,
            width: 512,
            height: 512,
            alt: title,
            type: 'image/png'
          }
        ],
        site_name: title
      }}
    />
  )
}
