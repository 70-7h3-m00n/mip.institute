import routes from '@/config/routes'
import loadIcon from '@/helpers/general/loadIcon'
import stls from './BottomBlock.module.sass'
import Wrapper from '@/ui/Wrapper'
import TwoColumns from '@/ui/TwoColumns'
import Image from 'next/image'

const BottomBlock = () => {
  const socialLinks = [
    {
      id: 'vk',
      icon: loadIcon('IconVk'),
      link: routes.external.vk
    },
    {
      id: 'whatsapp',
      icon: loadIcon('IconWhatsapp'),
      link: routes.external.whatsapp
    },
    {
      id: 'telegram',
      icon: loadIcon('IconTelegram'),
      link: routes.external.telegram
    },
    {
      id: 'youtube',
      icon: loadIcon('IconYt'),
      link: routes.external.youtube
    },
    {
      id: 'IconOk',
      icon: loadIcon('IconOk'),
      link: routes.external.ok
    },
    {
      id: 'dzen',
      icon: loadIcon('IconDzen'),
      link: routes.external.dzen
    }
  ]
  return (
    <>
      <Wrapper>
        <div className={stls.container}>
          <TwoColumns>
            <div className={stls.container_text}>
              <h2 className={stls.title}>Присоединяйтесь к сообществу психологов</h2>
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
                style={{ width: '100%', height: 'auto' }}
                width='580'
                height='360'
              />
            </div>
          </TwoColumns>
        </div>
      </Wrapper>
    </>
  )
}

export default BottomBlock
