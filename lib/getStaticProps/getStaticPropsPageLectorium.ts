import { TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageLectoriumProps from '@/types/page/lectorium/props/TypePageLectoriumProps'
import { TypePageLectoriumPropsQuery } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'

const getStaticPropsPageLectorium = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageLectoriumProps
  revalidate?: number | boolean
}> => {
  const slug = context?.params?.slug?.toString() || null
  try {
    const res = await apolloClient.query<TypePageLectoriumPropsQuery>({
      query: gql`
        query getStaticPropsPageLectorium($slug: String!) {
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
          lectorium: lectoriums(where: { slug: $slug }) {
            slug
            title
            subtitle
            type
            label
            isInternal
            eventAddress
            picture {
              url
              width
              height
            }
            price
            description
            targetDate
            endTime
            places
            speaker {
              picture {
                url
                width
                height
              }
              text {
                text
              }
              title
            }
            whatYouWillLearn {
              picture {
                url
                width
                height
              }
              text {
                text
              }
            }
            faq {
              question
              answer
            }
            reviewWithDate {
              picture {
                url
                width
                height
              }
              name
              text
              date
            }
            pdf {
              url
            }
            timepadHref
            diploma {
              url
              width
              height
            }
            lectoriums {
              title
              subtitle
              slug
              date
              time
              type
              targetDate
              label
              picture {
                url
                alternativeText
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
        lectorium: res?.data?.lectorium?.[0] || null
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

export default getStaticPropsPageLectorium
