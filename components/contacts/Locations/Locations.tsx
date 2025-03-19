'use client'
import Wrapper from '@/ui/Wrapper'
import stls from './Locations.module.sass'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import FilterTag from '@/components/filters/FilterTag'
import { almaty, moscow } from 'constants/contacts/contacts'
import { City } from '@/components/contacts/ContactsClient'

type LocationsProps = {
  selectedCity: City
  setSelectedCity: (city: City) => void
}

const Locations = ({ selectedCity, setSelectedCity }: LocationsProps) => {
  const data = selectedCity === City.Moscow ? moscow : almaty

  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.mainTitle}>Контакты</h1>
        <div className={stls.toggles}>
          <FilterTag
            isCategories
            isActive={selectedCity === City.Moscow}
            onClick={() => setSelectedCity(City.Moscow)}>
            Москва
          </FilterTag>
          <FilterTag
            isCategories
            isActive={selectedCity === City.Almaty}
            onClick={() => setSelectedCity(City.Almaty)}>
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
            {data.cards.map(({ mainTitle, items }) => (
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
