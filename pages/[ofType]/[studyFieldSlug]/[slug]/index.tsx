import { PagesProgram } from '@/components/pages'
import { SeoPagesProgram } from '@/components/seo'
import { revalidate } from '@/config/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import apolloClient from '@/lib/apolloClient'
import { TypePageProgramProps, TypePageProgramsPropsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import { validOfTypeValues } from 'constants/staticPropsValidation'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const ProfessionPage: NextPage<TypePageProgramProps> = ({
  programs,
  program,
  reviews,
  studyFieldSlug
}) => {
  useHandleContextStaticProps({
    //@ts-ignore
    programs,
    program,
    curProgramsType: program?.type,
    curProgramsStudyFieldSlug: studyFieldSlug
  })

  const programOverview = program?.programOverview

  const slug = program?.slug

  return (
    <>
      <SeoPagesProgram
        program={program}
        //@ts-ignore
        ofType={program?.type}
        //@ts-ignore
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesProgram
      //@ts-ignore
        slug={slug}  programOverview={programOverview} reviews={reviews} ofType={program?.type}
        program={program}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //@ts-ignore
  const { slug, ofType, studyFieldSlug } = params

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

  // Фильтрация программ на основе параметра ofType
  let filteredPrograms = programs
  if (ofType === 'professions') {
    //@ts-ignore
    filteredPrograms = programs?.filter(program => program?.type === 'Profession')
  } else if (ofType === 'courses') {
    //@ts-ignore
    filteredPrograms = programs?.filter(program => program?.type === 'Course')
  } else if (ofType === 'shortTerm') {
    //@ts-ignore
    filteredPrograms = programs?.filter(program => program?.type === 'ShortTerm')
  } else if (ofType === 'programs') {
    filteredPrograms = programs
  }

  const studyFieldMap = {}
  filteredPrograms?.forEach(program => {
    //@ts-ignore
    if (!studyFieldMap[program?.studyFieldSlug]) {
      //@ts-ignore
      studyFieldMap[program?.studyFieldSlug] = {
        studyField: program?.studyField,
        studyFieldSlug: program?.studyFieldSlug
      }
    }
  })

  const studyFields = Object.values(studyFieldMap) as any

  try {
    const res = await apolloClient.query({
      query: gql`
        query GetStaticPropsProgram($slug: String!) {
          reviews {
            id
            name
            profession
            title
            story
            createdAt
            picture {
              url
              width
              height
            }
          }

          programs {
            id
            studyField
            studyFieldSlug
          }
          program: programs(where: { slug: $slug }) {
            id
            title
            heroPicture {
              url
              width
              height
            }
            diploma1 {
              url
              width
              height
            }
            diploma2 {
              url
              width
              height
            }
            portfolio {
              name
              profession
              specialization
              salary
              qualification
              resumeSkills
              picture {
                url
                width
                height
              }
            }
            admissionDate
            isPopular
            courseOpened
            slug
            studyForm
            type
            studyMounthsDuration
            description
            studyFormLabel
            typeLabel
            studyHours
            WhatYouWillLearn
            programOverview
            programOverviewTitle
            ForWhom
            forWhomSubtitle
            fullTitle
            shortContents
            resumeTitle
            entrySalary
            resumeSkills
            jobTitles
            qualification
            studyField
            typeFullLabel
            studyFieldSlug
            price
            discount
            questions
            qnas {
              question
              answer
            }
            unique_reviews {
              id
              name
              profession
              title
              story
              createdAt
              picture {
                url
                width
                height
              }
            }
            requests {
              title
              description
            }
            teachers {
              id
              name
              achievements
              specialization
              experience
              portrait {
                url
                width
                height
              }
              index_number {
                idx
              }
            }
            index_number {
              idx
            }
            seo {
              metaTitle
              metaDescription
              metaImage {
                url
                width
                height
                alternativeText
              }
              keywords
              metaRobots
              structuredData
              metaViewport
              canonicalURL
              isSEOFriendly
              metaSocial {
                title
                description
                image {
                  url
                  width
                  height
                  alternativeText
                }
                socialNetwork
              }
            }
          }
        }
      `,
      variables: { slug }
    })
    const reviewsData = res?.data?.reviews || []
    const validSlug = res?.data?.program?.[0]
    const validOfType = validOfTypeValues.find(el => el === params?.ofType)

    const validStudyFieldSlug = studyFields.find(
      el => el.studyFieldSlug === studyFieldSlug
    )
    if (!validOfType || !validStudyFieldSlug || !validSlug) {
      return {
        notFound: true
      }
    }
    return {
      props: {
        program: res?.data?.program?.[0] || null,

        reviews: reviewsData
      },
      revalidate: revalidate.default
    }
  } catch (error) {
    return error
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await apolloClient.query({
    query: gql`
      query GetStaticPathsPrograms {
        programs {
          slug
          studyFieldSlug
          type
        }
      }
    `
  })

  const paths = res.data.programs.map(program => ({
    params: {
      ofType: program.type.toLowerCase(),
      studyFieldSlug: program.studyFieldSlug,
      slug: program.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProfessionPage