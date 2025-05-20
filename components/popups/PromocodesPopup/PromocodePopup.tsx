'use client';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import styles from './PromocodesPopup.module.sass';
import { PromoCode } from '@/lib/promo';
import { useEffect } from 'react';

interface PromocodePopupProps {
  isOpen: boolean;
  modalType: 'add' | 'edit' | null;
  selectedPromo: PromoCode | null;
  onClose: () => void;
  onSubmit: (data: Omit<PromoCode, 'id'>) => void;
}

export default function PromocodePopup({
  isOpen,
  modalType,
  selectedPromo,
  onClose,
  onSubmit,
}: PromocodePopupProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<PromoCode, 'id'>>({
    defaultValues: {
      name: selectedPromo?.name || '',
      promo_code: selectedPromo?.promo_code || '',
      redirect_url: selectedPromo?.redirect_url || '',
      is_active: selectedPromo?.is_active ?? true,
    },
  });

  useEffect(() => {
    reset({
      name: selectedPromo?.name || '',
      promo_code: selectedPromo?.promo_code || '',
      redirect_url: selectedPromo?.redirect_url || '',
      is_active: selectedPromo?.is_active ?? true,
    })
  }, [selectedPromo, reset])

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>{modalType === 'edit' ? 'Редактировать промокод' : 'Добавить промокод'}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Название:</label>
            <input
              id="name"
              type="text"
              className={classNames(styles.input, { [styles.inputError]: errors.name })}
              {...register('name', { required: 'Название обязательно' })}
            />
            {errors.name && <div className={styles.errorMessage}>{errors.name.message}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="promo_code">Промокод:</label>
            <input
              id="promo_code"
              type="text"
              className={classNames(styles.input, { [styles.inputError]: errors.promo_code })}
              {...register('promo_code', { required: 'Промокод обязателен' })}
            />
            {errors.promo_code && <div className={styles.errorMessage}>{errors.promo_code.message}</div>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="redirect_url">Ссылка на подарок:</label>
            <input
              id="redirect_url"
              type="text"
              className={classNames(styles.input, { [styles.inputError]: errors.redirect_url })}
              {...register('redirect_url', { required: 'Ссылка обязательна' })}
            />
            {errors.redirect_url && <div className={styles.errorMessage}>{errors.redirect_url.message}</div>}
          </div>
          <div className={styles.modalActions}>
            <button type="button" onClick={() => { onClose(); reset(); }} className={styles.cancelBtn}>
              Отмена
            </button>
            <button type="submit" className={styles.mainActionBtn}>
              {modalType === 'edit' ? 'Сохранить' : 'Добавить'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}