import React from 'react'
import stls from './FooterBottom.module.sass'
import { bottomFooterLinks } from 'constants/footer'

const FooterBottom = () => {
  return (
    <footer className={stls.container}>
      <div className={stls.footerGrid}>
        {bottomFooterLinks.map((column, index) => (
          <div className={stls.footerColumn} key={index}>
            {column.map((item, i) =>
              item.href ? (
                <a key={i} href={item.href} className={stls.link}>
                  {item.title}
                </a>
              ) : (
                <span key={i} className={stls.text}>
                  {item.text?.includes('Департамент') ? (
                    <>
                      Государственный контроль (надзор) в сфере образования:{' '}
                      <div className={stls.highlight}>
                        <a
                          href='https://www.mos.ru/donm/'
                          target='_blank'
                          rel='noopener noreferrer'>
                          Департамент образования и науки города Москвы,
                        </a>
                      </div>
                      <br />
                      <div className={stls.highlight}>
                        <a
                          href='https://obrnadzor.gov.ru'
                          target='_blank'
                          rel='noopener noreferrer'>
                          Федеральная служба по надзору в сфере образования и науки
                        </a>
                      </div>
                    </>
                  ) : (
                    item.text
                  )}
                </span>
              )
            )}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default FooterBottom
