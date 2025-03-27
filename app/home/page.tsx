import React from 'react'
import HomeServer from '@/components/serverComponents/HomeServer'
import getStaticPropsHome from '@/lib/getStaticPropsv2/getStaticPropsHome'

export const revalidate = 3600

export default async function HomePage() {
  const homeProps = await getStaticPropsHome()
  return <HomeServer data={homeProps} />
}
