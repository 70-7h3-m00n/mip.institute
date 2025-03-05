import Image from 'next/image'
import pic from '@/public/assets/imgs/payment/online-payment.jpg'

const ImgOnlinePayment = ({ width = 0, height = 0 }) => {
  return (
    <div>
      <Image
        src={pic}
        alt='Оплата онлайн'
        width={width !== 0 && width || undefined}
        height={height !== 0 && height || undefined}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgOnlinePayment
