import { getStudyFieldsLabels, getStudyFieldsSlugs } from '@/helpers/index'

type StudyFieldItem = { label: string; slug: string }

const getStudyFields = (programs: any[]): StudyFieldItem[] => {
  const labels = getStudyFieldsLabels(programs)
  const slugs = getStudyFieldsSlugs(programs)

  return labels
    .map((item, idx) => slugs[idx] && { label: item, slug: slugs[idx] })
    .filter((item): item is StudyFieldItem => Boolean(item))
}

export default getStudyFields
