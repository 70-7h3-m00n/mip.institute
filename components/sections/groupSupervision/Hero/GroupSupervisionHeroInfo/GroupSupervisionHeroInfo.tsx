import stls from '@/components/sections/groupSupervision/Hero/GroupSupervisionHeroInfo/GroupSupervisionHeroInfo.module.sass'
import heroInfo from 'constants/GroupSupervision/heroInfo'

interface Props {
  data?: (
    | {
        title: string
        text: string
      }
    | {
        title: string
        text: JSX.Element
      }
  )[]
}

const GroupSupervisionHeroInfo = ({ data = heroInfo }: Props) => {
  return (
    <ul className={stls.info}>
      {data.map((el, idx) => (
        <li key={el.title} className={stls.item}>
          <p className={stls.title}>{el.title}</p>
          <p className={stls.description}>{el.text}</p>
        </li>
      ))}
    </ul>
  )
}

export default GroupSupervisionHeroInfo
