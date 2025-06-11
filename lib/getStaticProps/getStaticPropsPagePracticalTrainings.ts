import { TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { log } from 'console'
import TypePagePracticalTrainingsProps from '@/types/page/practicalTrainings/props/TypePagePracticalTrainingsProps'
import TypePagePracticalTrainingsPropsQuery from '@/types/page/practicalTrainings/query/TypePagePracticalTrainingsPropsQuery'

const getStaticPropsPagePracticalTrainings = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePagePracticalTrainingsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePagePracticalTrainingsPropsQuery>({
    query: gql`
      query getStaticPropsPagePracticalTrainings {
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

        practicalTrainings {
          title
          subtitle
          duration
          slug
          heroPicture {
            url
            width
            height
          }
        }
      }
    `
  })

  return {
    props: {
      ...res.data
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePracticalTrainings
