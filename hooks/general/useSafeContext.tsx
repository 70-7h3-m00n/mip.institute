import { useContext } from 'react'
import { AppContext, State as NewContextState } from '@/context/AppContextProvider'
import { ContextStaticProps } from '@/context/index'
import { StaticContextType } from '@/context/simple/ContextStaticProps'

export const useProgramsSafe = (): { state: NewContextState } | { state: StaticContextType } => {
  const newContext = useContext(AppContext)
  const oldContext = useContext(ContextStaticProps)

  if (newContext?.state?.programs?.length) {
    return { state: newContext.state }
  } else {
    return { state: oldContext }
  }
}
