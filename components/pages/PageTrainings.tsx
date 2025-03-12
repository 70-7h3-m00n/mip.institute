import { FilterProvider } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/pages/PageTrainings.module.sass'
import PracticalSlugCard from '../cards/PracticalSlugCard'
import Breadcrumbs from '@/ui/Breadcrumbs'
import ProgramsFilters from '@/components/program/ProgramsFilters'
import Wrapper from '@/ui/Wrapper'
import { Bachelor, PracticalTraining, Program } from '@/types/lib/bachelors/TypeLibBachelors'

const supervision: any = {
  title: 'Групповая супервизия',
  duration: '1 месяц / 10 часов',
  slug: 'supervision',
  heroPicture: {
    url: 'https://res.cloudinary.com/mipinstitute/image/upload/v1733736404/group_supervision_hero_3849e0ac52.jpg'
  }
}
interface Props {
  programs: Program[]
  practicalTrainings: PracticalTraining[]
  bachelors: Bachelor[]
}

const PageTrainings: React.FC<Props> = ({
  programs = [],
  practicalTrainings = [],
  bachelors = []
}) => {
  return (
    <Wrapper>
      <FilterProvider items={programs}>
        <Breadcrumbs isJournal />
        <h1 className={stls.title}>Практическая подготовка</h1>
        <ProgramsFilters
          bachelors={bachelors}
          practicalTrainings={practicalTrainings}
          allPrograms={programs}
          studyFields={[]}
        />
        <div className={stls.cards}>
          {practicalTrainings.map(practicalTraining => (
            <PracticalSlugCard key={practicalTraining?.slug} card={practicalTraining} />
          ))}
          <PracticalSlugCard card={supervision} />
        </div>
      </FilterProvider>
    </Wrapper>
  )
}

export default PageTrainings
