import stls from './BuildYourBrandHero.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import GroupSupervisionHeroInfo from '../BuildYourBrandHeroInfo/BuildYourBrandHeroInfo'
import { CldImage } from 'next-cloudinary'

const BuildYourBrandHero = () => {
  return (
    <section className={stls.container}>
      <h1 className={stls.title}>Групповая супервизия</h1>
      <div className={stls.imageBlock}>
        <CldImage
          src='group_supervision_hero_3849e0ac52'
          alt='Групповая супервизия'
          className={stls.image}
          style={{ width: '100%', height: 'auto' }}
          width='1200'
          height='800'
          crop='fit'
        />
        <GroupSupervisionHeroInfo />
      </div>
      <div className={stls.btn}>
        <PopupTrigger btn='alpha' cta='signUp' />
      </div>
    </section>
  )
}

export default BuildYourBrandHero
