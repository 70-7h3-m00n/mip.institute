import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import TypePageLectoriumPathsQuery from '@/types/page/lectorium/TypePageLectoriumPathsQuery'
import TypePageLectoriumPaths from '@/types/page/lectorium/TypePageJournalPaths'

const getStaticPathsPageLectorium = async (): Promise<{
  paths: TypePageLectoriumPaths
  fallback: boolean | 'blocking'
}> => {
  try {
    const res = await apolloClient.query<TypePageLectoriumPathsQuery>({
      query: gql`
        query getStaticPathsPageLectorium {
          lectoriums {
            slug
          }
        }
      `
    })
    return {
      paths: Array.from(
        new Set(
          res.data?.lectorium?.map(program => ({
            params: {
              slug: program?.slug
            }
          }))
        )
      ) ,
      fallback: 'blocking'
    }
  } catch (error) {
    console.error('Ошибка запроса:', error)
    console.error('Статус код:', error.statusCode)
    console.error('Результат:', error.result)
    return error
  }
}

export default getStaticPathsPageLectorium
