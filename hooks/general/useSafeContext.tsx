import { useContext } from 'react'
import { AppContext } from '@/context/AppContextProvider'
import { ContextStaticProps } from '@/context/index'

export const useProgramsSafe = () => {
  const newContext = useContext(AppContext) || null
  const oldContext = useContext(ContextStaticProps)

  return newContext?.state?.programs ? newContext : { state: oldContext }
}
