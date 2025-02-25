'use client'
import { useReducer } from 'react'
import MenuContext from '@/context/menu/menuContext'
import menuReducer from '@/context/menu/menuReducer'
import { OPEN_MENU, CLOSE_MENU, TOGGLE_MENU } from '@/context/types'

const MenuState = props => {
  const initialState = {
    menuIsOpen: false
  }

  const [state, dispatch] = useReducer(menuReducer, initialState)

  const openMenu = () => {
    dispatch({ type: OPEN_MENU, payload: true })
  }

  const closeMenu = () => {
    dispatch({ type: CLOSE_MENU, payload: false })
  }

  const toggleMenu = () => {
    dispatch({ type: TOGGLE_MENU, payload: null })
  }

  return (
    <MenuContext.Provider
      value={{
        menuIsOpen: state.menuIsOpen,
        openMenu,
        closeMenu,
        toggleMenu
      }}>
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuState
