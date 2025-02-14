import dev from '@/config/dev'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  try {
    const { name, email, phone, messageToHR } = req.body

    if (!name || !email || !phone || !messageToHR) {
      return res.status(400).json({ message: 'Заполните все поля' })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_LOGIN,
        pass: process.env.SMTP_PASS
      }
    })

    const mailOptions = {
      from: {
        name: 'HR Bot НАНО "МИП"',
        address: process.env.SMTP_FROM
      },
      to: dev ? 'vanjaklp@yandex.ru' : 'hr@mip.institute', // Адрес HR-рекрутера
      subject: 'Форма обратной связи: хочу стать частью вашей команды',
      text: `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nСообщение: ${messageToHR}`,
      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            color: #333;
            max-width: 600px;
            margin: auto;
            border: 1px solid #6f01c6;
            padding: 20px;
            border-radius: 10px;
          "
        >
          <h2 style="color: #6f01c6; text-align: center; margin-top: 0">Данные кандидата</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> <a href="tel:${phone}" style="color: #007bff">${phone}</a></p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff">${email}</a></p>
          <p><strong>Сообщение:</strong></p>
          <blockquote style="background: white; padding: 5px; border-left: 5px solid #6f01c6">
            ${messageToHR}
          </blockquote>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ message: 'Сообщение успешно отправлено!' })
  } catch (error) {
    console.error('Ошибка отправки письма:', error)
    return res.status(500).json({ message: 'Ошибка отправки письма', error })
  }
}
