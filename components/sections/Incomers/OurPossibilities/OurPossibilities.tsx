import loadIcon from '@/helpers/general/loadIcon'
import routes from '@/config/routes'
import stls from './OurPossibilities.module.sass'
import Wrapper from '@/ui/Wrapper'
import Image from 'next/image'
import ArrowButton from '../ArrowButton/ArrowButton'

type TextItemType = {
  type: string
  children: Array<{ text: string; type: string }>
}

type PossibilityItemType = {
  id: number
  text: TextItemType[]
}

type Props = {
  data: PossibilityItemType[]
}

const socialTopLinks = [
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
  }
]

const socialButoomLinks = [
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

const OurPossibilities = ({ data }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Наши возможности</h2>
        <div className={stls.containerBlock}>
          {data[0] && (
            <div className={stls.containerBlock_One}>
              <div className={stls.containerBlock_One_btn}>
                <ArrowButton href={'lectoriums'} />
              </div>
              <div className={stls.containerBlock_One_title}>
                {data[0].text[0]?.children[0]?.text}
              </div>
              <div className={stls.containerBlock_One_description}>
                {data[0].text[1]?.children[0]?.text}
              </div>
              <Image
                className={stls.containerBlock_One_fon}
                width={240}
                height={240}
                src='https://res.cloudinary.com/dp3iuhwtp/image/upload/v1739182647/Fon_One_Blcok_e981e92d9a.png'
                alt='Фон блока'
              />
            </div>
          )}

          <div className={stls.containerBlock_Two}>
            <div className={stls.containerBlock_Two_topIcon}>
              {socialTopLinks.map(social => (
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
            {data[1] && (
              <>
                <div className={stls.containerBlock_Two_title}>
                  {data[1].text[0]?.children[0]?.text}
                </div>
                <div className={stls.containerBlock_Two_description}>
                  {data[1].text[1]?.children[0]?.text}
                </div>
              </>
            )}
            <div className={stls.containerBlock_Two_bottomIcon}>
              {socialButoomLinks.map(social => (
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

          <div className={stls.containerBlock_Three}>
            <div className={stls.containerBlock_Three_title}>
              {data[2]?.text[0]?.children[0]?.text}
            </div>
            <div className={stls.containerBlock_Three_description}>
              {data[2]?.text[1]?.children[0]?.text}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default OurPossibilities
