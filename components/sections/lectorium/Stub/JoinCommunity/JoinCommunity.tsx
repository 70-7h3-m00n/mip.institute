import stls from './JoinCommunity.module.sass'
import TwoColumns from '@/ui/TwoColumns'
import Image from 'next/image'
import { socialLinks } from 'constants/contacts/contactsIcons'

const JoinCommunity = () => {
  return (
    <>
      <div className={stls.container}>
        <TwoColumns>
          <div className={stls.container_text}>
            <h2 className={stls.title}>
              Присоединяйтесь <br /> к сообществу психологов
            </h2>
            <p className={stls.description}>
              Чтобы быть в числе первых, кто узнает обо всем, подпишитесь на наши уведомления или
              следите за нами в социальных сетях
            </p>
            <div className={stls.socials}>
              {socialLinks.map(social => (
                <a
                  key={social.id}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.id}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className={stls.container_img}>
            <Image
              src='https://res.cloudinary.com/mipinstitute/image/upload/v1738753678/Front_phone_3c64dd3237.png'
              alt='FrontPhone'
              className={stls.img}
              width='580'
              height='360'
              priority
            />
          </div>
        </TwoColumns>
      </div>
    </>
  )
}

export default JoinCommunity
