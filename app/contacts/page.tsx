'use client'
import React, { useState } from 'react'
import Office from '@/components/contacts/Office/Office'
import Requisites from '@/components/contacts/Requisites/Requisites'
import RouteMIP from '@/components/contacts/RouteMIP/RouteMIP'
import Locations from '@/components/contacts/Locations/Locations'
import stls from './PageContacts.module.sass'
import JoinCommunity from '@/components/sections/lectorium/Stub/JoinCommunity/JoinCommunity'
import truncate from '@/helpers/general/truncate'
import { company, routes } from '@/config/index'
import SeoAppRouter from '@/components/seo/SeoAppRouter'

const seoParams = {
  title: `Контакты | ${company.name}`,
  desc: truncate(
    `${company.addresses.default.city}, ${company.addresses.default.street.name} ${company.addresses.default.street.type} ${company.addresses.default.street.door}, ${company.phoneNumbers.default.val}, ${company.phoneNumbers.defaultAlt.val}, ${company.emails.default.val}`,
    120
  ),
  // исправить каноникал перед продом и поменять noindex/nofollow в <SeoAppRouter/> на preview
  canonical: `${routes.front.root}${routes.front.contact}`,
  logoUrl: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`
}

export default function Contacts() {
  const [selectedCity, setSelectedCity] = useState<'moscow' | 'almaty'>('moscow') // Используем строки

  return (
    <div className={stls.pageContainer}>
      <SeoAppRouter
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        logoUrl={seoParams.logoUrl}
      />
      <Locations selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      {selectedCity === 'moscow' && <RouteMIP />}
      <div className={stls.wrapper}>
        <JoinCommunity />
      </div>
      <Office />
      <Requisites />
    </div>
  )
}
