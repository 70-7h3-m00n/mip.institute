import {
  TypeGeneralRoutesFront,
  TypePageProgramsPaths,
  TypePageProgramPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { routes, revalidate } from '@/config/index'
import {
  getStaticPathsPagePrograms,
  getStaticPathsPageProgram,
  getStaticPathsPageSeminar,
  getStaticPathsPageSeminars,
  getStaticPathsPageJournal,
  getStaticPathsPageJournals
} from '@/lib/index'
import TypePageJournalPaths from '@/types/page/journal/paths/TypePageJournalPaths'
import getStaticPathsPageLiveCourse from '../getStaticPaths/getStaticPathsPageLiveCourse'
import getStaticPathsPageBachelor from '../getStaticPaths/getStaticPathsPageBachelor'
import getStaticPathsPagePracticalTraining from '../getStaticPaths/getStaticPathsPagePracticalTraining'

type TypeHandleGetStaticPathsProps = {
  page: TypeGeneralRoutesFront[keyof TypeGeneralRoutesFront]
  type?: 'Course' | 'Profession'
}

const handleGetStaticPaths = async ({
  page,
  type
}: TypeHandleGetStaticPathsProps): Promise<{
  paths:
    | TypePageProgramsPaths
    | TypePageProgramPaths
    | TypePageJournalPaths
    | []
  fallback: boolean | 'blocking'
}> => {
  switch (page) {
    case routes.front.programs:
      return await getStaticPathsPagePrograms({ type })

    case routes.front.program:
      return await getStaticPathsPageProgram({ type })

    case routes.front.seminar:
      return await getStaticPathsPageSeminar()

    case routes.front.seminars:
      return await getStaticPathsPageSeminars()

    case routes.front.journal:
      return await getStaticPathsPageJournal()

    case routes.front.journals:
      return await getStaticPathsPageJournals()

    case routes.front.liveCourse:
      return await getStaticPathsPageLiveCourse()

    case routes.front.bachelor:
      return await getStaticPathsPageBachelor()

    case routes.front.practicalTraining:
      return await getStaticPathsPagePracticalTraining()

    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
