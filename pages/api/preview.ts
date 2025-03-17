import type { NextApiRequest, NextApiResponse } from 'next'

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url, status, secret } = req.query

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ message: 'Missing or invalid URL' })
  }

  if (secret !== process.env.PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Route forbidden' })
  }

  // Включаем или выключаем draft mode
  res.setDraftMode({ enable: status !== 'published' })

  // Перенаправляем на переданный URL
  return res.redirect(307, url)
}

export default preview
