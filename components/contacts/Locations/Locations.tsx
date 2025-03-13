'use client'
import Wrapper from '@/ui/Wrapper'
import stls from './Locations.module.sass'
import { useState } from 'react'
import FilterTag from '@/components/filters/FilterTag'
import { almaty, moscow } from 'constants/contacts/locations'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'

const Locations = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const data = tabIndex === 0 ? moscow : almaty

  const handleTabChange = (index: number) => setTabIndex(index)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.mainTitle}>Контакты</h1>
        <div className={stls.toggles}>
          <FilterTag isCategories isActive={tabIndex === 0} onClick={() => handleTabChange(0)}>
            Москва
          </FilterTag>
          <FilterTag isCategories isActive={tabIndex === 1} onClick={() => handleTabChange(1)}>
            Алматы
          </FilterTag>
        </div>
        <p className={stls.address}>{data.address}</p>
        <div className={stls.blocks}>
          <YMaps>
            <div className={stls.map}>
              <Map
                className={stls.mapContainer}
                key={data.address}
                defaultState={{ center: data.coords, zoom: 17 }}
                options={{
                  suppressMapOpenBlock: true,
                  copyrightProvidersVisible: false,
                  copyrightUaVisible: false,
                  copyrightLogoVisible: false
                }}>
                <Placemark
                  geometry={data.coords}
                  properties={{ iconCaption: data.placemarkText }}
                  options={{ hasBalloon: false, iconColor: 'red' }}
                />
              </Map>
            </div>
          </YMaps>

          <div className={stls.cards}>
            {data.cards.map(({ mainTitle, items }, index) => (
              <div key={mainTitle} className={stls.card}>
                <span className={stls.cardTitle}>{mainTitle}</span>
                <ul className={stls.list}>
                  {items.map(({ title, text }) => (
                    <li key={title} className={stls.item}>
                      <span className={stls.itemTitle}>{title}</span>
                      {typeof text === 'string' ? (
                        <span className={stls.text}>{text}</span>
                      ) : (
                        <p className={stls.itemText}>
                          {text.map((text, idx) => (
                            <span key={idx} className={stls.text}>
                              {text}
                            </span>
                          ))}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Locations
