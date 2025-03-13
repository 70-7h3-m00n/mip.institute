import stls from '@/styles/components/popups/PopupTrainSteps.module.sass'
import ReactMarkdown from 'react-markdown'
import Popup from 'reactjs-popup'
import IconPracticalStepInfo from '../icons/IconPracticalStepInfo'
import IconClosePopupSteps from '../icons/IconClosePopupSteps'
import { ReactNode } from 'react'

type PopupTrainStepsType = {
  title: string
  text: string
}

const PopupTrainSteps = ({ title, text }: PopupTrainStepsType) => {
  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={stls.strongText}>{children}</span>
    )
  }

  return (
    <Popup
      trigger={
        <div>
          <IconPracticalStepInfo />
        </div>
      }
      modal
      nested>
      {
        ((close: () => void) => (
          <div className={stls.container}>
            <h2 className={stls.title}>{title}</h2>
            <div className={stls.text}>
              <ReactMarkdown components={customRenderers}>{text}</ReactMarkdown>
            </div>
            <button className={stls.closeBtn} onClick={close}>
              <span className={stls.btnText}>Закрыть окно</span>
              <IconClosePopupSteps />
            </button>
          </div>
        )) as unknown as ReactNode
      }
    </Popup>
  )
}

export default PopupTrainSteps
