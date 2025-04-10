import stls from '@/styles/pages/PageBuildYourBrand.module.sass'
import Wrapper from '@/ui/Wrapper'
import BuildYourBrandHero from '@/components/sections/buildYourBrand/Hero/BuildYourBrandHero/BuildYourBrandHero'
import BuildYourBrandLearn from '../sections/buildYourBrand/BuildYourBrandLearn/BuildYourBrandLearn'
import BuildYourBrandFAQ from '../sections/buildYourBrand/BuildYourBrandFAQ/BuildYourBrandFAQ'
import BuildYourBrandForm from '../sections/buildYourBrand/BuildYourBrandForm/BuildYourBrandForm'
import BuildYourBrandWhatIsIncluded from '@/components/sections/buildYourBrand/BuildYourBrandWhatIsIncluded/BuildYourBrandWhatIsIncluded'
import BuildYourBrandReviews from '../sections/buildYourBrand/BuildYourBrandReviews/BuildYourBrandReviews'

const PageBuildYourBrand = ({}) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <BuildYourBrandHero />
        <BuildYourBrandLearn />
        <BuildYourBrandWhatIsIncluded />
        <BuildYourBrandReviews />
        <BuildYourBrandForm />
        <BuildYourBrandFAQ />
      </Wrapper>
    </div>
  )
}

export default PageBuildYourBrand
