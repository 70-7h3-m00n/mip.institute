import stls from '@/styles/pages/PageBuildYourBrand.module.sass'
import Wrapper from '@/ui/Wrapper'
import BuildYourBrandHero from '@/components/sections/buildYourBrand/Hero/BuildYourBrandHero/BuildYourBrandHero'
import BuildYourBrandLearn from '../sections/buildYourBrand/BuildYourBrandLearn/BuildYourBrandLearn'
import BuildYourBrandFAQ from '../sections/buildYourBrand/BuildYourBrandFAQ/BuildYourBrandFAQ'
import BuildYourBrandForm from '../sections/buildYourBrand/BuildYourBrandForm/BuildYourBrandForm'
import BuildYourBrandWhatIsIncluded from '@/components/sections/buildYourBrand/BuildYourBrandWhatIsIncluded/BuildYourBrandWhatIsIncluded'
import BuildYourBrandReviews from '../sections/buildYourBrand/BuildYourBrandReviews/BuildYourBrandReviews'
import BuildYourBrandTeachers from '../sections/buildYourBrand/BuildYourBrandTeachers/BuildYourBrandTeachers'
import BuildYourBrandWho from '../sections/buildYourBrand/BuildYourBrandWho/BuildYourBrandWho'
import BuildYourBrandProgram from '../sections/buildYourBrand/BuildYourBrandProgram/BuildYourBrandProgram'
import BuildYourBrandBasics from '../sections/buildYourBrand/BuildYourBrandBasics/BuildYourBrandBasics'

const PageBuildYourBrand = ({}) => {
  return (
    <div className={stls.container}>
      <Wrapper>
        <BuildYourBrandHero />
        <BuildYourBrandBasics/>
        <BuildYourBrandLearn />
        <BuildYourBrandProgram/>
        <BuildYourBrandWhatIsIncluded />
        <BuildYourBrandWho/>
        <BuildYourBrandTeachers />
        <BuildYourBrandReviews />
        <BuildYourBrandForm />
        <BuildYourBrandFAQ />
      </Wrapper>
    </div>
  )
}

export default PageBuildYourBrand
