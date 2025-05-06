import routes from "@/config/routes";
import axios from "axios";

export default async function handler(req, res) {
  // const allowedOrigins = [
  //   'https://dev.api.fastapi.mip.institute/api', // Для разработки
  //   'https://api.fastapi.mip.institute/api', // Для продакшена
  // ];

  // const origin = req.headers.origin;

  // // Устанавливаем CORS-заголовки
  // if (allowedOrigins.includes(origin)) {
  //   res.setHeader("Access-Control-Allow-Origin", origin);
  // }
  // res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // res.setHeader("Access-Control-Allow-Credentials", "true");

  // // Обработка предварительного запроса OPTIONS
  // if (req.method === "OPTIONS") {
  //   return res.status(200).end();
  // }

  // // Проверка метода
  // if (req.method !== "POST") {
  //   return res.status(405).json({ success: false, message: "Method Not Allowed" });
  // }
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { data } = req.body
  
  const username = process.env.API_USERNAME || ''
  const password = process.env.API_PASSWORD || ''
  try {
    const response = await axios.post(`${routes.back.api}/mails/send`, data, {
      auth: {
        username,
        password,
      }})
      
    if(response.status === 200) {
      res.status(200).json({
        success: true,
        data: `${response?.data} ${routes.back.api}`
      })
    }
    else {
      res.status(400).json({ success: false })
    }
    
  } catch (err) {
    console.log(err.data)
    res.status(400).json({ success: false })
  }
}


