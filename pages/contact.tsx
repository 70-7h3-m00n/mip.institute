import PageTitle from '@/ui/PageTitle'
import Contacts from '@/components/sections/Contacts'
import JoinInSocialChannels from '@/components/sections/JoinInSocialChannels'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, preview, routes } from '@/config/index'
import truncate from '@/helpers/general/truncate'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import { TypePageDefaultProps } from '@/types/index'
import { GetStaticProps, NextPage } from 'next'
import { CorporateContactJsonLd, NextSeo } from 'next-seo'

const LegalPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Контакты | ${company.name}`,
    desc: truncate(
      `${company.addresses.default.city}, ${company.addresses.default.street.name} ${company.addresses.default.street.type} ${company.addresses.default.street.door}, ${company.phoneNumbers.default.val}, ${company.phoneNumbers.defaultAlt.val}, ${company.emails.default.val}`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.contact}`,
    logoUrl: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={truncate(seoParams.desc, 120)}
        canonical={seoParams.canonical}
        nofollow={preview ? true : false}
        noindex={preview ? true : false}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: seoParams.logoUrl,
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
      <CorporateContactJsonLd
        url={routes.front.root}
        logo={seoParams.logoUrl}
        contactPoint={[
          {
            telephone: company.phoneNumbers.default.val,
            contactType: company.phoneNumbers.default.contactType,
            areaServed: company.phoneNumbers.default.areaServed,
            availableLanguage: company.phoneNumbers.default.languages
          },
          {
            telephone: company.phoneNumbers.defaultAlt.val,
            contactType: company.phoneNumbers.defaultAlt.contactType,
            areaServed: company.phoneNumbers.defaultAlt.areaServed,
            availableLanguage: company.phoneNumbers.defaultAlt.languages
          },
          {
            telephone: company.phoneNumbers.kz.val,
            contactType: company.phoneNumbers.kz.contactType,
            areaServed: company.phoneNumbers.kz.areaServed,
            availableLanguage: company.phoneNumbers.kz.languages
          },
          {
            telephone: company.phoneNumbers.kzAlt.val,
            contactType: company.phoneNumbers.kzAlt.contactType,
            areaServed: company.phoneNumbers.kzAlt.areaServed,
            availableLanguage: company.phoneNumbers.kzAlt.languages
          }
        ]}
      />
      <PageTitle>Контакты</PageTitle>
      <Contacts />
      <JoinInSocialChannels />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.contact })

export default LegalPage
