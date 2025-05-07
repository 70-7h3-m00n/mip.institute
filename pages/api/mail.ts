import routes from "@/config/routes";
import axios from "axios";

export default async function handler(req, res) {

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
    res.status(400).json({ success: false })
  }
}


