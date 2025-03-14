import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import EduStandarts from '@/components/sveden/EduStandarts/EduStandarts'

const EduStandartsPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <EduStandarts />
      </SvedenSkeleton>
    </>
  )
}

export default EduStandartsPage
