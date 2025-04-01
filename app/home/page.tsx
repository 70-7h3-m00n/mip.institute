import React from 'react'
import HomeClient from '@/components/clientComponents/HomeClient'
import getStaticPropsHome from '@/lib/getStaticPropsv2/getStaticPropsHome'

export const revalidate = 3600

export default async function HomePage() {
  const homeProps = await getStaticPropsHome()
  // обертка нужна для АБ-тестирования
  return <HomeClient data={homeProps} />
}
