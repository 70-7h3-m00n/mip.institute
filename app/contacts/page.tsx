import React from 'react'
import ContactsClient from '@/components/contacts/ContactsClient'
import { Metadata } from 'next'
import { company, prod, routes } from '@/config/index'
import truncate from '@/helpers/general/truncate'

export const generateMetadata = (): Metadata => {
  // исправить каноникал перед продом и поменять noindex/nofollow на preview
  const title = `Контакты Московский Институт Психологии`
  const description =`Подробная информация о контактах и всех способах связи Московского Института Психологии: адреса в г. Москве (Докучаев переулок, 8) и г. Алматы, телефон +7 (499) 388-92-34 , электронная почта info@mip.institute`
  const canonical = `${routes.front.root}${routes.front.contact}`
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

export default function Contacts() {
  return <ContactsClient />
}
