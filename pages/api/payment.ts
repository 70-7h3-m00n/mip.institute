import dev from '@/config/dev'
import routes from '@/config/routes'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { env } from 'process'
import { v4 as uuidv4 } from 'uuid'

export type TypeNextApiResponseLeadData = {
  readonly err?: unknown
  readonly msg: string
  readonly url?: string
  readonly status: number
  readonly transactionId?: number | string
}

// const shopId = env.YOOKASSA_SHOP_ID_DEV
// const secretKey = env.YOOKASSA_SECRET_KEY_DEV

// env.YOOKASSA_SHOP_ID_DEV
// env.YOOKASSA_SHOP_ID_PROD
// env.YOOKASSA_SECRET_KEY

const shopId = dev ? process.env.YOOKASSA_SHOP_ID_DEV : process.env.YOOKASSA_SHOP_ID_PROD
const secretKey = dev ? process.env.YOOKASSA_SECRET_KEY_DEV : process.env.YOOKASSA_SECRET_KEY_PROD

const idempotenceKey = uuidv4()

const payment = async (
  req: NextApiRequest,
  res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
  const { name, surname, phone, email, id, utm, referer, price, returnURL, lmsId } = req.body

  const leadPage = `${routes.front.root}${req.body?.leadPage}`

  const requestData = {
    amount: {
      value: `${price}.00`,
      currency: 'RUB'
    },
    confirmation: {
      type: 'redirect',
      return_url: `${routes.front.home}`
    },
    metadata: {
      name,
      surname,
      phone,
      email,
      id,
      leadPage,
      utm_source: utm?.utm_source || '',
      utm_medium: utm?.utm_medium || '',
      utm_content: utm?.utm_content || '',
      utm_term: utm?.utm_term || '',
      utm_campaign: utm?.utm_campaign || '',
      referer: referer || '',
      price,
      ik: idempotenceKey,
      lmsId
    },
    receipt: {
      customer: {
        full_name: `${name} ${surname}`,
        phone,
        email
      },
      items: [
        {
          description: `Программа `,
          quantity: '1.00',
          amount: {
            value: `${price}.00`,
            currency: 'RUB'
          },
          vat_code: '2',
          payment_mode: 'full_prepayment',
          payment_subject: 'commodity'
        }
      ]
    }
  }

  try {
    if (!shopId || !secretKey) {
      throw new Error('shopId или secretKey отсутствуют в переменных окружения')
    }
    const response = await axios.post('https://api.yookassa.ru/v3/payments', requestData, {
      auth: {
        username: shopId,
        password: secretKey
      },
      headers: {
        'Idempotence-Key': idempotenceKey,
        'Content-Type': 'application/json'
      }
    })

    res.status(200).json({
      status: 200,
      msg: 'URL returned successfully',
      url: response.data.confirmation.confirmation_url,
      transactionId: response.data.id
    })
  } catch (err) {
    res.status(500).json({ status: 500, err, msg: 'Unexpected server error' })
    console.error(err)
  }
}

export default payment
