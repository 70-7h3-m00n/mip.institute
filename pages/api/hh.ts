import axios from 'axios'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { price, utm,promocode, program } = req.body

  console.log(`https://career.hh.ru/events?transaction_id=${utm.transaction_id}&offer_id=1&adv_id=67&offer_name=${program}&action=ORDER&amount=${price}&promocode=${promocode}`);
  
  
  try {
    const newresponse = await axios.get(
      `https://career.hh.ru/events?transaction_id=${utm.transaction_id}&offer_id={1}&adv_id={67}&offer_name=psy&action=ORDER&amount=${price}&promocode=${promocode || null}`
    )
    res.status(200).json({
      success: true,
      data: newresponse?.data
    })
  } catch (err) {
    console.log(err.data)
    res.status(200).json({ success: false })
  }
}
