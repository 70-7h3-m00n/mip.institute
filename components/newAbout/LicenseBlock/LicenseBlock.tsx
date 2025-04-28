import React from 'react'
import stls from './LicenseBlock.module.sass'
import Wrapper from '@/ui/Wrapper'
import routes from '@/config/routes'
import { ArrowIcon, LicenseIcon } from 'constants/contacts/contactsIcons'
import { InfoIcon, RequisitesIcon } from 'constants/newAbout/newAboutIcons'

const cards = [
  {
    icon: <RequisitesIcon />,
    title: 'Реквизиты:',
    text: 'Научная автономная некоммерческая организация «Московский институт психологии» (НАНО «МИП»)',
    href: `${routes.front.docsDetails}/mip-sberbank-details.pdf`
  },
  {
    icon: <LicenseIcon />,
    title: 'Лицензия',
    text: 'Департамента образования города Москвы на осуществление образовательной деятельности',
    href: 'https://islod.obrnadzor.gov.ru/rlic/details/67f7635c-5dbb-e9d7-c30c-950b7e64c838/'
  },
  {
    icon: <InfoIcon />,
    title: 'Сведения:',
    text: 'Научная автономная некоммерческая организация «Московский институт психологии» (НАНО «МИП»)',
    href: `${routes.front.docsConstituent}/svidetelstvo-o-gosudarstvennoj-registracii-nano-mip.pdf`
  }
]

const LicenseBlock = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Мы лицензированное образовательное учреждение</h2>
        <div className={stls.cards}>
          {cards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              target='_blank'
              rel='noopener noreferrer'
              className={stls.card}>
              <div className={stls.top}>
                {card.icon}
                <span className={stls.highlight}>{card.title}</span>
              </div>
              <div className={stls.bottom}>
                <span>{card.text}</span>
                <ArrowIcon />
              </div>
            </a>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default LicenseBlock
