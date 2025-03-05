import { PageBachelor } from '@/components/pages'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { GetStaticPaths, GetStaticProps } from 'next'

const BachelorPage = ({ bachelor }) => {
  return <PageBachelor bachelor={bachelor} />
}

export const getStaticPaths: GetStaticPaths = async () =>
  //@ts-ignore
  await handleGetStaticPaths({ page: routes.front.bachelor })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.bachelor })

export default BachelorPage
