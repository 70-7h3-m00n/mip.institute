import axios from 'axios'

export default async function handler(req, res) {

  const { id, utm, email } = req.body
  const click_id = utm?.utm_term
  const token = '159d095a'

  if (!click_id || utm?.utm_source !== 'leadmagnet') {
    return res.status(400).json({ success: false, message: 'Invalid or missing click_id' })
  }

  try {
    // Отправка заявки
    const leadUrl = `https://click.goleadcpa.ru/track/conv?token=${token}&click_id=${click_id}&goal_alias=lead&adv_order_id=${id}&adv_track_id=${id}&conv_status=pending&email=${encodeURIComponent(email)}`
    await axios.get(leadUrl)

    // // Если есть сумма — отправка оплаты
    // if (price && !isNaN(Number(price))) {
    //   const saleUrl = `https://click.goleadcpa.ru/track/conv?token=${token}&click_id=${click_id}&goal_alias=sale&adv_order_id=${id}&adv_track_id=${id}&amount=${price}&conv_status=pending&email=${encodeURIComponent(email)}`
    //   await axios.get(saleUrl)
    // }

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Ошибка постбэка в LeadMagnet:', error)
    res.status(500).json({ success: false })
  }
}
