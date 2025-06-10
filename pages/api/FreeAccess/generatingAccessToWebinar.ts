import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body
    const staticKey = '3ykOQzkL2X647dWw8dDx7h5c'

    try {
      // Генерация пароля
      const generatePswrd = uuidv4()

      const time = Math.floor(Date.now() / 1000)
      const keyString = `${staticKey}${email}${time}`
      const k = crypto.createHash('md5').update(keyString).digest('hex')
      const endEducation = time + 259200
      const beginEducation = time
      const g = 'Почувствуйте себя студентом МИПа'

      // Создание ссылки для логина
      const Link = `https://lms.mip.institute/local/ilogin/rlogin.php?un=${email}&pw=${generatePswrd}&fn=${name}&g=87&e=${email}&t=${time}&k=${k}&ee=${endEducation}&be=${beginEducation}&g=${g}`

      res.status(200).json({ link: Link, password: generatePswrd, login: email })
    } catch (error) {
      res.status(500).json({ message: 'Ошибка генерации ссылки', error: error.message })
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' })
  }
}
