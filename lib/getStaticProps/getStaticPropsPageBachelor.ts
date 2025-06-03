import { TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageBachelorPropsQuery from '@/types/page/bachelor/TypePageBachelorPropsQuery'
import TypePageBachelorProps from '@/types/page/bachelor/props/TypePageBachelorProps'

const getStaticPropsBachelor = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageBachelorProps
  revalidate?: number | boolean
}> => {
  const slug = context?.params?.slug?.toString() || null

  try {
    const res = await apolloClient.query<TypePageBachelorPropsQuery>({
      query: gql`
        query getStaticPropsBachelor($slug: String!) {
          bachelor: bachelors(where: { slug: $slug }) {
            title
            slug
            shortContents
            onlinePriceWithDiscount
            offlinePriceWithDiscount
            offlineFullPrice
            onlineFullPrice
            OfflinePriceYear
            OnlinePriceYear
            benefits {
              text
            }
            heroPicture {
              url
              width
              height
            }
            educationCode
            minTime
            maxTime
            admissionDate
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
            shortDescription
            fullDescription
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
            programs {
              id
              title
              studyHours
              heroPicture {
                url
                width
                height
              }
              index_number {
                idx
              }
            }
            qnas {
              question
              answer
            }
            additional_specializations {
              title
              studyHours
              admissionDate
              record {
                text
              }
              heroPicture {
                url
                width
                height
              }
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
        slug
      }
    })

    return {
      props: {
        bachelor: res?.data?.bachelor?.[0] || null
        // lifeCourse: res?.data?.lifeCourse?.[0] || null,
        // reviews: reviewsData
      }
      // revalidate: revalidate.default
    }
  } catch (error) {
    console.error('Ошибка запроса:', error)
    console.error('Статус код:', error.statusCode)
    console.error('Результат:', error.result)
    console.log('errrrrrr', error.networkError.result)
    return error
  }
}

export default getStaticPropsBachelor
