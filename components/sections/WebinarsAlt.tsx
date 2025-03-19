import stls from '@/styles/components/sections/WebinarsAlt.module.sass'
import Wrapper from '@/ui/Wrapper'
import Popup from 'reactjs-popup'
import PopupTrigger from '@/ui/PopupTrigger'
import CardWebinarAlt from '@/components/cards/CardWebinarAlt'
import ImgWebinar from '@/components/imgs/webinars/ImgWebinar'
import getImageHeight from '@/helpers/getImageHeight'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const PopupCta = dynamic(() => import('@/components/popups/PopupCta'), {
  ssr: false
})

type WebinarsAltType = {
  webinars: any
}

const WebinarsAlt = ({ webinars = null }: WebinarsAltType) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Вебинары</h1>
        <ul className={stls.webinars}>
          {webinars &&
            [...webinars]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((webinar, idx) => (
                <li key={`${webinar.name || 'CardWebinarAlt'}-${idx}`} className={stls.webinar}>
                  <Popup
                    trigger={
                      <div className={stls.trigger}>
                        <CardWebinarAlt
                          date={webinar.date}
                          name={webinar.name}
                          picture={
                            <ImgWebinar
                              src={webinar?.picture?.url}
                              alt={webinar.title}
                              width={70}
                              height={getImageHeight({
                                width: 70,
                                widthInitial: webinar?.picture?.width,
                                heightInitial: webinar?.picture?.height
                              })}
                            />
                          }
                          title={webinar.title}
                        />
                      </div>
                    }
                    modal
                    nested>
                    {
                      ((close: () => void) => (
                        <PopupCta
                          blockForAmo='Узнать про вебинары'
                          title={'Смотреть все вебинары'}
                          desc={
                            <>
                              Оставьте заявку, мы свяжемся с Вами в рабочие часы и предоставим
                              полный список вебинаров
                            </>
                          }
                          cta={'Оставить заявку'}
                          close={close}
                        />
                      )) as unknown as ReactNode
                    }
                  </Popup>
                </li>
              ))}
        </ul>
        <div className={stls.btn}>
          <PopupTrigger btn='delta' cta='seeAllWebinars' />
        </div>
      </Wrapper>
    </section>
  )
}

export default WebinarsAlt
