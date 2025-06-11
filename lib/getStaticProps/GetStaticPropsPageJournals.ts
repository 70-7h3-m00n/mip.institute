import { TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import TypePageJournalsProps from '@/types/page/journals/props/TypePageJournalsProps'
import TypePageJournalsPropsQuery from '@/types/page/journals/query/TypePageJournalsPropsQuery'

const getStaticPropsPageJournals = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageJournalsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageJournalsPropsQuery>({
    query: gql`
      query GetStaticPropsPageJournal {
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
        blogs(sort: "date:desc") {
          id
          title
          slug
          subtitle
          studyField
          studyFieldSlug
          date
          previewOnly
          picture {
            url
            width
            height
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

export default getStaticPropsPageJournals
