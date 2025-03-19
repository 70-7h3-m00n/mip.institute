import PageTitle from '@/ui/PageTitle'
import PaymentBtns from '@/components/sections/PaymentBtns'
import PaymentDebitCard from '@/components/sections/PaymentDebitCard'
import PaymentInfo from '@/components/sections/PaymentInfo'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, routes } from '@/config/index'
import truncate from '@/helpers/general/truncate'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import { TypePageDefaultProps } from '@/types/index'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'

const PaymentPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Оплата | ${company.name}`,
    desc: truncate(
      'Для проведения оплаты обучения, с помощью банковской карты, ниже на этой странице необходимо нажать кнопку Оплата банковской картой с использованием банковских карт следующих платёжных систем: VISA International, Mastercard Worldwide, JCB, МИР',
      120
    ),
    canonical: `${routes.front.root}${routes.front.payment}`
  }
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={true}
        noindex={true}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <SeoOrganizationJsonLd />
      <PageTitle>Оплата</PageTitle>
      <PaymentDebitCard />
      <PaymentInfo />
      <PaymentBtns />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.payment })

export default PaymentPage
