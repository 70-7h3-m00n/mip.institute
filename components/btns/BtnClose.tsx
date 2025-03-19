import stls from '@/styles/components/btns/BtnClose.module.sass'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import IconClose from '@/components/icons/IconClose'
import IconCloseCircle from '@/components/icons/IconClose'

type Props = {
  onClick?: () => void
  iconCloseCircle?: boolean
}

const BtnClose = ({ onClick, iconCloseCircle = false }: Props) => {
  const { closeMenu } = useContext(MenuContext)

  return (
    <button className={stls.container} onClick={onClick ?? closeMenu} aria-label='Закрыть'>
      {iconCloseCircle ? <IconCloseCircle /> : <IconClose />}
    </button>
  )
}

export default BtnClose
