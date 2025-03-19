import stls from './DiplomaExpandableItem.module.sass'
import { ReactNode, useState } from 'react'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import IconMinus from '@/components/icons/IconMinus'
import IconPlus from '@/components/icons/IconPlus'
import PopupImage from '@/components/popups/PopupImage'
import loadIcon from '@/helpers/general/loadIcon'

type Props = {
  idx?: number
  title?: string
  diplomas?: {
    image: JSX.Element
    title: string
  }[]
}
const DiplomaExpandableItem = ({ title, diplomas, idx }: Props) => {
  const [isOpen, setOpen] = useState(idx === 0 ? true : false)

  return (
    <li className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      <button className={stls.title} onClick={() => setOpen(!isOpen)}>
        <span className={stls.icon}>{isOpen ? <IconMinus /> : <IconPlus />}</span>
        <span className={classNames({ [stls.pTitle]: true, [stls.bold]: isOpen })}>{title}</span>
      </button>
      <div className={stls.diplomas}>
        <ul className={stls.list}>
          {diplomas &&
            diplomas.map((diploma, idx) => (
              <li key={diploma.title + idx} className={stls.item}>
                <Popup
                  trigger={
                    <button className={stls.trigger}>
                      <span className={stls.img}>{diploma.image}</span>
                      <span className={stls.label}>
                        <span className={stls.labelIcon}>{loadIcon('IconDoc')}</span>
                        <span className={stls.diplomaTitle}>{diploma.title}</span>
                      </span>
                    </button>
                  }
                  className='DiplomaExpandableItem__popup'
                  modal
                  nested>
                  {
                    ((close: () => void) => (
                      <PopupImage image={diploma.image} close={close} />
                    )) as unknown as ReactNode
                  }
                </Popup>
              </li>
            ))}
        </ul>
      </div>
    </li>
  )
}

export default DiplomaExpandableItem
