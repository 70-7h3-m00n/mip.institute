import Image from 'next/image'
import stls from './DontHesistateToAsk.module.sass'
import percent from '@/public/assets/imgs/contacts/ask.jpeg'
import Link from 'next/link'
import Wrapper from '@/ui/Wrapper'


const DontHesistateToAsk = () => {

  return (
    <div className={stls.container}>

    <Wrapper >
    <div className={stls.blocks} >
      <div className={stls.card}>
        <div className={stls.text}>
          <p >Не стесняйтесь задавать вопросы  —</p>
          <p> мы уже готовы на них ответить в мессенджере</p>
        </div>
        <Link target="_blank" href={'https://api.whatsapp.com/send/?phone=%2B74991108819&amp;text&amp;type=phone_number&amp;app_absent=0'}>
        написать в Whatsapp
        </Link>
      </div>
      <div className={stls.imgWrapper}>
        <Image src={percent} alt='Получи доступ к курсу' className={stls.img} width={500} height={500} />
      </div>
    </div>
    </Wrapper>
    </div>

  )
}

export default DontHesistateToAsk
