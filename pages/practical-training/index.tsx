import { GetStaticProps } from 'next'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import PageTrainings from '@/components/pages/PageTrainings'
import TypePageBachelorsProps from '@/types/page/bachelors/props/TypePageBachelorsProps'
import SeoPractical from '@/components/seo/SeoPractical'
import { Bachelor, PracticalTraining } from '@/types/lib/bachelors/TypeLibBachelors'

interface ProgramsPageProps {
  practicalTrainings: PracticalTraining[]
  programs: any
  bachelors: Bachelor[]
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({
  practicalTrainings,
  programs,
  bachelors
}) => {
  return (
    <>
      <SeoPractical />
      <PageTrainings
        programs={programs}
        practicalTrainings={practicalTrainings}
        bachelors={bachelors}
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
