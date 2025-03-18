import { routes } from '@/config/index'
import getStaticPathsPageJournal from '@/lib/getStaticPaths/getStaticPathsPageJournal'
import getStaticPathsPageJournals from '@/lib/getStaticPaths/getStaticPathsPageJournals'
import getStaticPathsPageProgram from '@/lib/getStaticPaths/getStaticPathsPageProgram'
import getStaticPathsPagePrograms from '@/lib/getStaticPaths/getStaticPathsPagePrograms'
import getStaticPathsPageSeminar from '@/lib/getStaticPaths/getStaticPathsPageSeminar'
import getStaticPathsPageSeminars from '@/lib/getStaticPaths/getStaticPathsPageSeminars'
import { TypePageProgramPaths, TypePageProgramsPaths } from '@/types/index'
import TypePageJournalPaths from '@/types/page/journal/paths/TypePageJournalPaths'
import getStaticPathsPageBachelor from '../getStaticPaths/getStaticPathsPageBachelor'
import getStaticPathsPageLectorium from '../getStaticPaths/getStaticPathsPageLectorium'
import getStaticPathsPageLiveCourse from '../getStaticPaths/getStaticPathsPageLiveCourse'
import getStaticPathsPagePracticalTraining from '../getStaticPaths/getStaticPathsPagePracticalTraining'
import { GetStaticPathsResult } from 'next'

type TypeHandleGetStaticPathsProps = {
  page: string
  type?: 'Course' | 'Profession'
}

// 🔹 Определяем тип для результата
type GetStaticPathsResponse = {
  paths: TypePageProgramsPaths | TypePageProgramPaths | TypePageJournalPaths | []
  fallback: boolean | 'blocking'
}

const handleGetStaticPaths = async ({
  page,
  type
}: TypeHandleGetStaticPathsProps): Promise<GetStaticPathsResult> => {
  
  let result: GetStaticPathsResponse

  switch (page) {
    case routes.front.programs:
      result = await getStaticPathsPagePrograms({ type })
      break
    case routes.front.program:
      result = await getStaticPathsPageProgram({ type })
      break
    case routes.front.seminar:
      result = await getStaticPathsPageSeminar()
      break
    case routes.front.seminars:
      result = await getStaticPathsPageSeminars()
      break
    case routes.front.journal:
      result = await getStaticPathsPageJournal()
      break
    case routes.front.journals:
      result = await getStaticPathsPageJournals()
      break
    case routes.front.liveCourse:
      result = await getStaticPathsPageLiveCourse()
      break
    case routes.front.bachelor:
      result = await getStaticPathsPageBachelor()
      break
    case routes.front.practicalTraining:
      result = await getStaticPathsPagePracticalTraining()
      break
    case routes.front.lectorium:
      result = await getStaticPathsPageLectorium()
      break
    default:
      return { paths: [], fallback: 'blocking' }
  }

  return {
    paths: result.paths.map(({ params }) => ({
      params: { ...params, studyFieldSlug: params.studyFieldSlug ?? '' }
    })),
    fallback: result.fallback
  }
}

export default handleGetStaticPaths
