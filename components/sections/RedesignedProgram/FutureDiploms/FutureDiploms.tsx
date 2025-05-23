import Wrapper from '@/ui/Wrapper'
import stls from './FutureDiploms.module.sass'
import { CldImage } from 'next-cloudinary'
import Popup from 'reactjs-popup'
import PopupImage from '@/components/popups/PopupImage'
import license from 'public/assets/imgs/legal/licenceNew.png'
import supplement from 'public/assets/imgs/diplomas/supplement.jpg'
import Image from 'next/image'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const FutureDiploms = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container} id='diploma'>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.holoWithText}>
            <CldImage
              src='diploma_Holo_Big_d9e7192d3e'
              alt='Голограмма'
              width={200}
              className={stls.holoImg}
              height={280}
            />
            <span className={stls.licenceDesk}>Образовательная лицензия №041221</span>
          </div>

          <div className={stls.rightBlock}>
            <div className={stls.centerText}>
              <h2>Ваш будущий диплом</h2>
              <p className={stls.subtitle}>
                Диплом о профессиональной {isMobileAndTabletLayout && <br />} переподготовке с
                присвоением <br /> квалификации
                <span> «Психолог-консультант» </span> установленного образца
              </p>
              <span className={stls.licenceMob}>Образовательная лицензия №041221</span>
            </div>

            <div className={stls.diplomasPopups}>
              <Popup
                trigger={
                  <div className={stls.licenceImg}>
                    <Image src={license} alt='Лицензия' width={200} height={270} />
                  </div>
                }
                modal
                nested
                closeOnDocumentClick>
                {
                  ((close: () => void) => (
                    <PopupImage
                      image={
                        <div>
                          <Image
                            src={license}
                            alt='Лицензия МИП'
                            width={isMobileAndTabletLayout ? 350 : 500}
                            height={isMobileAndTabletLayout ? 450 : 700}
                          />
                        </div>
                      }
                      close={close}
                    />
                  )) as unknown as React.ReactNode
                }
              </Popup>

              <Popup
                trigger={
                  <div className={stls.certificateImg}>
                    <CldImage
                      src='universal_Certificate_bb38283810'
                      alt='Сертификат'
                      width={230}
                      height={160}
                    />
                  </div>
                }
                modal
                nested
                closeOnDocumentClick>
                {
                  ((close: () => void) => (
                    <PopupImage
                      image={
                        <div>
                          <CldImage
                            src='universal_Certificate_bb38283810'
                            alt='Изображение сертификата'
                            width={isMobileAndTabletLayout ? 400 : 620}
                            height={isMobileAndTabletLayout ? 300 : 500}
                          />
                        </div>
                      }
                      close={close}
                    />
                  )) as unknown as React.ReactNode
                }
              </Popup>

              <Popup
                trigger={
                  <div className={stls.diplomaImg}>
                    <CldImage
                      src='universal_Diploma_409bea32a4'
                      alt='Диплом'
                      width={240}
                      height={170}
                    />
                  </div>
                }
                modal
                nested
                closeOnDocumentClick>
                {
                  ((close: () => void) => (
                    <PopupImage
                      image={
                        <div>
                          <CldImage
                            src='universal_Diploma_409bea32a4'
                            alt='Изображение диплома'
                            width={isMobileAndTabletLayout ? 400 : 620}
                            height={isMobileAndTabletLayout ? 300 : 500}
                          />
                        </div>
                      }
                      close={close}
                    />
                  )) as unknown as React.ReactNode
                }
              </Popup>

              <Popup
                trigger={
                  <div className={stls.supplementImg}>
                    <p className={stls.arrowText}>
                      <span>
                        Кликните, чтобы
                        <br /> рассмотреть поближе
                      </span>
                      <span className={stls.arrowIcon}>
                        {isMobileAndTabletLayout ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='52'
                            viewBox='0 0 24 52'
                            fill='none'>
                            <path
                              d='M6.07285 0.732507C5.92535 0.751953 5.82155 0.887288 5.841 1.03479L6.1579 3.43838C6.17735 3.58588 6.31268 3.68968 6.46018 3.67024C6.60768 3.65079 6.71148 3.51546 6.69204 3.36796L6.41034 1.23143L8.54687 0.949733C8.69437 0.930286 8.79817 0.794952 8.77873 0.647455C8.75928 0.499959 8.62395 0.396153 8.47645 0.415601L6.07285 0.732507ZM0.688492 51.5653L0.69589 51.8346C10.8699 51.5551 19.7823 44.5502 22.381 34.7199C24.9843 24.8719 21.2389 12.2658 6.27201 0.78583L6.10806 0.999573L5.94412 1.21332C20.7921 12.6021 24.3925 25.0026 21.8601 34.5822C19.323 44.1794 10.6183 51.0231 0.681095 51.296L0.688492 51.5653Z'
                              fill='white'
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='23'
                            height='53'
                            viewBox='0 0 23 53'
                            fill='none'>
                            <path
                              d='M5.6041 51.7724C5.4566 51.7529 5.3528 51.6176 5.37225 51.4701L5.68915 49.0665C5.7086 48.919 5.84393 48.8152 5.99143 48.8346C6.13893 48.8541 6.24273 48.9894 6.22329 49.1369L5.94159 51.2735L8.07812 51.5551C8.22562 51.5746 8.32942 51.7099 8.30998 51.8574C8.29053 52.0049 8.1552 52.1087 8.0077 52.0893L5.6041 51.7724ZM0.219742 0.93957L0.22714 0.670297C10.4011 0.949773 19.3135 7.95465 21.9122 17.785C24.5155 27.633 20.7701 40.2391 5.80326 51.7191L5.63931 51.5053L5.47537 51.2916C20.3233 39.9028 23.9237 27.5023 21.3913 17.9227C18.8543 8.32547 10.1495 1.48182 0.212345 1.20885L0.219742 0.93957Z'
                              fill='white'
                            />
                          </svg>
                        )}
                      </span>
                    </p>
                    <Image src={supplement} alt='Приложение' width={200} height={270} />
                  </div>
                }
                modal
                nested
                closeOnDocumentClick>
                {
                  ((close: () => void) => (
                    <PopupImage
                      image={
                        <div>
                          <Image
                            src={supplement}
                            alt='Изображение приложения'
                            width={isMobileAndTabletLayout ? 350 : 500}
                            height={isMobileAndTabletLayout ? 450 : 700}
                          />
                        </div>
                      }
                      close={close}
                    />
                  )) as unknown as React.ReactNode
                }
              </Popup>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FutureDiploms
