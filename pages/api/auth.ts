import routes from "@/config/routes";
import axios from "axios";
import qs from 'qs'
export default async function handler(req, res) {

  const { username, password } = req.body
  const formData = qs.stringify({
    username, password
  });
  try {
    
    const response = await axios.post(
      `${routes.back.api}/auth/token`,
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
      
      
    if(response.status === 200) {
      res.status(200).json({
        success: true,
        token: response.data.access_token
      })
    }
    else {
      console.log('RESP',response);
      res.status(400).json({ success: false, message: "Произошла ошибка при авторизации. Попробуйте позже" })
    }
    
  } catch (err) {
    // console.log(err.response.data);
    res.status(400).json({ success: false, message: err})
  }
}


