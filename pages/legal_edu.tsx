import PageTitle from '@/ui/PageTitle'
import ActiveLicenses from '@/components/sections/ActiveLicenses'
import Diplomas from '@/components/sections/Diplomas'
import LegalDocs from '@/components/sections/LegalDocs'
import LegalInfo from '@/components/sections/LegalInfo'
import { company, routes } from '@/config/index'
import {
  dataDocsRegulationsLeft,
  dataDocsRegulationsRight,
  dataOchuVoMipDocsConstituentLeft,
  dataOchuVoMipDocsConstituentRight
} from '@/data/index'
import truncate from '@/helpers/general/truncate'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/Legal.module.sass'
import { TypePageDefaultProps } from '@/types/index'
import { GetStaticProps, NextPage } from 'next'

const LegalEduPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  //@ts-ignore
  useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Сведения об образовательной организации | ${company.name}`,
    desc: truncate(
      `Действующие лицензии, выдаваемые дипломы
    и сертификаты, основные сведения и нормативные документы`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.legal}`
  }

  return (
    <>
      {/* <NextSeo
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
      /> */}
      {/* <SeoOrganizationJsonLd /> */}
      <PageTitle>
        Сведения <br className={stls.linebrake} /> об организации
      </PageTitle>
      <ActiveLicenses isOchuVoMip />
      <Diplomas isOchuVoMip />
      <LegalInfo isOchuVoMip />
      <LegalDocs
        title='Учредительные документы'
        listLeft={dataOchuVoMipDocsConstituentLeft}
        listRight={dataOchuVoMipDocsConstituentRight}
      />
      <LegalDocs
        title='Нормативные документы'
        listLeft={dataDocsRegulationsLeft}
        listRight={dataDocsRegulationsRight}
        isHEblockVisible
      />
      <LegalDocs
        title='Документы, приказы, положения'
        isRulesBlock
        isOchuVoMip
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.legal })

export default LegalEduPage
