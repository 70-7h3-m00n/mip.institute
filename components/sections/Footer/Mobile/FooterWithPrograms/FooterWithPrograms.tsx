import { useState } from 'react'
import stls from './FooterWithPrograms.module.sass'
import { topFooterLinks } from 'constants/footer'
import IconArrowRight from '@/components/icons/IconArrowRight'

const FooterWithPrograms = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index))
  }

  return (
    <div className={stls.accordion}>
      {topFooterLinks.map((column, index) => (
        <div key={index} className={stls.accordionItem}>
          <button className={stls.accordionHeader} onClick={() => toggleAccordion(index)}>
            {column[0].title}
            <span className={`${stls.icon} ${openIndex === index ? stls.rotate : ''}`}>
              <IconArrowRight />
            </span>
          </button>
          <div className={`${stls.accordionContent} ${openIndex === index ? stls.open : ''}`}>
            {column.slice(1).map((item, i) => (
              <a key={i} href={item.href} className={stls.link}>
                {item.val}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterWithPrograms
