import { TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePagePracticalTrainingPropsQuery from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import TypePagePracticalTrainingProps from '@/types/page/practicalTraining/props/TypePagePracticalTrainingProps'

const getStaticPropsPracticalTraining = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePagePracticalTrainingProps
  revalidate: number | boolean
}> => {
  const slug = context?.params?.slug?.toString() || null
  try {
    const res = await apolloClient.query<TypePagePracticalTrainingPropsQuery>({
      query: gql`
        query getStaticPropsPracticalTraining($slug: String!) {
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
          practicalTraining: practicalTrainings(where: { slug: $slug }) {
            title
            subtitle
            duration
            slug
            price
            practicalList {
              item {
                title
                text
                icon
              }
            }
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
            termsPoints {
              text
            }
            briefProgram {
              title
              record {
                text
              }
            }
            courseResult {
              list {
                text
              }
            }
            whatYouWillLearn {
              list {
                text
              }
            }
            whatYouWillLearnPhoto {
              url
              width
              height
            }
            whatInProgram {
              list {
                text
              }
            }
            programDescription {
              title
              subtitle
              subtitleColor
            }
            descriptionCards {
              item {
                title
                subtitle
                picture {
                  url
                  width
                  height
                }
              }
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
            review {
              name
              image {
                url
                width
                height
              }
              slide {
                question
                answer
              }
            }
            qnas {
              question
              answer
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
        practicalTraining: res?.data?.practicalTraining?.[0] || null
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

export default getStaticPropsPracticalTraining
