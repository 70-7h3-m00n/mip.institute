import ProgramsFilters from '@/components/program/ProgramsFilters'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/pages/PageBachelors.module.sass'
import Breadcrumbs from '@/ui/Breadcrumbs'
import Wrapper from '@/ui/Wrapper'
import BachelorSlugCard from '../cards/BachelorSlugCard'
import { SeoPageBachelors } from '../seo'

const PageBachelors = ({
  programs = [],
  bachelors = [],
  practicalTrainings = []
}) => {
  return (
    <Wrapper>
      <SeoPageBachelors />
      <FilterProvider items={programs}>
        <Breadcrumbs isJournal />
        <h1 className={stls.title}>Высшее образование</h1>
        <ProgramsFilters
          bachelors={bachelors}
          practicalTrainings={practicalTrainings}
          allPrograms={programs}
          studyFields={[]}
        />
        <div className={stls.cards}>
          {bachelors.map(bachelor => (
            // @ts-ignore
            <BachelorSlugCard key={bachelor?.slug} card={bachelor} />
          ))}
        </div>
      </FilterProvider>
    </Wrapper>
  )
}
export default PageBachelors
