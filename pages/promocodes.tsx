import { useState } from 'react'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import stls from '@/styles/pages/Promocodes.module.sass'
import { useForm } from 'react-hook-form'

interface PromoCode {
  name: string
  promo_code: string
  redirect_url: string
}

const PromocodesPage = () => {
  const router = useRouter()
  const [promocodes, setPromocodes] = useState<PromoCode[]>([
    {
      name: 'test',
      promo_code: 'test',
      redirect_url: 'test'
    }
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPromo, setSelectedPromo] = useState<PromoCode | null>(null) // Единое состояние для выбранного промокода
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete' | null>(null) // Тип модалки
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<PromoCode>({
    defaultValues: {
      name: '',
      promo_code: '',
      redirect_url: ''
    }
  })

  // Protect route
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //
  //   if (!token) {
  //     router.push('/login')
  //     return
  //   }
  //
  //   const fetchPromocodes = async () => {
  //     try {
  //       const response = await fetch('http://your-backend-api/promocodes', {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       })
  //
  //       if (!response.ok) {
  //         throw new Error('Ошибка загрузки промокодов')
  //       }
  //
  //       const data = await response.json()
  //       setPromocodes(data)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //
  //   fetchPromocodes()
  // }, [router])

  const openModal = (promo?: PromoCode) => {
    setSelectedPromo(promo || null)
    setModalType(promo ? 'edit' : 'add')
    if (promo) {
      setValue('name', promo.name)
      setValue('promo_code', promo.promo_code)
      setValue('redirect_url', promo.redirect_url)
    } else {
      reset()
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPromo(null)
    setModalType(null)
    reset()
  }

  const openDeleteModal = (promo: PromoCode) => {
    setSelectedPromo(promo)
    setModalType('delete')
    setIsModalOpen(true)
  }

  const confirmDelete = () => {
    if (selectedPromo) {
      setPromocodes(prev => prev.filter(p => p.name !== selectedPromo.name))
      setIsModalOpen(false)
      setSelectedPromo(null)
      setModalType(null)
    }
  }

  const closeDeleteModal = () => {
    setIsModalOpen(false)
    setSelectedPromo(null)
    setModalType(null)
  }

  // const onSubmit = async (data: PromoFormData) => {
  //   try {
  //     const url = editingPromo
  //       ? `http://your-backend/api/promocodes/${editingPromo.id}`
  //       : 'http://your-backend/api/promocodes'
  //     const method = editingPromo ? 'PUT' : 'POST'
  //     const res = await fetch(url, {
  //       method,
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         code: data.code
  //       })
  //     })
  //     if (!res.ok)
  //       throw new Error(editingPromo ? 'Failed to update promocode' : 'Failed to create promocode')
  //     const updatedPromo = await res.json()
  //     setPromocodes(prev =>
  //       editingPromo
  //         ? prev.map(p => (p.id === updatedPromo.id ? updatedPromo : p))
  //         : [...prev, updatedPromo]
  //     )
  //     closeModal()
  //   } catch (err) {
  //     setError(editingPromo ? 'Ошибка обновления промокода' : 'Ошибка создания промокода')
  //   }
  // }
  //
  // const deletePromo = async (id: number) => {
  //   try {
  //     const res = await fetch(`http://your-backend/api/promocodes/${id}`, { method: 'DELETE' })
  //     if (!res.ok) throw new Error('Failed to delete promocode')
  //     setPromocodes(prev => prev.filter(p => p.id !== id))
  //   } catch (err) {
  //     setError('Ошибка удаления промокода')
  //   }
  // }

  return (
    <div className={stls.container}>
      <h2 className={stls.title}>Управление промокодами</h2>
      {error && <div className={stls.errorMessage}>{error}</div>}
      <table className={stls.table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Промокод</th>
            <th>Ссылка на подарок</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {promocodes.map(promo => (
            <tr key={promo.name}>
              <td>{promo.name}</td>
              <td>{promo.promo_code}</td>
              <td>{promo.redirect_url}</td>
              <td>
                <div className={stls.tableBtns}>
                  <button onClick={() => openModal(promo)} className={stls.actionButton}>
                    Редактировать
                  </button>
                  <button
                    onClick={() => openDeleteModal(promo)}
                    className={classNames(stls.actionButton, stls.deleteButton)}>
                    Удалить
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={stls.btnBox}>
        <button onClick={() => openModal()} className={stls.mainActionBtn}>
          Добавить промокод
        </button>
      </div>

      {isModalOpen && (modalType === 'add' || modalType === 'edit') && (
        <div className={stls.modalOverlay}>
          <div className={stls.modal}>
            <h3>{modalType === 'edit' ? 'Редактировать промокод' : 'Добавить промокод'}</h3>
            <form className={stls.form}>
              <div className={stls.formGroup}>
                <label htmlFor='name'>Название:</label>
                <input
                  id='name'
                  type='text'
                  className={classNames(stls.input, { [stls.inputError]: errors.name })}
                  {...register('name', { required: 'Код обязателен' })}
                />
                {errors.name && <div className={stls.errorMessage}>{errors.name.message}</div>}
              </div>

              <div className={stls.formGroup}>
                <label htmlFor='promo_code'>Промокод:</label>
                <input
                  id='promo_code'
                  type='text'
                  className={classNames(stls.input, { [stls.inputError]: errors.promo_code })}
                  {...register('promo_code', { required: 'Поле обязательно' })}
                />
                {errors.promo_code && (
                  <div className={stls.errorMessage}>{errors.promo_code.message}</div>
                )}
              </div>

              <div className={stls.formGroup}>
                <label htmlFor='redirect_url'>Ссылка на подарок:</label>
                <input
                  id='redirect_url'
                  type='text'
                  className={classNames(stls.input, { [stls.inputError]: errors.redirect_url })}
                  {...register('redirect_url', { required: 'Поле обязательно' })}
                />
                {errors.redirect_url && (
                  <div className={stls.errorMessage}>{errors.redirect_url.message}</div>
                )}
              </div>

              <div className={stls.modalActions}>
                <button type='button' onClick={closeModal} className={stls.cancelBtn}>
                  Отмена
                </button>
                <button type='submit' className={stls.mainActionBtn}>
                  {modalType === 'edit' ? 'Сохранить' : 'Добавить'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isModalOpen && modalType === 'delete' && (
        <div className={stls.modalOverlay}>
          <div className={stls.modal}>
            <h3>Подтверждение удаления</h3>
            <p>Вы уверены, что хотите удалить промокод {selectedPromo?.promo_code}?</p>
            <div className={stls.modalActions}>
              <button type='button' onClick={closeDeleteModal} className={stls.cancelBtn}>
                Отмена
              </button>
              <button
                type='button'
                onClick={confirmDelete}
                className={classNames(stls.actionButton, stls.deleteButton)}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PromocodesPage
