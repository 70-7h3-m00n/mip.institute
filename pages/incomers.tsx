import PageIncomers from '@/components/pages/PageIncomers'
import { getStaticPropsIncomers } from '@/lib/handlers/getStaticPropsIncomers'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

const IncomersIndexPage = ({ incomers }) => {
  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      <PageIncomers incomers={incomers} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => await getStaticPropsIncomers()
export default IncomersIndexPage
