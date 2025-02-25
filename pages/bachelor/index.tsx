import { GetStaticProps } from 'next'
import { routes } from '@/config/index'
import { PageBachelors } from '@/components/pages'
import { handleGetStaticProps } from '@/lib/index'
import TypePageBachelorsProps from '@/types/page/bachelors/props/TypePageBachelorsProps'
import TypePagePracticalTrainingsProps from '@/types/page/practicalTrainings/props/TypePagePracticalTrainingsProps'

// Типизация Props для компонента
interface ProgramsPageProps {
  bachelors: TypePageBachelorsProps[] | null
  programs: any
  practicalTrainings: TypePagePracticalTrainingsProps[] | null
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({
  bachelors,
  programs,
  practicalTrainings
}) => {
  return (
    <>
      <PageBachelors
        programs={programs}
        //@ts-ignore
        bachelors={bachelors}
        //@ts-ignore
        practicalTrainings={practicalTrainings}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  ProgramsPageProps
> = async context => {
  const bachelorsData = await handleGetStaticProps({
    context,
    page: routes.front.bachelors
  })
  const practicalTrainingsData = await handleGetStaticProps({
    context,
    page: routes.front.practicalTrainings
  })

  const bachelors =
    'bachelors' in bachelorsData.props ? bachelorsData.props.bachelors : null
  const programs =
    'programs' in bachelorsData.props ? bachelorsData.props.programs : null
  const practicalTrainings =
    'practicalTrainings' in practicalTrainingsData.props
      ? practicalTrainingsData.props.practicalTrainings
      : null

  return {
    props: {
      bachelors,
      programs,
      practicalTrainings
    },
    // revalidate: 60
  }
}

export default ProgramsPage
