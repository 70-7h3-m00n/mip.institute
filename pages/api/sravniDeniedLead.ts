import axios from 'axios'
import checkOrUpdateTokens from './checkOrUpdateTokens'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    const id = req.body &&  req.body['leads[status][0][id]']

    if(req.body) {
      const newLead =  await checkOrUpdateTokens()
      const checkLeadId = `https://crmamomipinstitute.amocrm.ru/api/v4/leads/${id}`

      const access_token = newLead?.access_token

      const options = {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        }
      };

    const checkLeadIdResponse = await axios.get(checkLeadId, options);

    const leadData = checkLeadIdResponse.data

    const adv_id ='886'

    const TRANSACTION_ID = leadData.custom_fields_values.find(item => item.field_name === 'Баннер/Объявление').values[0].value
    
    // постбек на отклонить
    const newresponse =await axios.get(
      `https://sravni.go2cloud.org/aff_goal?a=lsr&goal_name=reject&adv_id=${adv_id}&transaction_id=${TRANSACTION_ID}`
    )
    
    res.status(200).json({ message: 'Данные успешно обработаны', response: newresponse?.data })
    }
  } catch (err) {
    res.status(500).json({ message: 'Ошибка обработки данных', err: err?.response?.data })
  }
}