import PageTitle from '@/ui/PageTitle'
import ActiveLicenses from '@/components/sections/ActiveLicenses'
import Diplomas from '@/components/sections/Diplomas'
import LegalDocs from '@/components/sections/LegalDocs'
import LegalInfo from '@/components/sections/LegalInfo'
import { routes } from '@/config/index'
import {
  dataDocsRegulationsLeft,
  dataDocsRegulationsRight,
  dataOchuVoMipDocsConstituentLeft,
  dataOchuVoMipDocsConstituentRight
} from '@/data/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { handleGetStaticProps } from '@/lib/index'
import stls from '@/styles/pages/Legal.module.sass'
import { TypePageDefaultProps } from '@/types/index'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'

const LegalEduPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  useHandleContextStaticProps({ programs })
  return (
    <>
    <NextSeo nofollow={true} noindex={true} />
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
      <LegalDocs title='Документы, приказы, положения' isRulesBlock isOchuVoMip />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.legal })

export default LegalEduPage
