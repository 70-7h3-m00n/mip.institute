import { NextPage } from 'next'
import React from 'react'

import PageOldMain from '@/components/pages/PageOldMain'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'


const HomePage: NextPage = async () => {
  // programs,
  // reviews,
  // teachers,
  // bachelors,
  // practicalTrainings
const all = await fetchAllProgramsData()

  return (
    <PageOldMain all={all}/>
    // <></>
  )
}


export default HomePage