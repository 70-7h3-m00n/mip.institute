import getNextWednesday from '@/helpers/getNextThursday'
import stls from '@/styles/components/popups/PopupProgram.module.sass'
import Link from 'next/link'
import ForPopup from '../imgs/general/ForPopup'


const PopupProgram = ({ program, href }) => {

  return (
    <Link href={href} passHref>
    <div className={stls.container}>
      <div className={stls.img}>
        <ForPopup src={program?.heroPicture?.url} alt={program.title}  />
      </div>
      <div className={stls.content}>
        <p className={stls.title}>{program.title}</p>
        <p className={stls.subtitle}>Ближайшее зачисление: <br /> {getNextWednesday(new Date())}</p>
        <p className={stls.hours}>Кол-во часов: {program.studyHours}</p>
      </div>
    </div>
    </Link>
  )
}

export default PopupProgram