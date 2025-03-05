import axios from 'axios'

export default async function handler(req, res) {
  const { email } = req.body
  const accountName = 'mipinstitute'
  const secretKey = process.env.GETCOURSE_SECRET_KEY
  const apiUrl = `https://${accountName}.getcourse.ru/pl/api/users`
  const formData = {
    action: 'add',
    key: secretKey,
    params: btoa(JSON.stringify({ user: { email: email } }))
  }

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })

    return res.status(200).json(response.data)
  } catch (error) {
    return res.status(500).json({ error: 'Ошибка сервера' })
  }
}
