import React from 'react'
import ContactsClient from '@/components/contacts/ContactsClient'
import { Metadata } from 'next'
import { company, routes } from '@/config/index'
import truncate from '@/helpers/general/truncate'

export const generateMetadata = (): Metadata => {
  // исправить каноникал перед продом и поменять noindex/nofollow на preview
  const title = `Контакты | ${company.name}`
  const description = truncate(
    `${company.addresses.default.city}, ${company.addresses.default.street.name} ${company.addresses.default.street.type} ${company.addresses.default.street.door}, ${company.phoneNumbers.default.val}, ${company.phoneNumbers.defaultAlt.val}, ${company.emails.default.val}`,
    120
  )
  const canonical = `${routes.front.root}${routes.front.contact}`
  const logoUrl = `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`

  return {
    title,
    description,
    alternates: {
      canonical
    },
    robots: {
      index: false,
      follow: false
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
