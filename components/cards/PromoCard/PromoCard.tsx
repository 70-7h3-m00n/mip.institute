import classNames from 'classnames'
import stls from './PromoCard.module.sass'
import { useEffect, useRef, useState } from 'react'
export interface PromoCode {
  is_active: boolean
  id: number
  name: string
  promo_code: string
  redirect_url: string
}

const PromoCard = ({ promo, onEdit, onDelete, onToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className={stls.cardWithMenu}>
      <div
        key={promo.id}
        className={classNames(stls.promoItem, {
          [stls.active]: promo.is_active,
          [stls.inactive]: !promo.is_active
        })}>
        <div className={stls.data}>
          <div className={stls.line}>
            <p className={stls.title}>Название</p>
            <p className={stls.promoTitle}>{promo.name}</p>
          </div>

          <div className={stls.line}>
            <p className={stls.title}>Промокод</p>
            <p className={stls.promoCode}>{promo.promo_code}</p>
          </div>

          <div className={stls.lineUrl}>
            <p className={stls.title}>Ссылка</p>
            <p className={stls.promoLink}>{promo.redirect_url}</p>
          </div>
        </div>
      </div>
      <div
        ref={iconRef}
        onClick={openMenu}
        className={classNames(stls.icon, {
          [stls.menuOpen]: isMenuOpen
        })}>
        &#8942;
      </div>
      <div
        ref={menuRef}
        className={classNames(stls.menu, {
          [stls.open]: isMenuOpen
        })}>
        <p className={stls.edit} onClick={onEdit}>
          изменить
        </p>
        <p className={stls.delete} onClick={onDelete}>
          удалить
        </p>
        <p className={stls.toggle} onClick={onToggle}>
          {promo.is_active ? 'В архив' : 'Из архива'}
        </p>
      </div>
    </div>
  )
}

export default PromoCard
