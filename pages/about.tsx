import ActiveLicenses from '@/components/sections/ActiveLicenses'
import AboutMip from '@/components/sections/AboutMip/AboutMip'
import AboutPageContactForm from '@/components/sections/AboutPageContactForm'
import ChooseProgram from '@/components/sections/ChooseProgram/ChooseProgram'
import TeachersFiles from '@/components/sections/TeachersLineUp/TeachersFiles'
import WhoIsOurSpeakers from '@/components/sections/WhoIsOurSpeakers/WhoIsOurSpeakers'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, preview, routes } from '@/config/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import { TypeLibTeachers, TypePageTeachersProps } from '@/types/index'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { sortBasedOnNumericOrder } from '../helpers'
import truncate from '@/helpers/general/truncate'

const AboutPage: NextPage<TypePageTeachersProps> = ({ programs, teachers }) => {
  //@ts-ignore
  useHandleContextStaticProps({ programs })
//@ts-ignore
  const teachersSorted: TypeLibTeachers = sortBasedOnNumericOrder({ teachers })

  const seoParams = {
    title: `Об институте | ${company.desc} | ${company.name}
    `,
    desc: truncate(company.about, 120),
    canonical: `${routes.front.root}${routes.front.about}`
  }

  return (
    <div
      style={{
        overflow: 'hidden'
      }}>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={preview ? true : false}
        noindex={preview ? true : false}
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
      <AboutMip />
      <WhoIsOurSpeakers />
      <TeachersFiles teachers={teachersSorted} />
      <ChooseProgram />
      <ActiveLicenses />
      <AboutPageContactForm />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.teachers })

export default AboutPage
