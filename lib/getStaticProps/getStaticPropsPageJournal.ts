import {
  TypeGeneralGetStaticPropsContext,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageJournalProps from '@/types/page/journal/props/TypePageJournalProps'
import TypePageJournalPropsQuery from '@/types/page/journal/query/TypePageJournalPropsQuery'

const getStaticPropsPageJournal = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageJournalProps
  revalidate: number | boolean
}> => {
  const studyFieldSlug = context?.params?.studyFieldSlug?.toString() || null
  const slug = context?.params?.slug?.toString() || null

  try {
    const res = await apolloClient.query<TypePageJournalPropsQuery>({
      query: gql`
        query GetStaticPropsPageJournal($slug: String!) {
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
          blog: blogs(where: { slug: $slug }) {
            id
            title
            slug
            studyFieldSlug
            studyField
            subtitle
            readTime
            date
            picture {
              url
              width
              height
            }
            blogs {
              date
              picture {
                width
                height
                url
              }
              slug
              studyField
              studyFieldSlug
              subtitle
              title
            }
            blogAuthor {
              name
              position
              portrait {
                url
                width
                height
              }
            }
            teacher {
              name
              position
              achievements
              achievementsJournal
              portraitForBlog {
                url
                width
                height
              }
              portrait {
                url
                width
                height
              }
            }
            seo {
              metaTitle
              metaDescription
            }
            article {
              __typename
              ... on ComponentBlogTextImageBlock {
                text
                image {
                  url
                  width
                  height
                }
              }
              __typename
              ... on ComponentBlogSubtitle {
                subtitle
                subtitleSlug
                color
              }
              __typename
              ... on ComponentBlogBigSizeText {
                text
                textColor
              }
              __typename
              ... on ComponentBlogFullColoredTextBlock {
                text
                textColor
              }
              __typename
              ... on ComponentBlogList {
                listItem {
                  id
                  text
                  icon
                }
              }
              __typename
              ... on ComponentBlogListWithTitle {
                icon
                item {
                  id
                  title
                  text
                  icon
                }
              }
              ... on ComponentBlogSingleImageBlock {
                alternativeText
                picture {
                  url
                  width
                  height
                }
              }
              ... on ComponentBlogCommentBlock {
                text
                lineColor
              }
              __typename
              ... on ComponentBlogTextBlockWithBackground {
                text
                backgroundColor
                borderColor
                textColor
              }

              __typename
              ... on ComponentBlogListWithBackgroundAndTitle {
                title
                backgroundColor
                lineColor
                icon
                item {
                  id
                  text
                  icon
                }
              }
              __typename
              ... on ComponentBlogRelatedPrograms {
                title
                textItem {
                  id
                  text
                }
                programs {
                  id
                  title
                  slug
                  studyFieldSlug
                  type
                  heroPicture {
                    url
                    width
                    height
                  }
                }
                borderColor
              }
              __typename
              ... on ComponentBlogTable {
                row {
                  id
                  record {
                    id
                    text
                  }
                }
              }
              __typename
              ... on ComponentBlogTeacherComment {
                specialization
                comment
                borderColor
                teacher {
                  name
                  specialization
                  portrait {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        slug
        // studyFieldSlug
      }
    })
    return {
      props: {
        blog: res?.data?.blog?.[0] || null
      },
      revalidate: revalidate.default
    }
  } catch (error) {
    console.error('Ошибка запроса:', error)
    console.error('Статус код:', error.statusCode)
    console.error('Результат:', error.result)
    console.log('errrrrrr', error.networkError.result)
    return error
  }
}

export default getStaticPropsPageJournal
