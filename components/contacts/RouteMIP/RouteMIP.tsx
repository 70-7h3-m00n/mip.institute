'use client'

import { useState } from 'react'
import Image from 'next/image'
import stls from './RouteMIP.module.sass'
import { metroStations } from './constant'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Wrapper from '@/ui/Wrapper'
import routes from '@/config/routes'
import IconTextButton from '@/ui/IconTextButton'
import IconLocationArrow from '@/components/icons/IconLocationArrow'
import MetroSelectButton from './MetroSelectButton'

const RouteMIP = () => {
  const [selectedStation, setSelectedStation] = useState(metroStations[0])
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const handleChange = (id: string) => {
    const station = metroStations.find(station => station.id === id)
    if (station) setSelectedStation(station)
  }

  const makeRoute = () => window.open(routes.external.yandex, '_blank')
  const showImgBlock = !isMobileAndTabletLayout && selectedStation.imgBlock
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Как до нас добраться?</h2>
        <div className={stls.controls}>
          <MetroSelectButton selectedStation={selectedStation} onChange={handleChange} />
          <IconTextButton
            backgroundColor='#8F60FF'
            text='Построить маршрут'
            onClick={makeRoute}
            icon={
              <span className={stls.location}>
                <IconLocationArrow />
              </span>
            }
          />
        </div>
        <div className={stls.contentWrapper}>
          <div className={stls.imageContainer}>
            <Image
              src={selectedStation.img}
              alt={`Маршрут от метро ${selectedStation.name}`}
              width={570}
              height={550}
              className={stls.metroImage}
            />
          </div>
          <div className={stls.textContainer}>
            <div className={stls.textBlock}>
              <p className={stls.textBlockTitle}>Пешком</p>
              <p className={stls.description}>
                <span className={stls.highlight}>На станции «{selectedStation.name}»</span>{' '}
                {selectedStation.walking}
              </p>
            </div>
            <div className={stls.textBlockCar}>
              <p className={stls.textBlockTitle}>На машине</p>
              <p className={stls.parkingDescription}>
                <span className={stls.highlight}>Комфортный паркинг: </span>
                {selectedStation.car.parking}
              </p>
              <p className={stls.radiusDescription}>
                <span className={stls.highlight}>В радиусе 5 минут пешком: </span>
                {selectedStation.car.radius}
              </p>
            </div>
            {showImgBlock && (
              <Image
                src={selectedStation.imgBlock}
                alt={`Увеличенный маршрут от метро ${selectedStation.name}`}
                width={570}
                height={560}
                className={stls.imgBlock}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default RouteMIP
