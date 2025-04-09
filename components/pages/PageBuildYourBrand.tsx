import stls from '@/styles/pages/PageBuildYourBrand.module.sass'
import Wrapper from '@/ui/Wrapper'
import BuildYourBrandHero from '@/components/sections/buildYourBrand/Hero/BuildYourBrandHero/BuildYourBrandHero'
import BuildYourBrandLearn from '../sections/buildYourBrand/BuildYourBrandLearn/BuildYourBrandLearn'
import BuildYourBrandFAQ from '../sections/buildYourBrand/BuildYourBrandFAQ/BuildYourBrandFAQ'

const PageBuildYourBrand = ({}) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <BuildYourBrandHero />
        <BuildYourBrandLearn />
        <BuildYourBrandFAQ />
      </Wrapper>
    </div>
  )
}

export default PageBuildYourBrand
