import stls from './BuildYourBrandHero.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import { CldImage } from 'next-cloudinary'
import GroupSupervisionHeroInfo from '@/components/sections/groupSupervision/Hero/GroupSupervisionHeroInfo/GroupSupervisionHeroInfo'
import heroBrand from 'constants/buildYourBrand/heroBrand'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const BuildYourBrandHero = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <h1 className={stls.title}>
        Построй
        <span className={stls.colored}> личный бренд </span>
        психолога!
      </h1>
      <h3 className={stls.subtitle}>Основы продвижения</h3>
      <div className={stls.imageBlock}>
        <CldImage
          src={
            isMobileAndTabletLayout
              ? 'build_your_brand_hero_mobile_457051b962'
              : 'build_your_brand_hero_67dcc4e94e'
          }
          alt='Групповая супервизия'
          className={stls.image}
          style={{ width: '100%', height: 'auto' }}
          width='1200'
          height='800'
          crop='fit'
        />
        <GroupSupervisionHeroInfo data={heroBrand} />
      </div>
      <div className={stls.btn}>
        <PopupTrigger btn='alpha' cta='signUp' />
      </div>
    </section>
  )
}

export default BuildYourBrandHero
