import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { revalidate } from '@/config/index'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import { useHandleContextStaticProps } from '@/hooks/index'
import apolloClient from '@/lib/apolloClient'
import { TypePageProgramsProps, TypePageProgramsPropsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import { validOfTypeValues } from 'constants/staticPropsValidation'
import { GetStaticPaths, NextPage } from 'next'

const ProgramsPage: NextPage<
  TypePageProgramsProps & { studyFields: any } & { allPrograms: any[] }
> = ({ programs, studyFields, allPrograms, bachelors, practicalTrainings }) => {
  useHandleContextStaticProps({ programs })

  return (
    <>
      <SeoPagesPrograms programs={programs} />
      <FilterProvider items={programs}>
        <PagesPrograms
          bachelors={bachelors}
          practicalTrainings={practicalTrainings}
          programs={programs}
          studyFields={studyFields}
          allPrograms={allPrograms}
        />
      </FilterProvider>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { ofType, studyFieldSlug } = params || {}

  const res = await apolloClient.query<TypePageProgramsPropsQuery>({
    query: gql`
      query GetStaticPropsPagePrograms {
        bachelors {
          title
        }
        practicalTrainings {
          title
        }
        programs {
          id
          title
          slug
          studyField
          studyFieldSlug
          type
          typeLabel
          studyMounthsDuration
          studyHours
          studyMounthsDurationStandart
          studyHoursStandart
          price
          isPopular
          courseOpened
          heroPicture {
            url
            width
            height
          }
          index_number {
            idx
          }
        }
      }
    `
  })

  const programs = res.data.programs
  const bachelors = res.data.bachelors
  const practicalTrainings = res.data.practicalTrainings

  // Фильтрация программ на основе параметров ofType и studyFieldSlug
  let filteredPrograms = programs?.filter(program => program?.studyFieldSlug === studyFieldSlug)
  if (ofType === 'professions') {
    filteredPrograms = filteredPrograms?.filter(program => program?.type === 'Profession')
  } else if (ofType === 'courses') {
    filteredPrograms = filteredPrograms?.filter(program => program?.type === 'Course')
  } else if (ofType === 'shortTerm') {
    filteredPrograms = filteredPrograms?.filter(program => program?.type === 'ShortTerm')
  }

  const studyFieldMap: Record<string, { studyField: string; studyFieldSlug: string }> = {}

  const getValidSlug = (slug: string | null | undefined) => slug ?? 'unknown'

  if (ofType === 'courses') {
    programs
      ?.filter(program => program?.type === 'Course')
      .forEach(program => {
        const slug = getValidSlug(program?.studyFieldSlug)
        if (!studyFieldMap[slug]) {
          studyFieldMap[slug] = {
            studyField: program?.studyField || 'Неизвестное направление',
            studyFieldSlug: slug
          }
        }
      })
  } else if (ofType === 'shortTerm') {
    programs
      ?.filter(program => program?.type === 'ShortTerm')
      .forEach(program => {
        const slug = getValidSlug(program?.studyFieldSlug)
        if (!studyFieldMap[slug]) {
          studyFieldMap[slug] = {
            studyField: program?.studyField || 'Неизвестное направление',
            studyFieldSlug: slug
          }
        }
      })
  } else {
    programs?.forEach(program => {
      const slug = getValidSlug(program?.studyFieldSlug)
      if (!studyFieldMap[slug]) {
        studyFieldMap[slug] = {
          studyField: program?.studyField || 'Неизвестное направление',
          studyFieldSlug: slug
        }
      }
    })
  }

  const studyFields = Object.values(studyFieldMap) as any
  const validOfType = validOfTypeValues.find(el => el === params.ofType)

  const validStudyFieldSlug = studyFields.find(el => el.studyFieldSlug === studyFieldSlug)

  if (!validOfType || !validStudyFieldSlug) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      allPrograms: programs,
      programs: filteredPrograms,
      studyFields,
      ofType,
      bachelors,
      practicalTrainings
    },
    revalidate: revalidate.default
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await apolloClient.query({
    query: gql`
      query GetStaticPathsPagePrograms {
        programs {
          studyFieldSlug
          type
          studyField
        }
      }
    `
  })

  const paths =
    res?.data?.programs?.map(program => ({
      params: {
        ofType: program?.type?.toLowerCase() || 'unknown',
        studyFieldSlug: program?.studyFieldSlug || 'unknown'
      }
    })) || [] // ✅ Гарантируем, что `paths` всегда массив

  return {
    paths, // Теперь это массив, даже если нет данных
    fallback: 'blocking'
  }
}

export default ProgramsPage
