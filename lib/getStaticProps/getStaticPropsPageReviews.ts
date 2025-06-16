import {
  TypeGeneralGetStaticPropsContext,
  TypePageReviewsProps,
  TypePageReviewsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageReviews = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageReviewsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageReviewsPropsQuery>({
    query: gql`
      query GetStaticPropsPageReviews {
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
        uniqueReviews{
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
          index_number {
            idx
          }
        }
      }
    `
  })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageReviews
