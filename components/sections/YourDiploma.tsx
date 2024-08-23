import {
  ImgCertificate,
  ImgCertificateAlt,
  ImgDiploma,
  ImgDiplomaAlt,
  ImgDiplomaDynamic,
  ImgSupplement
} from '@/components/imgs'
import Wrapper from '@/components/layout/Wrapper'
import { PopupImage } from '@/components/popups'
import { ContextStaticProps } from '@/context/index'
import { getImageHeight } from '@/helpers/index'
import stls from '@/styles/components/sections/YourDiploma.module.sass'
import cn from 'classnames'
import { useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import TagOrange from '../general/TagOrange'
import ImgBachelorDiplomaAlt from '../imgs/diplomas/ImgBachelorDiplomaAlt'
import ImgBachelorDiploma from '../imgs/diplomas/ImgBachelorDiplome'
import LicensePopUp from './LicensePopUp'

type YourDiplomaType = {
  ofType?: string
  diplomaRef?: React.RefObject<HTMLElement | null>
  onMain?: boolean
  isBachelor?: boolean
}

const YourDiploma = ({
  ofType = null,
  diplomaRef = null,
  onMain = false,
  isBachelor = false
}: YourDiplomaType) => {
  const slides = []

  const { program } = useContext(ContextStaticProps)

  ofType === 'Profession' &&
    slides.push(
      <div className={stls.diploma}>
        {program?.diploma2 ? (
          <ImgDiplomaDynamic
            key='diploma-alt'
            src={program?.diploma2?.url}
            width={program?.diploma2?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma2?.width,
              heightInitial: program?.diploma2?.height
            })}
            diplomaAlt
          />
        ) : (
          <ImgDiplomaAlt key='diploma-alt' />
        )}
      </div>,
      <div className={stls.diploma}>
        {program?.diploma1 ? (
          <ImgDiplomaDynamic
            key='diploma'
            src={program?.diploma1?.url}
            width={program?.diploma1?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma1?.width,
              heightInitial: program?.diploma1?.height
            })}
          />
        ) : (
          <ImgDiploma key='diploma' />
        )}
      </div>,

      <div className={cn(stls.diploma, stls.supplement)}>
        <ImgSupplement key='supplement' />
      </div>
    )

  isBachelor &&
    slides.push(
      <div className={stls.diploma}>
        {program?.diploma2 ? (
          <ImgDiplomaDynamic
            key='diploma-alt'
            src={program?.diploma2?.url}
            width={program?.diploma2?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma2?.width,
              heightInitial: program?.diploma2?.height
            })}
            diplomaAlt
          />
        ) : (
          <ImgBachelorDiplomaAlt key='diploma-alt' />
        )}
      </div>,
      <div className={stls.diploma}>
        {program?.diploma1 ? (
          <ImgDiplomaDynamic
            key='diploma'
            src={program?.diploma1?.url}
            width={program?.diploma1?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma1?.width,
              heightInitial: program?.diploma1?.height
            })}
          />
        ) : (
          <ImgBachelorDiploma key='diploma' />
        )}
      </div>,

      <div className={cn(stls.diploma, stls.supplement)}>
        <ImgSupplement key='supplement' />
      </div>
    )

  ofType === 'Course' &&
    slides.push(
      <div className={stls.diploma}>
        {program?.diploma1 ? (
          <ImgDiplomaDynamic
            key='certificate'
            src={program?.diploma1?.url}
            width={program?.diploma1?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma1?.width,
              heightInitial: program?.diploma1?.height
            })}
            diplomaCertificate
          />
        ) : (
          <ImgCertificate key='certificate' />
        )}
      </div>,
      <div className={stls.diploma}>
        {program?.diploma2 ? (
          <ImgDiplomaDynamic
            key='certificate-alt'
            src={program?.diploma2?.url}
            width={program?.diploma2?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma2?.width,
              heightInitial: program?.diploma2?.height
            })}
            diplomaCertificateAlt
          />
        ) : (
          <ImgCertificateAlt key='certificate-alt' />
        )}
      </div>
    )

  const mobileSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 10
  }
  const tabletLaptopDesktopSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 30
  }

  const [cut, setCut] = useState(184)
  const [showFullText, setShowFullText] = useState(false)

  const cutHandler = () => {
    setShowFullText(!showFullText)
    if (!showFullText) {
      setCut(500)
    } else {
      setCut(184)
    }
  }
  const subtitleMain =
    'Все наши программы лицензированы, а дипломы имеют международные приложения, поэтому они ценятся клиентами и профессиональным психологическим сообществом как в России, так и за рубежом! По окончании программ профессиональной переподготовки и курсов повышения квалификации выпускники института получают официальный документ установленного образца, который вносится в реестр ФРДО, а в дополнение — сертификат Московского Института Психологии в формате А4'

  return (
    <section ref={diplomaRef} className={stls.container}>
      <Wrapper>
        {onMain && (
          <div className={stls.tag}>
            <TagOrange>Образование</TagOrange>
          </div>
        )}
        <h2 className={stls.title}>Ваши будущие дипломы</h2>

        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.subtitleContainer}>
              {onMain && (
                <>
                  <p className={stls.mainSubtitle}>
                    {subtitleMain.slice(0, cut)}
                  </p>
                  {!showFullText && (
                    <span className={stls.threePoints}>...</span>
                  )}
                  <p onClick={cutHandler} className={stls.moreText}>
                    {showFullText ? 'Скрыть описание' : 'Читать далее'}
                  </p>
                </>
              )}
              {!onMain && (
                <p className={stls.subtitle}>
                  Все наши программы лицензированы, а дипломы имеют
                  международные приложения, поэтому они ценятся клиентами и
                  профессиональным психологическим сообществом как в России, так
                  и за рубежом!
                </p>
              )}
              <div className={stls.btn}>
                <LicensePopUp onBachelor showFullText={showFullText} />
              </div>
            </div>
          </div>
          <div className={stls.slidesContainer}>
            {slides.map((slide, index) => (
              <Popup
                key={`popup-${index}`}
                trigger={<div className={stls.trigger}>{slide}</div>}
                modal
                nested>
                {close => (
                  <PopupImage image={slide.props.children} close={close} />
                )}
              </Popup>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourDiploma
