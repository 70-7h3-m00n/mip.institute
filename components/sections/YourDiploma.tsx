import {
  ImgCertificate,
  ImgCertificateAlt,
  ImgDiploma,
  ImgDiplomaAlt,
  ImgDiplomaDynamic,
  ImgSupplement
} from '@/components/imgs/diplomas'
import Wrapper from '@/ui/Wrapper'
import PopupImage from '@/components/popups/PopupImage'
import { getImageHeight } from '@/helpers/index'
import stls from '@/styles/components/sections/YourDiploma.module.sass'
import cn from 'classnames'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import ImgBachelorDiplomaAlt from '../imgs/diplomas/ImgBachelorDiplomaAlt'
import ImgBachelorDiploma from '../imgs/diplomas/ImgBachelorDiplome'
import LicensePopUp from './LicensePopUp'
import Tag from '@/ui/Tag'
import LicenseImg from '@/public/assets/imgs/legal/licence.jpg'
import Image from 'next/image'
import { useProgramsSafe } from '@/hooks/general/useSafeContext'

type YourDiplomaType = {
  ofType?: string
  diplomaRef?: React.RefObject<HTMLElement>
  onMain?: boolean
  isBachelor?: boolean
  close?: () => void
  programSlug?: string | null
}

const withAddInfo = [
  'nejropsiholog',
  'detskij-nejropsiholog',
  'detskij-psiholog',
  'klinicheskaya-psihologiya',
  'logoped-s-dop.-kvalifikaciej-specialnyj-psiholog',
  'pedagog-psiholog'
]

const YourDiploma = ({
  ofType,
  diplomaRef,
  onMain = false,
  isBachelor = false,
  close,
  programSlug
}: YourDiplomaType) => {
  const slides: JSX.Element[] = []

  const {
    state: { program }
  } = useProgramsSafe()

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
            <Tag type='orange'>Образование</Tag>
          </div>
        )}
        <h2 className={stls.title}>Ваши будущие дипломы</h2>

        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.subtitleContainer}>
              {onMain && (
                <>
                  <p className={stls.mainSubtitle}>{subtitleMain.slice(0, cut)}</p>
                  {!showFullText && <span className={stls.threePoints}>...</span>}
                  <p onClick={cutHandler} className={stls.moreText}>
                    {showFullText ? 'Скрыть описание' : 'Читать далее'}
                  </p>
                </>
              )}
              {!onMain && (
                <p className={stls.subtitle}>
                  Все наши программы лицензированы, а дипломы имеют международные приложения,
                  поэтому они ценятся клиентами и профессиональным психологическим сообществом как в
                  России, так и за рубежом!
                </p>
              )}
              <div className={stls.btn}>
                <LicensePopUp onBachelor={!onMain} />
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
                <PopupImage image={slide.props.children} close={close} />
              </Popup>
            ))}
          </div>
        </div>
        <div className={stls.mobileBtn}>
          <LicensePopUp onBachelor={!onMain} showFullText={showFullText} />
        </div>
        {programSlug && withAddInfo.includes(programSlug) && (
          <p className={stls.addInfo}>
            *Диплом и присваиваемая квалификация отображены при условии профильного высшего
            образования
          </p>
        )}
      </Wrapper>
    </section>
  )
}

export default YourDiploma
