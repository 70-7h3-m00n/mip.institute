import CallMeBackForm from '@/components/forms/CallMeBackForm'
import { company, routes } from '@/config/index'
import truncate from '@/helpers/general/truncate'
import { useHandleContextStaticProps } from '@/hooks/index'
import { TypePageDefaultProps } from '@/types/index'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const PaymentPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Спасибо за заявку | ${company.name}`,
    desc: truncate(
      'Есть нюансы профессии, о которых мы не пишем на сайте, заходите к нам в телеграм, пообщаемся там, ведь психолог должен обладать определенными качествами',
      120
    ),
    canonical: `${routes.front.root}${routes.front.gratefull}`
  }
  return (
    <>
      <NextSeo
        noindex
        nofollow
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
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
      <CallMeBackForm />
    </>
  )
}

export default PaymentPage
