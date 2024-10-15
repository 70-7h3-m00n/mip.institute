import {
  BtnAlpha,
  BtnBeta,
  BtnDelta,
  BtnEpsilon,
  BtnEta,
  BtnGamma,
  BtnText,
  BtnTheta,
  BtnZeta
} from '@/components/btns'
import stls from '@/styles/components/popups/PopupReviewNew.module.sass'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Popup from 'reactjs-popup'
import IconClosePopupPractical from '../icons/IconClosePopupPractical'

type PopupReviewNewType = {
  btn:
    | 'alpha'
    | 'beta'
    | 'gamma'
    | 'delta'
    | 'epsilon'
    | 'zeta'
    | 'eta'
    | 'theta'
    | 'text'
    | 'test'
  cta: 'askQuestion'
  name: string
  slides: {
    answer: string
    question: string
  }[]
  image: {
    url: string
  }
}

const PopupReviewNew = ({
  btn,
  cta,
  slides,
  image,
  name
}: PopupReviewNewType) => {
  const strings = {
    trigger: {
      askQuestion: 'Читать всю историю'
    },
    title: {
      askQuestion: 'Читать всю историю'
    },
    blockForAmo: {
      askQuestion: 'Читать всю историю'
    }
  }

  const ButtonComponent = {
    alpha: BtnAlpha,
    beta: BtnBeta,
    gamma: BtnGamma,
    delta: BtnDelta,
    epsilon: BtnEpsilon,
    zeta: BtnZeta,
    eta: BtnEta,
    theta: BtnTheta,
    text: BtnText,
    test: BtnGamma
  }[btn]

  const SlideContent = ({ slide, isFirstSlide }) => {
    const formattedAnswer = slide.answer
      .replace(/(–\s)/g, '\n\n$1')
      .replace(/(\d+\.\s)/g, '\n\n$1')

    return (
      <>
        <div className={stls.question}>{slide.question}</div>
        <div className={stls.answer}>
          {isFirstSlide && <span className={stls.strongText}>Ответ:</span>}
          <ReactMarkdown>{formattedAnswer}</ReactMarkdown>
        </div>
      </>
    )
  }
  return (
    <Popup
      trigger={
        <div>
          <ButtonComponent
            text={strings.trigger[cta]}
            ctheta={btn === 'text'}
            test={btn === 'test'}
          />
        </div>
      }
      modal
      nested>
      {
        // @ts-ignore
        close => (
          <div className={stls.container}>
            <div className={stls.leftBlock}>
              <div className={stls.personImage}>
                <Image
                  src={image.url ?? ''}
                  alt='Выпускник'
                  width={112}
                  height={112}
                  className={stls.personImg}
                />
              </div>
              <p className={stls.name}>{name}</p>
              <SlideContent isFirstSlide={true} slide={slides[0]} />
            </div>
            <div className={stls.rigthBlock}>
              <SlideContent isFirstSlide={false} slide={slides[1]} />
            </div>
            <button className={stls.closeBtn} onClick={close}>
              <IconClosePopupPractical />
            </button>
          </div>
        )
      }
    </Popup>
  )
}

export default PopupReviewNew
