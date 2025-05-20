'use client'
import axios from 'axios'
import classNames from 'classnames'
import {  useEffect, useState } from 'react'
import stls from '@/styles/pages/Promocodes.module.sass'
import Wrapper from '@/ui/Wrapper'
import PromocodePopup from '../popups/PromocodesPopup/PromocodePopup'
export interface PromoCode {
  is_active: boolean
  id: number
  name: string
  promo_code: string
  redirect_url: string
}

const PromoList = ({initPromocodes}) => {
  
  const [promocodes, setPromocodes] = useState<PromoCode[]>(initPromocodes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState<PromoCode | null>(null);
  const [modalType, setModalType] = useState<'add' | 'edit' | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPromocodes(initPromocodes);
  }, [initPromocodes]);

  const openModal = (promo?: PromoCode) => {
    setSelectedPromo(promo || null);
    setModalType(promo ? 'edit' : 'add');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPromo(null);
    setModalType(null);
    setError(null);
  };

  const handleSubmit = async (data: Omit<PromoCode, 'id'>) => {
    try {
      if (modalType === 'edit' && selectedPromo) {
        const response = await axios.put(`/api/promo/update/${selectedPromo.id}`, data);
        setPromocodes(prev =>
          prev.map(p => (p.id === selectedPromo.id ? response.data : p))
        );
      } else {
        const response = await axios.post('/api/promo/create', data);
        setPromocodes(prev => [...prev, response.data]);
      }
      closeModal();
    } catch (err) {
      console.error('Ошибка при сохранении промокода:', err);
      setError('Не удалось сохранить промокод. Попробуйте позже.');
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Вы уверены, что хотите удалить этот промокод?')) {
      try {
        await axios.delete(`/api/promo/delete/${id}`);
        setPromocodes(prev => prev.filter(p => p.id !== id));
      } catch (err) {
        console.error('Ошибка при удалении промокода:', err);
        setError('Не удалось удалить промокод. Попробуйте позже.');
      }
    }
  };

  const handleToggle = async (id: number) => {
    try {
      await axios.put(`/api/promo/activate/${id}`);
      setPromocodes(prev =>
        prev.map(p => (p.id === id ? { ...p, is_active: !p.is_active } : p))
      );
    } catch (err) {
      console.error('Ошибка при изменении статуса промокода:', err);
      setError('Не удалось изменить статус промокода. Попробуйте позже.');
    }
  };

  return (
    <Wrapper>
      <h2 className={stls.title}>Управление промокодами</h2>
      <div className={stls.tableContainer}>
    <table className={stls.table}>
        <thead>
          <tr>
            <th>Название</th>
            <th>Промокод</th>
            <th>Ссылка на подарок</th>
            <th>Статус</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
    {promocodes?.map(promo => (
            <tr key={promo.id}>
              <td>{promo.name}</td>
              <td>{promo.promo_code}</td>
              <td>{promo.redirect_url}</td>
              <td className={stls.statusCell}><span
                    className={classNames(stls.statusCircle, {
                      [stls.active]: promo.is_active,
                      [stls.inactive]: !promo.is_active,
                    })}
                    title={promo.is_active ? 'Активен' : 'Не активен'}
                  /></td>

              <td>
                <div className={stls.tableBtns}>
                  <button
                  onClick={() => handleToggle(promo.id)} 
                  className={stls.actionButton}>
                    {promo.is_active ? 'В архив' : 'Из архива'}
                  </button>
                  <button 
                  onClick={() => openModal(promo)} 
                  className={stls.actionButton}>
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDelete(promo.id)}
                    className={classNames(stls.actionButton, stls.deleteButton)}>
                    Удалить
                  </button>
                </div>
              </td>
            </tr>
          ))}
          </tbody>
    </table>
    </div>
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
