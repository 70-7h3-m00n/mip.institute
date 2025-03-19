import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import SeminarTickets from '@/components/sections/SeminarTickets'
import { routes } from '@/config/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

const SeminarsSlugPage = ({ seminar }) => {
  useHandleContextStaticProps({
    seminar
  })

  return (
    <Wrapper>
      <NextSeo nofollow={true} noindex={true} />
      <p>{seminar.title}</p>
      <p>{seminar.text}</p>
      <SeminarTickets />
      <p>{seminar.price} рублей</p>
      <PopupTrigger btn='eta' cta='buyTicket' />
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.seminar })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.seminar })

export default SeminarsSlugPage
