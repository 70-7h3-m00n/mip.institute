'use client'
import { useState } from 'react'
import RouteMIP from './RouteMIP/RouteMIP'
import Locations from './Locations/Locations'

export enum City {
  Moscow = 'moscow',
  Almaty = 'almaty'
}

export default function ContactsClient() {
  const [selectedCity, setSelectedCity] = useState<City>(City.Moscow)

  return (
    <>
      <Locations selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      {selectedCity === City.Moscow && <RouteMIP />}
    </>
  )
}
