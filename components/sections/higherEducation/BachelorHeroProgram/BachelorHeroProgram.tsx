import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import { ContextStaticProps } from '@/context/index'
import stls from './BachelorHeroProgram.module.sass'
import classNames from 'classnames'
import validTitles from 'constants/higherEducation/bachelorHeroProgram'
import { ReactNode, useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import Breadcrumbs from '@/ui/Breadcrumbs'
import BachelorFullProgramPopup from '@/components/popups/BachelorFullProgramPopup'
import BachelorProgramInfo from '../BachelorProgramInfo/BachelorProgramInfo'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const BachelorHeroProgram = () => {
  const { bachelor } = useContext(ContextStaticProps)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const cta = 'signUp'

  const analysis = validTitles.includes(bachelor?.title)

  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)

  return (
    <>
      {isMobileAndTabletLayout && (
        <>
          <div
            className={stls.mobileBg}
            style={{
              backgroundImage: `url(${bachelor?.heroPicture?.url})`
            }}>
            <span className={stls.filter}></span>
            <div className={stls.content}>
              <div>
                <h1 className={stls.title}>
                  <span>{bachelor?.educationCode}</span>
                  {bachelor?.title}
                </h1>
                <div className={stls.mobileFlex}>
                  <div className={stls.descriptionMobile}>
                    <p className={stls.mobiledesc}>{bachelor?.shortDescription}</p>
                    <Popup
                      open={open}
                      onClose={closeModal}
                      trigger={
                        <button onClick={() => setOpen(o => !o)} className={stls.moreText}>
                          Читать описание
                        </button>
                      }
                      position='right center'
                      modal
                      nested>
                      {
                        ((close: () => void) => (
                          <BachelorFullProgramPopup
                            close={close}
                            content={bachelor?.fullDescription}
                          />
                        )) as unknown as ReactNode
                      }
                    </Popup>
                  </div>
                </div>
                <div className={stls.btnsMobile}>
                  <PopupTrigger btn='alpha' cta={cta} />
                  <PopupTrigger btn='beta' cta='askQuestion' />
                </div>
              </div>
            </div>
          </div>
          <div className={stls.info}>
            <BachelorProgramInfo />
          </div>
        </>
      )}
      {!isMobileAndTabletLayout && (
        <section className={stls.container}>
          <Wrapper>
            <div
              className={stls.desktopBg}
              style={{
                backgroundImage: `url(${bachelor?.heroPicture?.url})`
              }}>
              <span className={stls.filter}></span>
              <div className={stls.heading}>
                <Breadcrumbs lastLabel={bachelor?.title} />
                <h1
                  className={classNames({
                    [stls.title]: true,
                    [stls.analysis]: analysis
                  })}>
                  <span>{bachelor?.educationCode}</span>
                  {bachelor?.title}
                </h1>
                <div className={stls.descriptionDesktop}>
                  <p className={stls.mobiledesc}>{bachelor?.shortDescription}</p>
                  <Popup
                    onClose={closeModal}
                    trigger={<button className={stls.moreText}>{'Читать описание'}</button>}
                    position='right center'>
                    <BachelorFullProgramPopup content={bachelor?.fullDescription} />
                  </Popup>
                </div>
                <div className={stls.btnsDesktop}>
                  <PopupTrigger btn='alpha' cta={cta} />
                  <PopupTrigger btn='beta' cta='askQuestion' />
                </div>
                <BachelorProgramInfo />
              </div>
            </div>
          </Wrapper>
        </section>
      )}
    </>
  )
}

export default BachelorHeroProgram
