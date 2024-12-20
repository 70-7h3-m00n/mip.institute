import { FilterProvider } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/pages/PageTrainings.module.sass'
import PracticalSlugCard from '../cards/PracticalSlugCard'
import Breadcrumbs from '@/ui/Breadcrumbs'
import ProgramsFilters from '@/components/program/ProgramsFilters'
import Wrapper from '@/ui/Wrapper'

const supervision: any = {
  "title": "Групповая супервизия",
  "duration": "1 месяц / 48 академ. часов",
  "slug": "supervision",
  "heroPicture": {
      "url": "https://res.cloudinary.com/mipinstitute/image/upload/v1733736404/group_supervision_hero_3849e0ac52.jpg",
  }
}

const PageTrainings = ({
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
            <PracticalSlugCard
              key={practicalTraining?.slug}
              card={practicalTraining}
            />
          ))}
          <PracticalSlugCard card={supervision}/>
        </div>
      </FilterProvider>
    </Wrapper>
  )
}

export default PageTrainings
