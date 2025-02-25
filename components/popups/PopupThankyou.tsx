import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { useContext, useEffect } from 'react'
import { ContextStaticProps } from '@/context/index'
import TagManager from 'react-gtm-module'
import BtnClose from '@/components/btns/BtnClose'
import { v4 as uuidv4 } from 'uuid'

const PopupThankyou = ({ close }) => {
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
      <h3 className={stls.title}>Заявка отправлена</h3>
      <p className={stls.desc}>
        Мы свяжемся с Вами в рабочие часы в ближайшее время
      </p>
      <p className={stls.thanks}>Спасибо! 🎉 🎉</p>
    </div>
  )
}

export default PopupThankyou
