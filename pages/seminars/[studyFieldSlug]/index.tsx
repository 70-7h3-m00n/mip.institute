import Wrapper from '@/ui/Wrapper'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const SeminarsStudyFieldPage = ({ events }) => {
  const router = useRouter()
  const { studyFieldSlug } = router.query

  // Фильтрация семинаров по studyFieldSlug
  const filteredSeminars = events?.filter(
    seminar => seminar.studyFieldSlug === studyFieldSlug
  )
  return (
    <>
      <Wrapper>
        <NextSeo />
        <h1>Семинары слаг</h1>
      </Wrapper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.seminars })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.seminars })

export default SeminarsStudyFieldPage
