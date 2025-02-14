import PageVacancies from '@/components/pages/PageVacancies'
import SeoCommon from '@/components/seo/SeoCommon'
import { getStaticPropsVacancies } from '@/lib/handlers/getStaticPropsVacancies'
import { GetStaticProps } from 'next'

const VacanciesIndexPage = ({ vacancies }) => {
  return (
    <>
      <SeoCommon seo={vacancies.seo[0]} />
      <PageVacancies vacancies={vacancies} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => await getStaticPropsVacancies()
export default VacanciesIndexPage
