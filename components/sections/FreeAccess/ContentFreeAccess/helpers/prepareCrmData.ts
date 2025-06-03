import { getCookie } from 'cookies-next'

export type CrmData = {
  name: string
  phone: string
  email: string
  lastName?: string
  leadPage?: string
  utms?: unknown
  referer?: unknown
  ymUid?: unknown
  utm?: unknown
  advcake_track_id?: string | null
  advcake_track_url?: string | null
  roistat_visit?: string | null
  link?: string
  password?: string
  login?: string
}

export function prepareCrmData(
  formData: CrmData,
  linkData: { link: string; password: string; login: string },
  leadPage: string
): CrmData {

  const utms = JSON.parse(sessionStorage.getItem('utms') || 'null')
  sessionStorage.removeItem('utms')
  
  const referer = JSON.parse(sessionStorage.getItem('referer') || 'null')
  sessionStorage.removeItem('referer')
  
  const ymUid = JSON.parse(localStorage.getItem('_ym_uid') || 'null')
  
  const clickId = getCookie('utm')
  const utmValue = typeof clickId === 'string' ? JSON.parse(clickId) : null
  
  const roistat_visit = getCookie('roistat_visit')
  const advcake_track_id = getCookie('advcake_track_id')
  const advcake_track_url = getCookie('advcake_track_url')

  return {
    ...formData,
    leadPage,
    utms,
    referer,
    ymUid,
    utm: utmValue,
    roistat_visit: typeof roistat_visit === 'string' ? roistat_visit : null,
    advcake_track_id: typeof advcake_track_id === 'string' ? advcake_track_id : null,
    advcake_track_url: typeof advcake_track_url === 'string' ? advcake_track_url : null,
    link: linkData.link,
    password: linkData.password,
    login: linkData.login
  }
}