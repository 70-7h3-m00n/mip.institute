import PageIncomers from '@/components/pages/PageIncomers'
import { getStaticPropsIncomers } from '@/lib/handlers/getStaticPropsIncomers'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { preview } from '../config'

const IncomersIndexPage = ({ incomers }) => {
  
  return (
    <>

      <NextSeo title='Поступление в МИП (Московский Институт Психологии)' description='Подробная информация для поступающих и абитуриентов Московского Института Психологии (МИП): условия поступления, широкий выбор программ, учебный процесс, условия оплаты, а так же помощь в подборе программы от наших специалистов.' noindex={preview} nofollow={preview} />
      <PageIncomers incomers={incomers} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => await getStaticPropsIncomers()
export default IncomersIndexPage
