import {
  TypeGeneralGetStaticPropsContext,
  TypePageTeachersProps,
  TypePageTeachersPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageTeachers = async ({
  context
}: TypeGeneralGetStaticPropsContext): Promise<{
  props: TypePageTeachersProps
  revalidate: number | boolean
}> => {
  try {
    const res = await apolloClient.query<TypePageTeachersPropsQuery>({
      query: gql`
        query GetStaticPropsPageTeachers {
          programs {
            id
            studyField
            studyFieldSlug
            title
            slug
            typeLabel
            type
            studyMounthsDuration
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
          teachers {
            id
            name
            achievements
            specialization
            portrait {
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
  } catch (error) {
    return error
  }
  
}

export default getStaticPropsPageTeachers
