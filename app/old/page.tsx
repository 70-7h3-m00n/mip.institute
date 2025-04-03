import { NextPage } from 'next'
import PageOldMain from '@/components/pages/PageOldMain'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'

const HomePage: NextPage = async () => {
  const all = await fetchAllProgramsData()

  return <PageOldMain all={all} />
}

export default HomePage
