import axios from 'axios'
import { routes } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const genezis = async values => {
  try {
    values.id = uuidv4()
    const res = await axios.post(`/api/genezis`, values)
    await axios.post(`${routes.front.root}/api/advCakeNew`, values)

    if (values?.utm?.utm_source === 'admitad') {
      await axios.post(`${routes.front.root}/api/admitad`, values)
    }

    if (values?.utm?.utm_source === 'edpartners') {
      await axios.post(`${routes.front.root}/api/edPartners`, values)
    }

    if (values?.utm?.utm_source === 'sravni') {
      await axios.post(`${routes.front.root}/api/sravni`, values)
    }

    if (values?.utm?.utm_source === 'careerru') {
      await axios.post(`${routes.front.root}/api/hh`, values)
    }

    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
  }
}

export default genezis
