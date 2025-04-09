import stls from '@/components/sections/groupSupervision/Hero/GroupSupervisionHeroInfo/GroupSupervisionHeroInfo.module.sass'
import heroInfo from 'constants/GroupSupervision/heroInfo'

const BuildYourBrandHeroInfo = () => {
  return (
    <ul className={stls.info}>
      {heroInfo.map((el, idx) => (
        <li key={el.title} className={stls.item}>
          <p className={stls.title}>{el.title}</p>
          <p className={stls.description}>{el.text}</p>
        </li>
      ))}
    </ul>
  )
}

export default BuildYourBrandHeroInfo
