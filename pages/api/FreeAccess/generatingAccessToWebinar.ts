import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'

// Описание параметров:
//     // un=Имя пользователя *
//     // pw=Пароль *
//     // ln=Фамилия *
//     // fn=Имя *
//     // mn=Отчество *
//     // e=email *
//     // g=название группы в которую нужно зачислить слушателя, если группы нет в системе она будет создана.
//     // t=время отправки запроса в формате unixtime (не может отличаться более чем на минуту от времени на сервере)
//     // k=разовый ключ, который должын быть свормирован как md5($kk.$un.$t), где $kk статический ключ равный 3ykOQzkL2X647dWw8dDx7h5c, $un - имя пользователя, $t - время отправки запроса.

//     // https://lms.mip.institute/local/ilogin/rlogin.php?un=Иван&pw=bcbc1aa1-e162-42e1-b6ce-9c5bcd285ea5&ln=Kolpakov&fn=Ivan&g=87&e=vanjaklp@yandex.ru&t=1722432676&k=5effc26772817aeba1642a051fbb5cde,

//     // https://lms.mip.institute/local/ilogin/rlogin.php?un=test55&pw=1a2v3b4n5m6g7&ln=Фамилия1&fn=Имя1&mn=Отчество1&g=Тест11&e=test55@lms.org.ru&t=1720742814&k=17e02dd05ce7daa1c1677e7cec93c632

//     // При этом он будет создан в системе, назначен на заданную группу и авторизирован

//     // в параметре g название группы, если эта группа существует в системе и к ней привязан план/курс, то студент назначиться на них

//     // отмеченный * поля обязательны для заполнения профиля, t и k для авторизации запроса

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, phone, email } = req.body
    const staticKey = '3ykOQzkL2X647dWw8dDx7h5c'

    try {
      // Генерация пароля
      const generatePswrd = uuidv4()

      const time = Math.floor(Date.now() / 1000)
      const keyString = `${staticKey}${email}${time}`
      const k = crypto.createHash('md5').update(keyString).digest('hex')

      // Создание ссылки для логина
      const Link = `https://lms.mip.institute/local/ilogin/rlogin.php?un=${email}&pw=${generatePswrd}&ln=${lastName}&fn=${firstName}&g=87&e=${email}&t=${time}&k=${k}`

      res
        .status(200)
        .json({ link: Link, password: generatePswrd, login: email })
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Ошибка генерации ссылки', error: error.message })
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' })
  }
}
