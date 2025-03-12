import React from 'react'
import stls from './Requisites.module.sass'
import Wrapper from '@/ui/Wrapper'
import { ArrowIcon, DocumentIcon, LicenseIcon } from './constant'

const Requisites = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Реквизиты</h2>
        <div className={stls.cards}>
          <a
            href='https://islod.obrnadzor.gov.ru/rlic/details/67f7635c-5dbb-e9d7-c30c-950b7e64c838/'
            target='_blank'
            rel='noopener noreferrer'
            className={stls.card}>
            <DocumentIcon />
            <span className={stls.licenseText}>
              <span className={stls.highlight}>Реквизиты: </span>
              Научная автономная 
              некоммерческая организация «Московский институт психологии» (НАНО «МИП»)
              <ArrowIcon />
            </span>
          </a>

          <a
            href='https://islod.obrnadzor.gov.ru/rlic/details/67f7635c-5dbb-e9d7-c30c-950b7e64c838/'
            target='_blank'
            rel='noopener noreferrer'
            className={stls.card}>
            <LicenseIcon />
            <span className={stls.licenseText}>
              <span className={stls.highlight}>Лицензия </span>
              департамента образования города Москвы на осуществление образовательной деятельности
              <ArrowIcon />
            </span>
          </a>
        </div>
      </Wrapper>
    </section>
  )
}

export default Requisites
