import axios from 'axios';
import routes from '@/config/routes';

export interface PromoCode {
  id: number;
  name: string;
  promo_code: string;
  redirect_url: string;
  is_active: boolean;
}

export async function fetchPromocodes(token: string) {
  const response = await axios.get<PromoCode[]>(`${routes.back.api}/admin/promo/promos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data || [];
}

export async function createPromocode(data: Omit<PromoCode, 'id'>, token: string) {
  const response = await axios.post<PromoCode>(`${routes.back.api}/admin/promo/create`, data, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  });
  return response.data;
}

export async function updatePromocode(id: number, data: Omit<PromoCode, 'id'>, token: string) {
  const response = await axios.put<PromoCode>(`${routes.back.api}/admin/promo/update/${id}`, data, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  });
  return response.data;
}

export async function deletePromocode(id: number, token: string) {
  await axios.delete(`${routes.back.api}/admin/promo/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function togglePromocode(id: number, token: string) {
  const response = await axios.put<PromoCode>(`${routes.back.api}/admin/promo/activate/${id}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}