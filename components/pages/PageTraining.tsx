import stls from '@/styles/pages/PageTraining.module.sass'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import PracticalBriefProgram from '@/components/sections/practicalTraining/PracticalBriefProgram/PracticalBriefProgram'
import PracticalCertificate from '@/components/sections/practicalTraining/PracticalCertificate/PracticalCertificate'
import PracticalConditions from '@/components/sections/practicalTraining/PracticalConditions/PracticalConditions'
import PracticalHeroProgram from '@/components/sections/practicalTraining/PracticalHeroProgram/PracticalHeroProgram'
import PracticalList from '@/components/sections/practicalTraining/PracticalListCarousel/PracticalListCarousel'
import PracticalPaymentForm from '@/components/sections/practicalTraining/PracticalPaymentForm/PracticalPaymentForm'
import PracticalProgramDescription from '@/components/sections/practicalTraining/PracticalProgramDescription/PracticalProgramDescription'
import PracticalReviews from '@/components/sections/practicalTraining/PracticalReviews/PracticalReviews'
import PracticalSteps from '@/components/sections/practicalTraining/PracticalSteps/PracticalSteps'
import PracticalWhatInProgram from '@/components/sections/practicalTraining/PracticalWhatInProgram/PracticalWhatInProgram'
import PracticalWhatYouWillLearn from '@/components/sections/practicalTraining/PracticalWhatYouWillLearn/PracticalWhatYouWillLearn'
import PracticalWhoIsProgramFor from '@/components/sections/practicalTraining/PracticalWhoIsProgramFor/PracticalWhoIsProgramFor'
import RequirementsInProfession from '@/components/sections/practicalTraining/RequirementsInProfession/RequirementsInProfession'
import Teachers from '../sections/Teachers'
import { SeoPageBachelor } from '../seo'

type Props = {
  practicalTraining: PracticalTraining
}

const PageTraining = ({ practicalTraining }: Props) => {
  if (!practicalTraining) {
    return <div>Данные о программе отсутствуют</div>
  }
  return (
    <div className={stls.pageWrapper}>
      <SeoPageBachelor program={practicalTraining} />
      <PracticalHeroProgram practicalTraining={practicalTraining} />
      <PracticalList list={practicalTraining?.practicalList.item} />
      <PracticalSteps />
      <PracticalWhoIsProgramFor />
      <PracticalWhatInProgram list={practicalTraining?.whatInProgram.list} />
      <PracticalProgramDescription
        description={practicalTraining?.programDescription}
        cards={practicalTraining?.descriptionCards.item}
      />
      <PracticalWhatYouWillLearn
        listLearn={practicalTraining?.whatYouWillLearn}
        photo={practicalTraining?.whatYouWillLearnPhoto}
      />
      <PracticalCertificate />
      <PracticalBriefProgram listProgram={practicalTraining?.briefProgram} />

      {practicalTraining?.teachers.length > 0 && (
        <Teachers
          title={'Преподаватели'}
          teachersList={practicalTraining?.teachers}
          isExperienceHidden
          halfScreenTitle
          isWhiteBackground
          showOnMobile={false}
          isSquareBtn
          isTeacherRoundBtn={false}
        />
      )}
      <PracticalConditions />

      {practicalTraining?.review?.length > 0 && (
        <PracticalReviews review={practicalTraining.review} />
      )}
      <RequirementsInProfession />

      <PracticalPaymentForm price={practicalTraining.price} />
    </div>
  )
}

export default PageTraining
