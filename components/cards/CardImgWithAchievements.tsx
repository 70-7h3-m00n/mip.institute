import base64pixel from '@/config/base64pixel'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/cards/CardImgWithAchievements.module.sass'
import Image from 'next/image'

type Props = {
  person: {
    name: string
    achievements?: string
    position: string
    portrait?: {
      url: string
      width: string
      height: string
    }
    portraitForBlog?: {
      url: string
      width: string
      height: string
    }
  }
}

const CardImgWithAchievements = ({ person }: Props) => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <div className={stls.imgAuthorWithAchievements}>
      <div className={stls.imgAuthorContainer}>
        <Image
          src={person?.portraitForBlog?.url ?? person?.portrait?.url ?? ''}
          alt={'alt'}
          className={stls.imgAuthor}
          width={isMobileLayout ? 155 : 180}
          height={isMobileLayout ? 155 : 180}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className={stls.authorText}>
        <p className={stls.authorName}>{person.position}:</p>
        <p className={stls.authorName}>{person.name}</p>
      </div>
    </div>
  )
}

export default CardImgWithAchievements
