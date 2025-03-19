import PageTraining from '@/components/pages/PageTraining'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import preview from '@/config/preview'

type Props = {
  practicalTraining: PracticalTraining
}

const BachelorPage = ({ practicalTraining }: Props) => {
  
  return (
    <>
      <NextSeo nofollow={preview} noindex={preview} />
      <PageTraining practicalTraining={practicalTraining} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.practicalTraining })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.practicalTraining })

export default BachelorPage
