import routes from '@/config/routes'
import axios from 'axios'

const createLead = async (req, res) => {
  const {
    id,
    name,
    lastName,
    phone,
    price,
    email,
    question,
    promocode,
    leadPage,
    ymUid,
    utm,
    blockForAmo,
    roistat_visit,
    referer,
    roistatAB,
    gift,
    link, 
    password, 
    login

  } = req.body

  function convertStringToObject(str: string): Record<string, string> {
    str = str.replace(/\?/g, '').replace(/\//g, '')
    var params = str.split('&')
    var obj: Record<string, string> = {}
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split('=')
      obj[param[0]] = param[1]
    }
    return obj
  }

  const reserveUTM = convertStringToObject(leadPage)

  // URL для запроса сделки по ID
  const apiUrl = `https://webhook.gnzs.ru/ext/site-int/amo/29931190?gnzs_token=b6ce2e21-c68e-476f-87fe-ae268db2e9c2`
  try {
    const leadsData = {
      form: [
        { key: 'phone', value: phone },
        { key: 'name', value: name },
        { key: 'lastName', value: lastName },
        { key: 'email', value: email },
        { key: 'promocode', value: promocode || '' },
        { key: 'id', value: id || '' },
        { key: 'price', value: price || '' },
        { key: 'question', value: question || '' },
        { key: 'leadPage', value: `${routes.front.root}${leadPage}` || '' },
        { key: 'site block', value: blockForAmo || '' },
        {
          key: 'utm_source',
          value: utm?.utm_source || reserveUTM?.utm_source || ''
        },
        {
          key: 'utm_medium',
          value: utm?.utm_medium || reserveUTM?.utm_medium || ''
        },
        {
          key: 'utm_content',
          value: utm?.utm_content || reserveUTM?.utm_content || ''
        },
        { key: 'utm_term', value: utm?.utm_term || reserveUTM?.utm_term || '' },
        {
          key: 'utm_campaign',
          value: utm?.utm_campaign || reserveUTM?.utm_campaign || ''
        },
        { key: 'roistat', value: roistat_visit || '' },
        { key: '_ym_uid', value: ymUid || '' },
        { key: 'referer', value: referer || '' },
        { key: 'roistatAB', value: roistatAB || '' },
        { key: 'gift', value: gift || '' },
        { key: 'link', value: link || '' },
        { key: 'password', value: password || '' },
        { key: 'login', value: login || '' },
        {key: 'transaction_id', value: utm?.transaction_id || ''}
      ],
      host: 'mip.institute', // домен вашего сайта (ОБЯЗАТЕЛЬНО)
      token: 'b6ce2e21-c68e-476f-87fe-ae268db2e9c2'
    }

    // Выполните GET-запрос к amoCRM API
    const response = await axios.post(apiUrl, leadsData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      const leadData = response.data
      res.status(200).json({ status: 200, msg: 'Lead created' })
    }
  } catch (error) {
    console.error('Ошибка при создании нового лида:', error.response.data)
    res.status(400).json(error.response)
  }
}

export default createLead
