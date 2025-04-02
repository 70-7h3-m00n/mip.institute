import stls from '@/styles/components/popups/PopupThankyouNew.module.sass'
import { useContext, useEffect } from 'react'
import { ContextStaticProps } from '@/context/index'
import TagManager from 'react-gtm-module'
import BtnClose from '@/components/btns/BtnClose'
import { v4 as uuidv4 } from 'uuid'
import GratefullNew from '../sections/GratefullNew'
import Script from 'next/script'

const PopupThankyouNew = ({ close }) => {
  const { program } = useContext(ContextStaticProps)


  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: 'lead',
        ecommerce: {
          add: {
            actionField: {
              id: uuidv4()
            },
            products: [
              {
                id: (program && program._id) || (program && program.id) || null,
                name: (program && program.title) || null,
                price: (program && program.price) || null,
                type: (program && program.typeLabel) || null
              }
            ]
          }
        }
      },
      dataLayerName: 'dataLayer'
    }
    TagManager.dataLayer(tagManagerArgs)
  }, [program])
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} iconCloseCircle />
      </div>
      <GratefullNew backButton={false} />
      <Script
        id='registration'
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-822792302/ktI6CJG-0toZEO6gq4gD'});
          `
        }}
      />
      {/* {isPsyCons && (
        <Script
        id='sendFormPsyCons'
        dangerouslySetInnerHTML={{
          __html: `
            dataLayer.push({'event':'sendForm2401'});
          `
        }}
      />
      )} */}
    </div>
  )
}

export default PopupThankyouNew
