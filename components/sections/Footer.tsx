'use client'
import BtnOk from '@/components/btns/BtnOk'
import BtnTelegram from '@/components/btns/BtnTelegram'
import BtnVk from '@/components/btns/BtnVk'
import BtnWhatsapp from '@/components/btns/BtnWhatsapp'
import BtnYt from '@/components/btns/BtnYt'
import GeneralAddress from '@/components/sections/GeneralAddress'
import FooterBottom from '@/components/sections/FooterBottom'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import { company } from '@/config/index'
import stls from '@/styles/components/sections/Footer.module.sass'
import classNames from 'classnames'
import { programsLinks, staticLinks } from 'constants/footer'
import { getCookie } from 'cookies-next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import BtnDzen from '../btns/BtnDzen'
import getUtmSourceFromCookie from '@/helpers/funcs/getUtmSourceFromCookie'
import Logo from '@/ui/Logo'
import SearchProgram from '@/ui/SearchProgram'
import PopupFooterReviews from '../popups/PopupFooterReviews'

const Footer = () => {
  const [isEdpartners, setIsEdpartners] = useState(false)

  const partCookie = getCookie('utm')
  useEffect(() => {
    setTimeout(() => {
      const utmSource = getUtmSourceFromCookie()
      setIsEdpartners(utmSource === 'edpartners')
    }, 300)
  }, [isEdpartners, partCookie])

  return (
    <footer className={stls.container}>
      <Wrapper>
        <div className={stls.left}>
          <div className={stls.top}>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.staticLinks]: true
              })}>
              {staticLinks.map(link => (
                <li key={link.id} className={classNames(stls.linkItem, stls.staticLinkItem)}>
                  {link.id === 10 ? (
                    <a
                      href={link.href}
                      target='_blank'
                      className={classNames(stls.link, stls.staticLinks)}>
                      {link.val}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      target='_self'
                      className={classNames(stls.link, stls.staticLinks)}>
                      {link.val}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.fieldsLinks]: true
              })}>
              {programsLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.fieldsLinkItem]: true
                  })}>
                  <Link
                    href={link.href}
                    className={classNames({
                      [stls.link]: true,
                      [stls.fieldsLink]: true
                    })}>
                    {link.val}
                  </Link>
                </li>
              ))}
              <li
                // key={link.val + link.href}
                className={classNames({
                  [stls.linkItem]: true,
                  [stls.fieldsLinkItem]: true
                })}>
                <Link
                  href={'/journal'}
                  className={classNames({
                    [stls.link]: true,
                    [stls.fieldsLink]: true
                  })}>
                  Журнал
                </Link>
              </li>
              <li className={stls.logo}>
                <Logo atFooter />
              </li>
            </ul>
            {!isEdpartners ? (
              <div className={stls.contact}>
                <p>Приемная комиссия:</p>
                <div className={stls.numbers}>
                  <a href={company.phoneNumbers.default.href} className={stls.number}>
                    {company.phoneNumbers.default.val}
                  </a>
                  <a href={company.phoneNumbers.defaultAlt.href} className={stls.number}>
                    {company.phoneNumbers.defaultAlt.val}
                  </a>
                  <p>{company.phoneNumbers.studyDivision.contactType}:</p>
                  <a href={company.phoneNumbers.studyDivision.href} className={stls.number}>
                    {company.phoneNumbers.studyDivision.val}
                  </a>
                </div>
                <div className={stls.email}>
                  <p>Электронный адрес:</p>
                  <p className={stls.eadress}>info@mip.institute</p>
                </div>
                <GeneralAddress classNames={[stls.address]} />

                <div className={stls.sm}>
                  <BtnVk dark mlzero />
                  <BtnWhatsapp dark />
                  <BtnTelegram dark />
                  <BtnYt dark />
                  <BtnOk dark />
                  <BtnDzen />
                </div>
                <PopupFooterReviews />

                <div className={stls.btn}>
                  <PopupTrigger btn='beta' cta='askQuestion' />
                </div>
              </div>
            ) : (
              <PopupFooterReviews />
            )}

            <div className={stls.newRight}>
              <div className={stls.leaveApp}>
                <PopupTrigger btn='alpha' cta='submitApplication' />
              </div>
              <a href='https://lms.mip.institute/' className={stls.enterToPortal}>
                Вход
              </a>
              <SearchProgram />
              <p className={stls.primary}>
                Государственный контроль (надзор) в сфере образования:
                <span>
                  Департамент образования и науки города Москвы Федеральная служба по надзору в
                  сфере образования и науки
                </span>
              </p>

              <p className={stls.primary}>
                Научная автономная некоммерческая организация «Московский институт психологии» (НАНО
                «МИП») ИНН 9725041321 ОГРН 1207700479260 Лицензия департамента образования города
                Москвы на осуществление образовательной деятельности №041363 от 14.04.21.
              </p>
            </div>
          </div>
          <div className={stls.bottom}>
            <FooterBottom />
          </div>
        </div>
      </Wrapper>
      <div className={stls.footerBottom}>
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
