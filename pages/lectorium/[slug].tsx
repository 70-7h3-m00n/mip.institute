import PageLectorium from '@/components/pages/PageLectorium'
import SeoLectorium from '@/components/seo/SeoLectorium'
import routes from '@/config/routes'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getServerSideProps } from 'next/dist/build/templates/pages'
import { useRouter } from 'next/router'

type Props = {
  lectorium: Lectorium
}

const LectoriumPage = ({ lectorium }: Props) => {
  // console.log(lectorium);
  

  const router = useRouter()
  const today = new Date()

  const isNoFollow = today >= new Date(lectorium?.targetDate)
  const isNoindex = today >= new Date(lectorium?.targetDate)

  return (
    <>
      <SeoLectorium isNoFollow={isNoFollow} isNoindex={isNoindex}  canonical={`${routes.front.root}${router.asPath}`} seo={lectorium?.seo} programTitle={`${lectorium?.title} ${lectorium?.description}: очный семинар в Москве`} />
      <PageLectorium lectorium={lectorium} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  //@ts-ignore
  await handleGetStaticPaths({ page: routes.front.lectorium })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.lectorium })

export default LectoriumPage
