'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import stls from '@/styles/pages/PromoList.module.sass'
import Wrapper from '@/ui/Wrapper'
import PromocodePopup from '../popups/PromocodesPopup/PromocodePopup'
import PromoCard from '../cards/PromoCard/PromoCard'
export interface PromoCode {
  is_active: boolean
  id: number
  name: string
  promo_code: string
  redirect_url: string
}

const PromoList = ({ initPromocodes }) => {
  const [promocodes, setPromocodes] = useState<PromoCode[]>(initPromocodes)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPromo, setSelectedPromo] = useState<PromoCode | null>(null)
  const [modalType, setModalType] = useState<'add' | 'edit' | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setPromocodes(initPromocodes)
  }, [initPromocodes])

  const openModal = (promo?: PromoCode) => {
    setSelectedPromo(promo || null)
    setModalType(promo ? 'edit' : 'add')
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPromo(null)
    setModalType(null)
    setError(null)
  }

  const handleSubmit = async (data: Omit<PromoCode, 'id'>) => {
    try {
      if (modalType === 'edit' && selectedPromo) {
        const response = await axios.put(`/api/promo/update/${selectedPromo.id}`, data)
        setPromocodes(prev => prev.map(p => (p.id === selectedPromo.id ? response.data : p)))
      } else {
        const response = await axios.post('/api/promo/create', data)
        setPromocodes(prev => [...prev, response.data])
      }
      closeModal()
    } catch (err) {
      console.error('Ошибка при сохранении промокода:', err)
      setError('Не удалось сохранить промокод. Попробуйте позже.')
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Вы уверены, что хотите удалить этот промокод?')) {
      try {
        await axios.delete(`/api/promo/delete/${id}`)
        setPromocodes(prev => prev.filter(p => p.id !== id))
      } catch (err) {
        console.error('Ошибка при удалении промокода:', err)
        setError('Не удалось удалить промокод. Попробуйте позже.')
      }
    }
  }

  const handleToggle = async (id: number) => {
    try {
      await axios.put(`/api/promo/activate/${id}`)
      setPromocodes(prev => prev.map(p => (p.id === id ? { ...p, is_active: !p.is_active } : p)))
    } catch (err) {
      console.error('Ошибка при изменении статуса промокода:', err)
      setError('Не удалось изменить статус промокода. Попробуйте позже.')
    }
  }

  return (
    <Wrapper>
      <h2 className={stls.maintitle}>Управление промокодами</h2>
      {promocodes?.map(promo => (
        <PromoCard
          key={promo.id}
          promo={promo}
          onEdit={() => openModal(promo)}
          onDelete={() => handleDelete(promo.id)}
          onToggle={() => handleToggle(promo.id)}
        />
      ))}
      <button onClick={() => openModal()} className={stls.mainActionBtn}>
        Добавить промокод
      </button>
      <PromocodePopup
        isOpen={isModalOpen}
        modalType={modalType}
        selectedPromo={selectedPromo}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </Wrapper>
  )
}

export default PromoList
