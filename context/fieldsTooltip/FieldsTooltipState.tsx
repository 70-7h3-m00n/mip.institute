'use client'
import { useReducer } from 'react'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import fieldsTooltipReducer from '@/context/fieldsTooltip/fieldsTooltipReducer'
import {
  OPEN_FIELDS_TOOLTIP,
  CLOSE_FIELDS_TOOLTIP,
  TOGGLE_FIELDS_TOOLTIP
} from '@/context/types'

const FieldsTooltipState = props => {
  const initialState = {
    fieldsTooltipIsOpen: false
  }

  const [state, dispatch] = useReducer(fieldsTooltipReducer, initialState)

  const openFieldsTooltip = () => {
    dispatch({ type: OPEN_FIELDS_TOOLTIP, payload: true })
  }

  const closeFieldsTooltip = () => {
    dispatch({ type: CLOSE_FIELDS_TOOLTIP, payload: false })
  }

  const toggleFieldsTooltip = () => {
    dispatch({ type: TOGGLE_FIELDS_TOOLTIP, payload: null })
  }

  return (
    <FieldsTooltipContext.Provider
      value={{
        fieldsTooltipIsOpen: state.fieldsTooltipIsOpen,
        openFieldsTooltip,
        closeFieldsTooltip,
        toggleFieldsTooltip
      }}>
      {props.children}
    </FieldsTooltipContext.Provider>
  )
}

export default FieldsTooltipState
