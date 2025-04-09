import stls from '@/styles/pages/PageBuildYourBrand.module.sass'
import Wrapper from '@/ui/Wrapper'
import BuildYourBrandHero from '@/components/sections/buildYourBrand/Hero/BuildYourBrandHero/BuildYourBrandHero'
import BuildYourBrandLearn from '../sections/buildYourBrand/BuildYourBrandLearn/BuildYourBrandLearn'

const PageBuildYourBrand = ({}) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <BuildYourBrandHero />
        <BuildYourBrandLearn/>
      </Wrapper>
    </div>
  )
}

export default PageBuildYourBrand
