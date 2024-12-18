import stls from '@/styles/components/sections/JoinInSocialChannels.module.sass'
import Link from 'next/link'
import { IconArrowRight } from '../icons'

const SocialChannels = ({ channel }) => {
  return (
    <Link
      href={channel.href}
      passHref
      target='_blank'
      rel='noopener noreferrer'
      className={stls.oneChannel}>
      <div className={stls.channelSource}>
        {channel.icon}
        <p className={stls.channelName}>{channel.name}</p>
      </div>
      <span className={stls.arrowIcon}>
        <IconArrowRight inContacts />
      </span>
    </Link>
  )
}
export default SocialChannels
