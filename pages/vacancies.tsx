import PageVacancies from '@/components/pages/PageVacancies'
import SeoCommon from '@/components/seo/SeoCommon'
import { getStaticPropsVacancies } from '@/lib/handlers/getStaticPropsVacancies'
import { GetStaticProps } from 'next'

const VacanciesIndexPage = ({ vacancies }) => {
  return (
    <>
      <SeoCommon seo={vacancies.seo[0]} programTitle='Вакансии МИП'/>
      <PageVacancies vacancies={vacancies} />
    </>
  )
}
//@ts-ignore
export const getStaticProps: GetStaticProps = async () => await getStaticPropsVacancies()
export default VacanciesIndexPage
