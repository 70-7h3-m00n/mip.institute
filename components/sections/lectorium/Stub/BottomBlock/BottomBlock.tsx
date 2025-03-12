import routes from '@/config/routes'
import stls from './BottomBlock.module.sass'
import Wrapper from '@/ui/Wrapper'
import TwoColumns from '@/ui/TwoColumns'
import Image from 'next/image'
import IconVk from '@/components/icons/IconVk'
import IconWhatsapp from '@/components/icons/IconWhatsapp'
import IconTelegram from '@/components/icons/IconTelegram'
import IconYt from '@/components/icons/IconYt'
import IconOk from '@/components/icons/IconOk'
import IconDzen from '@/components/icons/IconDzen'

const BottomBlock = () => {
  const socialLinks = [
    {
      id: 'vk',
      icon: <IconVk />,
      link: routes.external.vk
    },
    {
      id: 'whatsapp',
      icon: <IconWhatsapp />,
      link: routes.external.whatsapp
    },
    {
      id: 'telegram',
      icon: <IconTelegram />,
      link: routes.external.telegram
    },
    {
      id: 'youtube',
      icon: <IconYt />,
      link: routes.external.youtube
    },
    {
      id: 'IconOk',
      icon: <IconOk />,
      link: routes.external.ok
    },
    {
      id: 'dzen',
      icon: <IconDzen />,
      link: routes.external.dzen
    }
  ]
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

export default BottomBlock
