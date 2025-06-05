import axios from 'axios'
import routes from '@/config/routes'

export interface PromoCodeItems {
  id: number
  name: string
  promo_code: string
  redirect_url: string
  is_active: boolean
  created_at: string
  updated_at: string
}
export interface PromoCode {
  items: PromoCodeItems[]
  count: number
  page: number
  per_page: number
}

export async function fetchPromocodes(token: string) {
  const response = await axios.get<PromoCode>(`${routes.back.api}/admin/promo/promos`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return {
    ...response.data,
    items: (response.data.items || [])
  }
}

export async function getPromoPage(page: number, token: string, per_page?: number) {
  const response = await axios.get<PromoCode>(`${routes.back.api}/admin/promo/promos?page=${page}&per_page=${per_page || 10}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return {
    ...response.data,
    items: (response.data.items || [])
  }
}

export async function getPromocodes(auth: { username: string; password: string }) {
  const response = await axios.get<PromoCode[]>(`${routes.back.api}/clients/promos`, {
    auth: auth
  })
  return response.data || []
}

export async function createPromocode(data: Omit<PromoCode, 'id'>, token: string) {
  const response = await axios.post<PromoCode>(`${routes.back.api}/admin/promo/create`, data, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  })
  return response.data
}

export async function updatePromocode(id: number, data: Omit<PromoCode, 'id'>, token: string) {
  const response = await axios.put<PromoCode>(`${routes.back.api}/admin/promo/update/${id}`, data, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  })
  return response.data
}

export async function deletePromocode(id: number, token: string) {
  await axios.delete(`${routes.back.api}/admin/promo/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export async function togglePromocode(id: number, token: string) {
  const response = await axios.put<PromoCode>(
    `${routes.back.api}/admin/promo/activate/${id}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
  return response.data
}
