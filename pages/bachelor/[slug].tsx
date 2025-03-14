import { PageBachelor } from '@/components/pages'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

const BachelorPage = ({ bachelor }) => {
  return <PageBachelor bachelor={bachelor} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await handleGetStaticPaths({ page: routes.front.bachelor })

  // Проверяем, что paths корректен
  const paths = (result.paths || []).filter(path => path !== null) as { params: ParsedUrlQuery }[]

  return {
    paths,
    fallback: result.fallback || 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.bachelor })

export default BachelorPage
