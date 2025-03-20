import { useContext, useMemo } from 'react'
import { useAppContext } from '@/context/AppContextProvider'
import { ContextStaticProps } from '@/context/index'

export const useProgramsSafe = () => {
  const newContext = useAppContext()
  const oldContext = useContext(ContextStaticProps)

  return useMemo(() => {
    if (newContext && newContext.state?.programs) {
      return newContext
    }
    return { state: oldContext }
  }, [newContext, oldContext])
}
