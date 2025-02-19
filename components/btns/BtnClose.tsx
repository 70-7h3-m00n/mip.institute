import stls from '@/styles/components/btns/BtnClose.module.sass'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import IconClose from '@/components/icons/IconClose'
import IconCloseCircle from '@/components/icons/IconClose'

type Props = {
  onClick?: () => void
  iconCloseCircle?: boolean
}
// @ts-ignore
const BtnClose = ({ onClick = null, iconCloseCircle = false }: Props) => {
  const { closeMenu } = useContext(MenuContext)

  return (
    <button
      className={stls.container}
      // @ts-ignore
      onClick={onClick ? onClick : closeMenu}
      aria-label='Закрыть'>
      {iconCloseCircle ? <IconCloseCircle /> : <IconClose />}
    </button>
  )
}

export default BtnClose
