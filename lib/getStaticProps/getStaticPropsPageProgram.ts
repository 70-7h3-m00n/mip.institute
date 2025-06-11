import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramProps,
  TypePageProgramPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageProgram = async ({
  context,
  type
}: TypeGeneralGetStaticPropsContext & {
  type?: string | null
}): Promise<{
  props: TypePageProgramProps
  revalidate: number | boolean
}> => {
  const studyFieldSlug = context?.params?.studyFieldSlug?.toString() || null
  const slug = context?.params?.slug?.toString() || null

  const res = await apolloClient.query<TypePageProgramPropsQuery>({
    query: gql`
      query GetStaticPropsPageProgram($slug: String!, $studyFieldSlug: String!, $type: String!) {
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
        program: programs(where: { slug: $slug, studyFieldSlug: $studyFieldSlug, type: $type }) {
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
    variables: {
      slug,
      studyFieldSlug,
      type
    }
  })

  const reviewsData = res?.data?.reviews || []
  return {
    props: {
      ...res?.data,
      studyFieldSlug,
      program: res?.data?.program?.[0] || null,
      reviews: reviewsData
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageProgram
