import stls from '@/styles/pages/PageBuildYourBrand.module.sass'
import Wrapper from '@/ui/Wrapper'
import BuildYourBrandHero from '@/components/sections/buildYourBrand/Hero/BuildYourBrandHero/BuildYourBrandHero'
import BuildYourBrandLearn from '../sections/buildYourBrand/BuildYourBrandLearn/BuildYourBrandLearn'
import BuildYourBrandFAQ from '../sections/buildYourBrand/BuildYourBrandFAQ/BuildYourBrandFAQ'
import BuildYourBrandForm from '../sections/buildYourBrand/BuildYourBrandForm/BuildYourBrandForm'

const PageBuildYourBrand = ({}) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <BuildYourBrandHero />
        <BuildYourBrandLearn />
        <BuildYourBrandForm />
        <BuildYourBrandFAQ />
      </Wrapper>
    </div>
  )
}

export default PageBuildYourBrand
