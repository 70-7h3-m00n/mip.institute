'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import stls from '@/styles/pages/PromoList.module.sass'
import Wrapper from '@/ui/Wrapper'
import PromocodePopup from '../popups/PromocodesPopup/PromocodePopup'
import PromoCard from '../cards/PromoCard/PromoCard'
import InputSearch from '@/ui/InputSearch'
import { PromoCode, PromoCodeItems } from '@/lib/promo'
import { useRouter } from 'next/navigation'

interface PromoListProps {
  initPromocodes: PromoCode
}

const PromoList = ({ initPromocodes }: PromoListProps) => {
  const [promocodes, setPromocodes] = useState<PromoCode>(initPromocodes)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPromo, setSelectedPromo] = useState<PromoCodeItems | null>(null)
  const [modalType, setModalType] = useState<'add' | 'edit' | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(initPromocodes.page)

  const router = useRouter()

  // Фильтрация промокодов по поиску
  const filteredPromocodes = promocodes.items.filter(
    promo =>
      promo.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      promo?.promo_code?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  )

  // Загрузка промокодов для указанной страницы
  const fetchPromocodesPage = async (page: number) => {
    try {
      const response = await axios.get<PromoCode>(`/api/getPromoPage?page=${page}`)
      setPromocodes(response.data)
      setCurrentPage(response.data.page)
    } catch (err) {
      if (err.response.status === 401) {
        router.push('/marketing')
      }
      console.error('Ошибка при загрузке промокодов:', err)
      setError('Не удалось загрузить промокоды.')
    }
  }

  useEffect(() => {
    setPromocodes(initPromocodes)
    setCurrentPage(initPromocodes.page)
  }, [initPromocodes])

  const openModal = (promo?: PromoCodeItems) => {
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

  const handleSubmit = async (data: Omit<PromoCodeItems, 'id'>) => {
    try {
      if (modalType === 'edit' && selectedPromo) {
        const response = await axios.put(`/api/promo/update/${selectedPromo.id}`, data)
        setPromocodes(prev => ({
          ...prev,
          items: prev.items.map(p => (p.id === selectedPromo.id ? response.data : p))
        }))
      } else {
        const response = await axios.post('/api/promo/create', data)
        setPromocodes(prev => {
          const newItems = [response.data, ...prev.items] // Добавляем в начало
          return {
            ...prev,
            items: newItems.slice(0, 10), // Ограничиваем до 10 элементов
            count: prev.count + 1
          }
        })
        setCurrentPage(1)
      }
      closeModal()
    } catch (err) {
      closeModal()
      if (err.response.status === 401) {
        router.push('/marketing')
      }
      console.error('Ошибка при сохранении промокода:', err)
      setError('Не удалось сохранить промокод. Попробуйте позже.')
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Вы уверены, что хотите удалить этот промокод?')) {
      try {
        await axios.delete(`/api/promo/delete/${id}`)
        const updatedPromocodes = {
          ...promocodes,
          items: promocodes.items.filter(p => p.id !== id),
          count: promocodes.count - 1
        }
        setPromocodes(updatedPromocodes)
        // Перезагружаем текущую страницу
        if (updatedPromocodes.items.length === 0 && currentPage > 1) {
          const newPage = currentPage - 1
          await fetchPromocodesPage(newPage)
        }
      } catch (err) {
        if (err.response.status === 401) {
          router.push('/marketing')
        }
        console.error('Ошибка при удалении промокода:', err)
        setError('Не удалось удалить промокод. Попробуйте позже.')
      }
    }
  }

  const handleToggle = async (id: number) => {
    try {
      await axios.put(`/api/promo/activate/${id}`)
      setPromocodes(prev => ({
        ...prev,
        items: prev.items.map(p => (p.id === id ? { ...p, is_active: !p.is_active } : p))
      }))
    } catch (err) {
      if (err.response.status === 401) {
        router.push('/marketing')
      }
      console.error('Ошибка при изменении статуса промокода:', err)
      setError('Не удалось изменить статус промокода.')
    }
  }

  // Обработчики пагинации
  const totalPages = Math.ceil(promocodes.count / promocodes.per_page)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [currentPage])
  const handlePageChange = async (page: number) => {
    if (page >= 1 && page <= totalPages) {
      await fetchPromocodesPage(page) // Ждём завершения загрузки данных
    }
  }

  return (
    <Wrapper>
      <h2 className={stls.maintitle}>Управление промокодами</h2>
      <div className={stls.topMenu}>
      <button onClick={() => openModal()} className={stls.mainActionBtn}>
          Добавить промокод
        </button>
        <InputSearch value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        
      </div>

      <div className={stls.promoWrapper}>
        {filteredPromocodes.length > 0 ? (
          filteredPromocodes.map(promo => (
            <PromoCard
              key={promo.id}
              promo={promo}
              onEdit={() => openModal(promo)}
              onDelete={() => handleDelete(promo.id)}
              onToggle={() => handleToggle(promo.id)}
            />
          ))
        ) : (
          <p className={stls.noResults}>Промокоды не найдены</p>
        )}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className={stls.pagination}>
          <button
            className={stls.pageButton}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}>
            Предыдущая
          </button>
          <span className={stls.pageInfo}>
            <span className={stls.desktopOnly}>Страница</span> {currentPage} из {totalPages}
          </span>
          <button
            className={stls.pageButton}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}>
            Следующая
          </button>
        </div>
      )}

      <PromocodePopup
        isOpen={isModalOpen}
        modalType={modalType}
        selectedPromo={selectedPromo}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
      {error && <div className={stls.error}>{error}</div>}
    </Wrapper>
  )
}

export default PromoList