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
import BuildYourBrandCertificate from '@/components/sections/buildYourBrand/CourseCertificate/BuildYourBrandCertificate'
import SeoCommon from '../seo/SeoCommon'

const seo = {
  metaTitle: 'Личный бренд психолога: курс онлайн',
  metaDescription:
    'Обучение на интенсиве "Построй личный бренд психолога: основы продвижения" с выдачей сертификата и подтверждением часов дистанционно | Узнаете о создании позиционирования и привлечении клиентов',
  canonicalURL: 'https://mip.institute/practical-training/build-your-brand',
  isSEOFriendly: true
}
const PageBuildYourBrand = ({}) => {
  return (
    <div className={stls.container}>
      <SeoCommon
          seo={seo}
          programTitle='Личный бренд психолога: курс онлайн'
        />
      <Wrapper>
        <BuildYourBrandHero />
        <BuildYourBrandBasics />
        <BuildYourBrandLearn />
        <BuildYourBrandProgram />
        <BuildYourBrandWhatIsIncluded />
        <BuildYourBrandWho />
        <BuildYourBrandCertificate />
        <BuildYourBrandTeachers />
        <BuildYourBrandReviews />
        <BuildYourBrandForm />
        <BuildYourBrandFAQ />
      </Wrapper>
    </div>
  )
}

export default PageBuildYourBrand
