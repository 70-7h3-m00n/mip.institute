import { TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePagePracticalTrainingsProps from '@/types/page/practicalTrainings/props/TypePagePracticalTrainingsProps'
import TypePagePracticalTrainingsPropsQuery from '@/types/page/practicalTrainings/query/TypePagePracticalTrainingsPropsQuery'

const getStaticPropsPageLectoriums = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePagePracticalTrainingsProps
  revalidate?: number | boolean
}> => {
  try {
    const res = await apolloClient.query<TypePagePracticalTrainingsPropsQuery>({
      query: gql`
        query getStaticPropsPagePracticalTrainings {
          lectoriums {
            id
            title
            subtitle
            type
            slug
            date
            price
            targetDate
            endTime
            isInternal
            eventAddress
            timepadHref
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
  } catch (error) {
    return error
  }
  
}

export default getStaticPropsPageLectoriums
