import type { NextApiRequest, NextApiResponse } from 'next'
import { routes } from '@/config/index'
import { draftMode } from 'next/headers'

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url, status } = req.query

  console.log('QUERY', req.query);
  

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ message: 'Missing or invalid URL' })
  }

  // Включаем или выключаем draft mode
  res.setDraftMode({ enable: status !== 'published' })

  // Перенаправляем на переданный URL
  return res.redirect(307, url)
}

export default preview
