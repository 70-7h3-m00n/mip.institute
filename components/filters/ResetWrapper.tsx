import React from 'react'
import { useFilterDispatch } from '@/context/FilterContext/FilterContext'
import ResetFilter from './ResetFilter'

const ResetWrapper = () => {
  const dispatch = useFilterDispatch()
  const removeFilters = () => {
    dispatch({
      type: 'clearFilters'
    })
    dispatch({
      type: 'setBool',
      payload: true
    })
  }

  return (
    <>
      <ResetFilter onClick={removeFilters} onIndex />
    </>
  )
}

export default ResetWrapper
