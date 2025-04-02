'use client'
import { useState } from 'react'
import RouteMIP from './RouteMIP/RouteMIP'
import Locations from './Locations/Locations'
import JoinCommunity from '@/components/sections/lectorium/Stub/JoinCommunity/JoinCommunity'
import Office from '@/components/contacts/Office/Office'
import Requisites from '@/components/contacts/Requisites/Requisites'
import stls from './ContactsClient.module.sass'
import DontHesistateToAsk from './DontHesistateToAsk/DontHesistateToAsk'

export enum City {
  Moscow = 'moscow',
  Almaty = 'almaty'
}

export default function ContactsClient() {
  const [selectedCity, setSelectedCity] = useState<City>(City.Moscow)

  return (
    <div className={stls.pageContainer}>
      <Locations selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <DontHesistateToAsk />
      {selectedCity === City.Moscow && <RouteMIP />}
      <div className={stls.wrapper}>
        <JoinCommunity />
      </div>
      <Office />
      <Requisites />
    </div>
  )
}
