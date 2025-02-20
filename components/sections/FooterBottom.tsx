import React from 'react'
import stls from '@/styles/components/sections/FooterBottom.module.sass'
import bottomFooterLinks from 'constants/footerBottom'

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
                      <span className={stls.highlight}>
                        Департамент образования и науки города Москвы Федеральная служба по надзору
                        в сфере образования и науки
                      </span>
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
