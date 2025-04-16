import HomeClient from '@/components/clientComponents/HomeClient'
import getStaticPropsHome from '@/lib/getStaticPropsv2/getStaticPropsHome'
import ABtestWrapper from '@/components/clientComponents/ABtestWrapper'
import PageOldMain from '@/components/pages/PageOldMain'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'

export const revalidate = 3600

export default async function HomePage() {
  const homeProps = await getStaticPropsHome()
  const allProgramsData = await fetchAllProgramsData()

  

  return (
    <ABtestWrapper
      clientComponent={<PageOldMain all={allProgramsData} />}
      serverComponent={<HomeClient data={homeProps} all={allProgramsData} />}
    />
  )
}
