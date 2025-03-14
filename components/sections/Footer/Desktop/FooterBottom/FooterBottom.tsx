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
              item.href && !item.common ? (
                <a key={i} href={item.href} className={stls.link} target={item.target || '_self'}>
                  {item.title}
                </a>
              ) : (
                <span key={i} className={stls.text}>
                  {item.common ? (
                    <>
                      <span>Государственный контроль (надзор) в сфере образования:</span>
                      <br />
                      <a
                        key={i}
                        href={item.href}
                        className={stls.link}
                        target='_blank'
                        rel='noopener noreferrer'>
                        {item.title}
                      </a>
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
